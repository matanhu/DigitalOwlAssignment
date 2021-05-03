import { createAction, props } from '@ngrx/store';

const LOAD_USERS = '[USERS] Load USERS';
const LOAD_USERS_SUCCESS = '[USERS] Load USERS Success';
const LOAD_USERS_FAILURE = '[USERS] Load USERS Failure';

const SELECT_USER = '[USER] Select User';

export const loadUsers = createAction(
    LOAD_USERS
);
export const loadUsersSuccess = createAction(
    LOAD_USERS_SUCCESS,
    props<{users: Array<any>}>()
);
export const loadUsersFailure = createAction(
    LOAD_USERS_FAILURE,
    props<{errorMessage: string }>()
);

export const SelectUser = createAction(
    SELECT_USER,
    props<{user: any}>()
);