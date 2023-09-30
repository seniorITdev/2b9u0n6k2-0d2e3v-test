// profile.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  // Add or adjust path here if you have a global one, or remove the line if you do not have a CSS file
  // styleUrls: ['../global-styles.css'] 
})
export class ProfileComponent implements OnInit {
  skills: string[] = ['Javascript', 'Python', 'C++', 'Java', 'C#'];
  selectedSkill: string = this.skills[0]; //optional, to set a default selected skill.
  selectedSkills: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  onCheckboxChange(e: any) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      this.selectedSkills.push(target.value);
    } else {
      this.selectedSkills = this.selectedSkills.filter(skill => skill !== target.value);
    }
  }
}