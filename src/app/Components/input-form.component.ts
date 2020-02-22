import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Controls, DataInput, NgxAutomaticRootFormComponent } from 'ngx-sub-form';

export interface InputForm
{
  currentCharacter: string | null;
}

@Component({
  selector: 'input-form',
  templateUrl: './input-form.html'
})
export class InputFormComponent extends NgxAutomaticRootFormComponent<InputForm>
{
  public readonly characters = [
    'Bob',
    'George'
  ];

  @DataInput() @Input() public readonly dataInput!: InputForm;

  @Output() public readonly dataOutput = new EventEmitter<InputForm>();

  protected getFormControls(): Controls<InputForm>
  {
    return {
      currentCharacter: new FormControl(null)
    };
  }
}
