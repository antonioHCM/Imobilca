import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedrasNaturaisComponent } from './pedras-naturais.component';

describe('PedrasNaturaisComponent', () => {
  let component: PedrasNaturaisComponent;
  let fixture: ComponentFixture<PedrasNaturaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedrasNaturaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedrasNaturaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
