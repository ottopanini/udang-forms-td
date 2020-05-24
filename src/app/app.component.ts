import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false})
  private signupForm: NgForm;
  questionAnswer = '';

  defaultQuestion = 'pet';

  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    });
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
