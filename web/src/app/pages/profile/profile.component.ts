import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  form: FormGroup;
  skills = ['Javascript', 'Python', 'C++', 'Java', 'C#'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      primarySkill: ['', Validators.required],
      skills: this.buildSkills(),
    });

    this.form.get('primarySkill')?.valueChanges.subscribe((value) => {
      this.updateSkills(value);
    });
  }

  ngOnInit(): void {}

  buildSkills() {
    const arr = this.skills.map((skill) => {
      return this.fb.control(false);
    });
    return this.fb.array(arr);
  }

  updateSkills(value: string) {
    const arr = this.skillsFormArray;
    for (let i = 0; i < this.skills.length; i++) {
      if (this.skills[i] === value) {
        arr.at(i).setValue(true);
        arr.at(i).disable();
      } else {
        arr.at(i).enable();
        arr.at(i).setValue(false);
      }
    }
  }

  get skillsFormArray() {
    return this.form.get('skills') as FormArray;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
