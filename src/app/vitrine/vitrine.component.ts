import {Component, effect, input} from '@angular/core';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss'
})
export class VitrineComponent {
  aFaireListeSignal = input.required<string[]>();

  count = 0;

  constructor() {
    effect(() => {
      this.count++;
      console.log(`appel numéro ${this.count}, nouvelle valeur`, this.aFaireListeSignal());
    });
  }

}
