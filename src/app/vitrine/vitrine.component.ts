import {Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.scss'
})
export class VitrineComponent {
  @Input() aFaireListeSignal = signal([] as string[]);
}
