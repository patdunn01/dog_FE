import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBreedComponent } from './single-breed.component';

describe('SingleBreedComponent', () => {
  let component: SingleBreedComponent;
  let fixture: ComponentFixture<SingleBreedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBreedComponent]
    });
    fixture = TestBed.createComponent(SingleBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
