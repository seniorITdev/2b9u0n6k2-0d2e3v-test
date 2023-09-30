import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = ['Javascript', 'Python', 'C++', 'Java', 'C#'];
  selectedSkills: string[] = [];

  skillsForm = this.builder.group({
    primarySkill: ['', Validators.required],
  });

  constructor(private builder: FormBuilder) {}

  addSkill($event: Event) {
    $event.preventDefault();
    this.skillsForm.markAllAsTouched();

    const primarySkill = this.skillsForm.value.primarySkill;

    if (this.skillsForm.valid) {
      alert(
        JSON.stringify({
          'Primary Skill': primarySkill,
          Skills: this.selectedSkills.filter((skill) => skill !== primarySkill),
        })
      );
    }
  }

  onCheckSkill($event: Event) {
    const target = $event.target as HTMLInputElement;
    const checked = target.checked;
    const skill = target.value;

    if (checked) {
      this.selectedSkills.push(skill);
    } else {
      const index = this.selectedSkills.indexOf(skill);
      if (index >= 0) {
        this.selectedSkills.splice(index, 1);
      }
    }
  }
}
