import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriereBoutiqueComponent } from './arriere-boutique.component';

describe('ArriereBoutiqueComponent', () => {
  let component: ArriereBoutiqueComponent;
  let fixture: ComponentFixture<ArriereBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArriereBoutiqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriereBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
