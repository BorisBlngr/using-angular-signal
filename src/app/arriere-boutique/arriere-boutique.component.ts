import {Component, Input} from '@angular/core';
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

  ajouterDansLaListe() {
    this.aFaireListe.push(this.aFaireInput);
    this.aFaireInput = '';
  }

  fait(aFaire: number) {
    this.aFaireListe.splice(aFaire, 1);
  }
}
