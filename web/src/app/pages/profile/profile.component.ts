import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  selectedPrimarySkill: string = '';
  selectedSkills: { [key: string]: boolean } = {};
  skills: string[] = ['Javascript', 'Python', 'C++', 'Java', 'C#'];
  skillDisabled: boolean[] = [false, false, false, false, false]; // Initialize with all skills enabled

  onSubmit() {
    // Implement your form submission logic here
  }

  onPrimarySkillChange() {
    // Enable all skills by default
    this.skillDisabled = this.skills.map(() => false);

    // Find the index of the selected primary skill
    const primarySkillIndex = this.skills.indexOf(this.selectedPrimarySkill);
    this.selectedSkills = {[this.selectedPrimarySkill]: true};
    if (primarySkillIndex !== -1) {
      // Disable the checkbox for the selected primary skill
      this.skillDisabled[primarySkillIndex] = true;
    }
  }
}
