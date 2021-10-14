import React, { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import { isEmpty } from "lodash";
import { useSelector, useDispatch } from 'react-redux';
import { addContact, editContact } from "../redux/actions";
import classes from './AddUser.module.css';


const isBlank = (value) => value.trim() === "";

function AddUser () {
  const values = {
    fullName: "",
    contacts: "",
    email: "",
  };
  const [initialState, setState] = useState(values);
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    contacts: true,
    email: true,
  });

  const nameInputRef = useRef();
  const contactsInputRef = useRef();
  const emailInputRef = useRef();

  const {contacts: data} = useSelector(state => state.data);

  const { fullName, contacts, email } = initialState;

  let dispatch = useDispatch();

  const currentId = useParams();
  const history = useHistory();

  const { id } = currentId;

  useEffect(() => {
    if (isEmpty(id)) {
      console.log("initialState", initialState);
      setState({ ...values });
    } else {
      setState({ ...data[id] });
    }
  }, [id, data]);

  function InputChangeHandler (event) {
    let { name, value } = event.target;
    setState({
      ...initialState,
      [name]: value,
    });
  };

  function Submithandler (event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredContacts = contactsInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredNameIsValid = !isBlank(enteredName);
    const enteredContactsIsValid = !isBlank(enteredContacts);
    const enteredEmailIsValid =  !isBlank(enteredEmail);

    setFormInputsValidity({
      name: enteredNameIsValid,
      contacts: enteredContactsIsValid,
      email: enteredEmailIsValid,
    });

    const formIsValid =
    enteredNameIsValid &&
    enteredContactsIsValid &&
    enteredEmailIsValid;

    console.log("initialState", initialState);
    if (!formIsValid)  {
      return;
    } else if (isEmpty(id))  {
      dispatch(addContact(initialState));
    } else {
      dispatch(editContact(initialState, id));
    }
    history.push("/");
  };

  const nameControlClasses =`${classes.control} ${
    formInputsValidity.name ? " " : classes.invalid
  }`;
  const contactsControlClasses =`${classes.control} ${
    formInputsValidity.contacts ? " " : classes.invalid
  }`;
  const emailControlClasses =`${classes.control} ${
    formInputsValidity.email ? " " : classes.invalid
  }`;

  return (
    <div className="container mt-5">
      <div style={{ justifyContent: "center" }} className="row">
        <div className="col-md-6">
          <form onSubmit={Submithandler}>
            <div className={nameControlClasses}>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={fullName}
                ref={nameInputRef}
                placeholder="Name"
                onChange={InputChangeHandler}
              />
                {!formInputsValidity.name && <p> Please enter a valid name! </p>}
            </div>
            <div className={contactsControlClasses}>
              <input
                type="number"
                className="form-control"
                name="contacts"
                value={contacts}
                ref={contactsInputRef}
                placeholder="Contacts"
                onChange={InputChangeHandler}
              />
              {!formInputsValidity.contacts && (
          <p> Please enter a valid number </p>
        )}
            </div>
            <div className={emailControlClasses}>

              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                ref={emailInputRef}
                placeholder="Email"
                onChange={InputChangeHandler}
              />
                 {!formInputsValidity.email && <p> Please enter a valid email address! </p>}
            </div>
            <button className={"btn btn-default"} onClick={() => history.push("/")}>Cancel</button>
            <button type="submit" className="btn btn-primary btn-raised">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
