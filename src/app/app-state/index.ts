import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as fromUsers from './reducers/users.reducer';

export interface State {
  Users: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<State> = {
  Users: fromUsers.reducer,
};

// On Debug log each action to console and current state before create reducer
export function debug(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state, action) {
      console.log('state', state);
      console.log('action', action);

      return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [];


export const getUsersState = createFeatureSelector<fromUsers.UsersState>('Users');

export const getUsersList = createSelector(
  getUsersState,
  (state: fromUsers.UsersState) => state.usersList
);

export const getSelectedUser = createSelector(
  getUsersState,
  (state: fromUsers.UsersState) => state.userSelected
);

