import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  @Input() users = new Array<any>()
  @Output() onSelectUser = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(user) {
    this.onSelectUser.emit(user);
  }

}
