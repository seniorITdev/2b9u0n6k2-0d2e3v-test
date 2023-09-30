import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  languages: string[] = ['Javascript', 'Python', 'C++', 'Java', 'C#'];
  skills: string[] = ['Javascript', 'Python', 'C++', 'Java', 'C#'];
  selectedLanguage?: string;
  selectedSkills: {[key: string]: boolean} = {};
  submitted = false;

  constructor() { }

  ngOnInit(): void {
    // Initialize selectedSkills with false for each skill
    this.skills.forEach(language => this.selectedSkills[language] = false);
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      // form is valid, do something...
      console.log('Form is valid!');
    } else {
      // form is invalid, display an error message...
      console.log('Form is invalid!');
    }
  }

  isDisabled(skill: string): boolean {
    return this.selectedLanguage === skill;
  }
}
