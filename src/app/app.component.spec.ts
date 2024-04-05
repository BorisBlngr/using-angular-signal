import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {VitrineComponent} from './vitrine/vitrine.component';
import {ArriereBoutiqueComponent} from './arriere-boutique/arriere-boutique.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        VitrineComponent,
        ArriereBoutiqueComponent],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
