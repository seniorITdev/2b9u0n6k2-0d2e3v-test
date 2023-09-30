import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  selectedPrimarySkill: string = '';
  selectedSkills: { [key: string]: boolean } = {};
  formSubmitted: boolean = false;
  skills: string[] = ['Javascript', 'Python', 'C++', 'Java', 'C#'];

  onSubmit() {
    this.formSubmitted = true;
    // Implement any further actions you need to take when the form is submitted.
  }
}
