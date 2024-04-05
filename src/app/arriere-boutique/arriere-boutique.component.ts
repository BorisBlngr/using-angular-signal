import {Component, Input, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-arriere-boutique',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './arriere-boutique.component.html',
  styleUrl: './arriere-boutique.component.scss'
})
export class ArriereBoutiqueComponent {
  aFaireInput: string = '';
  @Input() aFaireListe: string[] = [];
  @Input() aFaireListeSignal: WritableSignal<string[]> = signal([]);

  ajouterDansLaListe() {
    this.aFaireListe.push(this.aFaireInput);
    this.aFaireListeSignal
      .update(liste => [...liste, this.aFaireInput]);
    this.aFaireInput = '';
  }

  fait(aFaire: number) {
    this.aFaireListe.splice(aFaire, 1);
  }
}
