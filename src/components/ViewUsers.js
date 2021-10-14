import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import firebaseDb from "../firebase";
import image from './dog_logo.png';

const ViewUsers = () => {
  const [data, setData] = useState({});

  let currentId = useParams();
  const { id } = currentId;
  useEffect(() => {
      firebaseDb.child("Contacts").on("value", (snapshot) => {
        if (snapshot.val() !== null) {
          setData({
            ...snapshot.val(),
          });
        } else {
          snapshot({});
        }
      });
    }, [id]);

  return (
    <div className="container mt-5">
      {Object.keys(data).map((userId) => {
        if (userId === id) {
          return (
            <div>
              <img src={image} class="card-img-top" style={{ width: "200px", position: "center"  }} alt="dog"/>
              <div class="card-header lead">User Detail</div>
              <div class="card-body">
                <p class="card-text">Name: {data[id].fullName}</p>
                <p class="card-text">Contacts: {data[id].contacts}</p>
                <p class="card-text">Email: {data[id].email}</p>
                <Link to="/">
                  <button className="btn btn-info">Back</button>
                </Link>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default ViewUsers;
