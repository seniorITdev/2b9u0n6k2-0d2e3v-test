import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form!: FormGroup;
  skills = ['Javascript', 'Python', 'C++', 'Java', 'C#'];

  ngOnInit(): void {
    this.form = new FormGroup({
      primarySkill: new FormControl('', Validators.required),
    });
    this.skills.forEach((skill) => {
      this.form.addControl(skill, new FormControl(''));
    });
  }

  onPrimarySkillChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.skills.forEach((skill) => {
      if (skill === target.value) {
        this.form.get(skill)?.setValue(true);
      } else {
        this.form.get(skill)?.setValue(false);
      }
    });
  }
}