import { Component, Input , Output, EventEmitter, output} from '@angular/core';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) id! : String
  @Input({required: true}) avatar! : String
  @Input({required: true}) name! : String

  @Output() select = new EventEmitter<String>()
  // ==> this is what I want to use for my graph
  // select = output<String>()

  get imagePath() {
    return 'users/' + this.avatar
  }

  onSelected() {
    this.select.emit(this.id)
  }
}
