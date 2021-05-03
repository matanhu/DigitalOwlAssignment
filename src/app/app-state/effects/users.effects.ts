import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/services/user.service";
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from "rxjs";

import * as usersActions from '../actions';

/*
  Listen to Action of NGRX and do Side Effects
*/

@Injectable()
export class UsersEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }


  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(usersActions.loadUsers),
      exhaustMap(action =>
        this.userService.getUsers().pipe(
          map(response => {
            console.log("response:::", response)
            return usersActions.loadUsersSuccess({ users: response })
          }),
          catchError((error: any) => of(usersActions.loadUsersFailure({errorMessage: 'Error Fetch'}))))
      )
    )
  );
}