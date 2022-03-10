import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunesListeComponent } from './communes-liste.component';

describe('CommunesListeComponent', () => {
  let component: CommunesListeComponent;
  let fixture: ComponentFixture<CommunesListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunesListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunesListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
