import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedrasSinteticasComponent } from './pedras-sinteticas.component';

describe('PedrasSinteticasComponent', () => {
  let component: PedrasSinteticasComponent;
  let fixture: ComponentFixture<PedrasSinteticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedrasSinteticasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedrasSinteticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
