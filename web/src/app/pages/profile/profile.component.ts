import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  selectedSkills: Record<string, boolean> = {
    Javascript: false,
    Python: false,
    'C++': false,
    Java: false,
    'C#': false,
  };
  skills: string[] = ['Javascript', 'Python', 'C++', 'Java', 'C#'];
  private _primarySkill: string = '';

  get primarySkill(): string {
    return this._primarySkill;
  }

  set primarySkill(value: string) {
    this.selectedSkills[this._primarySkill] = false;
    this._primarySkill = value;
    this.selectedSkills[this._primarySkill] = true;
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: any): void {
    console.log('Submitted value:', form.value);
  }
}
