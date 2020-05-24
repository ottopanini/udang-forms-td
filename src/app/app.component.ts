import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: true})
  private signupForm: NgForm;
  questionAnswer = '';

  defaultQuestion = 'pet';

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log('submitted');
  //   console.log(form);
  //   console.log(form.value.email);
  //   console.log(form.value.username);
  //   console.log(form.value.secret);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
