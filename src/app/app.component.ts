import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSelectedUser, getUsersList, getUsersState } from './app-state';
import { loadUsers, SelectUser } from './app-state/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DigitalOwlAssignment';
  public userState$;
  public userSelected$;

  constructor(
    private readonly store: Store
  ) {}

  ngOnInit() {
    this.userState$ = this.store.select(state => getUsersList(state));
    this.userSelected$ = this.store.select(state => getSelectedUser(state));
    this.store.dispatch(loadUsers());
  }

  onSelectUser(event) {
    this.store.dispatch(SelectUser({user: event}));
  }
}
