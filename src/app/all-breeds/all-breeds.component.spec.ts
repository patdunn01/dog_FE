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

  // Is component created?

  it('should create the AllBreeds component', () => {
    expect(component).toBeTruthy();
  });

  // Is API called correctly?

  it('should populate the breeds array after API call', async () => {
    spyOn(axios, 'get').and.returnValue(
      Promise.resolve({ data: [{ breed: 'Labrador' }] })
    );

    component.makeAPICall();
    await fixture.whenStable();
    fixture.detectChanges();


    expect(component.breeds.length).toBeGreaterThan(0);
  });

  // Does sort function work properly?

  it('should sort breeds by name when "Sort" button is clicked', () => {
    component.breeds = [{ breed: 'Labrador' }, { breed: 'Golden Retriever' }];
    component.selectedSortOption = 'name';

    component.sortBreeds();

    expect(component.breeds[0].breed).toBe('Golden Retriever');
    expect(component.breeds[1].breed).toBe('Labrador');
  });

  it('should sort breeds by weight in descending order when "Sort" button is clicked', () => {
    component.breeds = [{ breed: 'Labrador', weight_kg: 30 }, { breed: 'Golden Retriever', weight_kg: 25 }];
    component.selectedSortOption = 'weightdescending';
  
    component.sortBreeds();
  
    expect(component.breeds[0].breed).toBe('Labrador');
    expect(component.breeds[1].breed).toBe('Golden Retriever');
  });

  it('should sort breeds by weight in ascending order when "Sort" button is clicked', () => {
    component.breeds = [{ breed: 'Labrador', weight_kg: 30 }, { breed: 'Golden Retriever', weight_kg: 25 }];
    component.selectedSortOption = 'weightascending';
  
    component.sortBreeds();
  
    expect(component.breeds[1].breed).toBe('Labrador');
    expect(component.breeds[0].breed).toBe('Golden Retriever');
  });

});
