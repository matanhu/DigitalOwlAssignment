import { Action, createReducer, on } from "@ngrx/store";
import * as userActions from '../actions';

export interface UsersState {
    usersList: Array<any>;
    userSelected: any;
    errorMessage: string;
}

export const initialState: UsersState = {
    usersList: new Array(),
    userSelected: null,
    errorMessage: ''
}

const usersReducer = createReducer(
    initialState,
    on(userActions.loadUsersSuccess, (state, action) => {
        return {
            ...state,
            usersList: [...action.users]
        }
    }),
    on(userActions.loadUsersFailure, (state, action) => {
        return { ...state, errorMessage: action.errorMessage }
    }),
    on(userActions.SelectUser, (state, action) => {
        return { ...state, userSelected: action.user }
    }),
);
export function reducer(state: UsersState | undefined, action: Action): any {
    return usersReducer(state, action);
}

