import {Component, effect, input, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss'
})
export class VitrineComponent {
  aFaireListeSignal = input.required<string[]>();

  secondSignal = signal('');

  count = 0;

  constructor() {
    effect(() => {
      this.count++;
      console.log(`appel numéro ${this.count},
       nouvelle valeur : ${this.aFaireListeSignal()}
       et ${this.secondSignal}`);
    });
  }

}
