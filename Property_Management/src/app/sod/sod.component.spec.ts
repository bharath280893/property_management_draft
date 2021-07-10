import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SodComponent } from './sod.component';

describe('SodComponent', () => {
  let component: SodComponent;
  let fixture: ComponentFixture<SodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
