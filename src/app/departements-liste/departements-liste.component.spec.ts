import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsListeComponent } from './departements-liste.component';

describe('DepartementsListeComponent', () => {
  let component: DepartementsListeComponent;
  let fixture: ComponentFixture<DepartementsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementsListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
