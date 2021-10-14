import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from "../redux/actions";

const ContactList = () => {
  const { contacts: data } = useSelector((state) => state.data);

  let dispatch = useDispatch ();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onDelete = (id) => {
    if (window.confirm("The contact details will be permanently deleted. Do you want to proceed?")) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="jumbotron">
              <h1 className="display-2">ReactJS Contact Management System</h1>
            </div>
            <table className="table table-hover table-light">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Contacts</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(data).map((id, index) => {
                  return (
                    <tr key={id}>
                      <th scope="row">{index + 1}</th>
                      <td>{data[id].fullName}</td>
                      <td>{data[id].contacts}</td>
                      <td>{data[id].email}</td>
                      <td>
                        <Link to={`/Update/${id}`}>
                          <p className="btn text-primary">
                            <i className="fas fa-edit" />
                          </p>
                        </Link>
                        <Link to={`/View/${id}`}>
                          <p className="btn text-info">
                            <i className="far fa-eye" />
                          </p>
                        </Link>
                        <p
                          className="btn text-danger"
                          onClick={() => onDelete(id)}
                        >
                          <i className="fas fa-trash" />
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactList;
