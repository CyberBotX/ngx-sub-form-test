import { Component } from '@angular/core';
import { Subject } from 'rxjs';

import { InputForm } from './Components/input-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  public readonly currentCharacter$ = new Subject<InputForm>();
}
