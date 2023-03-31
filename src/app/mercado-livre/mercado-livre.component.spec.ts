import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoLivreComponent } from './mercado-livre.component';

describe('MercadoLivreComponent', () => {
  let component: MercadoLivreComponent;
  let fixture: ComponentFixture<MercadoLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MercadoLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
