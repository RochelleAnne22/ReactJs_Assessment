import React, { useState, useEffect } from "react";

function ContactForm ({ addOrEdit, currentId, data }) {
  const values = {
    fullName: "",
    contacts: "",
    email: "",
  };
  const [initialState, setState] = useState(values);

  console.log("currentId", currentId);

  const { fullName, contacts, email } = initialState;

  useEffect(() => {
    if (currentId === "") {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[currentId] });
    }
  }, [currentId, data]);

  function inputChangeHandler  (event) {
    let { name, value } = event.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  function formSubmitHandler (event) {
    event.preventDefault();
    addOrEdit(initialState);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={formSubmitHandler}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user" />
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Full Name"
            name="fullName"
            value={fullName}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt" />
              </div>
            </div>
            <input
              className="form-control"
              placeholder="Contacts"
              name="contacts"
              value={contacts}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope" />
              </div>
            </div>
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value={currentId === "" ? "Save" : "Update"}
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
