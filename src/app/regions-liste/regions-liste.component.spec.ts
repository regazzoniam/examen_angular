import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsListeComponent } from './regions-liste.component';

describe('RegionsListeComponent', () => {
  let component: RegionsListeComponent;
  let fixture: ComponentFixture<RegionsListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
