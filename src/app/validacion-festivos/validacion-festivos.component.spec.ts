import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacionFestivosComponent } from './validacion-festivos.component';

describe('ValidacionFestivosComponent', () => {
  let component: ValidacionFestivosComponent;
  let fixture: ComponentFixture<ValidacionFestivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacionFestivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidacionFestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
