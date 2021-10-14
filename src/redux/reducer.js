import * as types from "./actionTypes";

const initialState = {
    contacts: {},
    loading: false,
    error: null,
};

function contactsReducer (state = initialState, action) {
    switch (action.type) {
        case types.GET_CONTACTS_START:
            return {
                ...state,
                loading: true,
            }
            case types.GET_CONTACTS_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    contacts: action.payload
                };
                case types.GET_CONTACTS_FAILED:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload,
                    };
                case types.DELETE_CONTACT_START:
                case types.ADD_CONTACT_START:
                case types.EDIT_CONTACT_START:
                    return {
                        ...state,
                        loading: true
                    }
                case types.DELETE_CONTACT_SUCCESS:
                case types.ADD_CONTACT_SUCCESS:
                case types.EDIT_CONTACT_SUCCESS:
                    return {
                        ...state,
                        loading: false
                    }
                    case types.DELETE_CONTACT_FAILED:
                    case types.ADD_CONTACT_FAILED:
                    case types.EDIT_CONTACT_FAILED:
                        return {
                            ...state,
                            loading: false,
                            ERROR: action.payload
                        }
                default:
                    return state;
    }
};

export default contactsReducer;