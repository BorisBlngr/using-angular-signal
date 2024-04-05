import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  aFaireList: string[] = ['course', 'escalade', 'entrainement', 'lire ce fameux livre', 'Aller à cette conférence'];
  aFaireListSignal: WritableSignal<string[]> = signal(['course', 'escalade', 'entrainement', 'lire ce fameux livre', 'Aller à cette conférence']);
}
