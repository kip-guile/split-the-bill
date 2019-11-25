import * as actionTypes from "../actionTypes";

const initialState = {
    users: [],
    currentUser: {
        "id": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "createdAt": "",
        "updatedAt": "",
        "bills": [],
        "splits": []
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_USERS:
            return {
                ...state,
                users: action.payload
            };

        case actionTypes.ADD_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }

        case actionTypes.ADD_BILLS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    bills: action.payload
                }
            }

        case actionTypes.UPDATE_BILLS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    bills: [...state.currentUser.bills, action.payload]
                }
            }

        case actionTypes.ADD_SPLITS:
            return {
                ...state,
                currentUser: {
                    ...state.currentUser,
                    splits: action.payload
                }
            }

        case actionTypes.UPDATE_SPLITS:
            return {
                currentUser: {
                    ...state.currentUser,
                    splits: action.payload
                }
            }
    
        default:
            return state;
    }
}