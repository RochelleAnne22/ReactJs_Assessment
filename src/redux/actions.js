import * as types from "./actionTypes";
import firebaseDb from '../firebase';

const getContactsStart = () => ({
    type: types.GET_CONTACTS_START,
});

const getContactsSuccess = (contacts) => ({
    type: types.GET_CONTACTS_SUCCESS,
   payload: contacts,
});

const getContactsFail = () => ({
    type: types.GET_CONTACTS_FAILED,
});

const deleteContactStart = () => ({
    type: types.DELETE_CONTACT_START,
});

const deleteContactSuccess = () => ({
    type: types.DELETE_CONTACT_SUCCESS,
});

const deletetContactFail = () => ({
    type: types.DELETE_CONTACT_FAILED,
});

const addContactStart = () => ({
    type: types.ADD_CONTACT_START,
});

const addContactSuccess = () => ({
    type: types.ADD_CONTACT_SUCCESS,
});

const addContactFail = () => ({
    type: types.ADD_CONTACT_FAILED,
});

const editContactStart = () => ({
    type: types.EDIT_CONTACT_START,
});

const editContactSuccess = () => ({
    type: types.EDIT_CONTACT_SUCCESS,
});

const editContactFail = () => ({
    type: types.EDIT_CONTACT_FAILED,
});


export function getContacts () {
    return function(dispatch) {
        dispatch(getContactsStart());
        firebaseDb.child("Contacts").on("value", (snapshot) => {
            try {
            if (snapshot.val() !== null) {
            dispatch(getContactsSuccess(snapshot.val()));
            } else {
                dispatch(getContactsSuccess({}));
            }
        } catch (error) {
            dispatch(getContactsFail(error));
        }
          }); 
    };
};

export function addContact (contacts) {
    return function(dispatch) {
        dispatch(addContactStart());
        firebaseDb.child("Contacts").push(contacts, (error) => {
          dispatch(addContactSuccess());
            if (error) {
              dispatch(addContactFail(error));
            }
          });
        };
};

export function editContact (contacts, id) {
    return function(dispatch) {
        dispatch(editContactStart());
        firebaseDb.child(`Contacts/${id}`).set(contacts, (error) => {
          dispatch(editContactSuccess());
            if (error) {
              dispatch(editContactFail(error));
            }
          });
        };
};

export function deleteContact (id) {
    return function(dispatch) {
        dispatch(deleteContactStart());
        firebaseDb.child(`Contacts/${id}`).remove((error) => {
            dispatch(deleteContactSuccess)
            if (error) {
              dispatch(deletetContactFail(error));
            }
          });
        };
};