import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  selectedOption = new FormControl('', Validators.required);
  options: any[] = [
    {
      value: 'JavaScript',
      label: 'JavaScript',
      checked: false,
      disabled: false,
    },
    { value: 'Python', label: 'Python', checked: false, disabled: false },
    { value: 'C++', label: 'C++', checked: false, disabled: false },
    { value: 'JAVA', label: 'JAVA', checked: false, disabled: false },
    { value: 'C#', label: 'C#', checked: false, disabled: false },
  ];

  constructor() {
    this.selectedOption.setValue(this.options[0].value);
    this.updateOptions(this.selectedOption.value);
  }

  updateOptions(selectedOption: string | null) {
    if (selectedOption !== null) {
      this.options.forEach((option) => {
        if (option.value === selectedOption) {
          option.checked = true;
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      });
    }
  }
}
