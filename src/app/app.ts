import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId: String = "";

  get selectedUserName() : String {
    return this.users.find(user => user.id === this.selectedUserId)?.name || "";
  }

  onSelectUser(id: String) {
    this.selectedUserId = id;
  }
}
