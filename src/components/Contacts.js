import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";

function Contacts () {
  const [data, setData] = useState({});
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    firebaseDb.child("Contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({
          ...snapshot.val(),
        });
      } else {
        setData({});
      }
    });
  }, []);

  function addOrEdit (obj) {
    if (currentId === "") {
      firebaseDb.child("Contacts").push(obj, (error) => {
        if (error) {
          console.log(error);
        } else {
          setCurrentId("");
        }
      });
    } else {
      firebaseDb.child(`Contacts/${currentId}`).set(obj, (error) => {
        if (error) {
          console.log(error);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  function onDelete (id) {
    if (window.confirm("The contact details will be permanently deleted. Do you want to proceed?")) {
      firebaseDb.child(`Contacts/${id}`).remove((eror) => {
        if (error) {
          console.log(error);
        } else {
          setCurrentId("");
        }
      });
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact List</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm
            addOrEdit={addOrEdit}
            data={data}
            currentId={currentId}
          />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thread-light">
              <tr>
                <th>Full Name</th>
                <th>Contacts</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(data).map((id) => {
                return (
                  <tr key={id}>
                    <td>{data[id].fullName}</td>
                    <td>{data[id].contacts}</td>
                    <td>{data[id].email}</td>
                    <td>
                      <a
                        className="btn text-primary"
                        onClick={() => setCurrentId(id)}
                      >
                        <i className="fas fa-edit" />
                      </a>
                      <a
                        className="btn text-danger"
                        onClick={() => onDelete(id)}
                      >
                        <i className="fas fa-trash" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
