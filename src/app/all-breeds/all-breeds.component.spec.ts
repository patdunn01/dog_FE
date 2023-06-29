import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AllBreedsComponent } from './all-breeds.component';
import axios from 'axios';

describe('AllBreedsComponent', () => {
  let component: AllBreedsComponent;
  let fixture: ComponentFixture<AllBreedsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllBreedsComponent],
      imports: [RouterModule.forRoot([]), FormsModule],
    });
    fixture = TestBed.createComponent(AllBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AllBreeds component', () => {
    expect(component).toBeTruthy();
  });

  it('should populate the breeds array after API call', async () => {
    spyOn(axios, 'get').and.returnValue(
      Promise.resolve({ data: [{ breed: 'Labrador' }] })
    );

    component.makeAPICall();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(component.breeds.length).toBeGreaterThan(0);
  });
});
