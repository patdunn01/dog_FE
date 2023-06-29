import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SingleBreedComponent } from './single-breed.component';
import { By } from '@angular/platform-browser';

describe('SingleBreedComponent', () => {
  let component: SingleBreedComponent;
  let fixture: ComponentFixture<SingleBreedComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBreedComponent],
      imports: [RouterModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({ id: 'your-breed-id' }))
          }
        }
      ]
    });
    fixture = TestBed.createComponent(SingleBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    spyOn(router, 'navigateByUrl');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the loader when loading is true', () => {
    component.loading = true;
    fixture.detectChanges();

    const loaderElement = fixture.debugElement.query(By.css('.loader'));
    const loaderText = loaderElement.nativeElement.textContent;

    expect(loaderText.trim()).toBe('Fetching...');
  });

  it('should display breed data when breedData is available', () => {
    const breedData = {
      breed: 'Labrador',
      childFriendly: 'Yes',
      dogFriendly: 'Yes',
      weight_kg: 30,
      script: 'Friendly and outgoing',
      image: 'https://example.com/labrador.jpg',
    };
    component.breedData = breedData;
    fixture.detectChanges();

    const breedNameElement = fixture.nativeElement.querySelector('.breedName');
    console.log(breedNameElement, "breenNameElement")
    const childFriendlyElement = fixture.nativeElement.querySelectorAll('.childFriendly');
    console.log(childFriendlyElement, "childFriendlyElement")
    const dogFriendlyElement = fixture.nativeElement.querySelectorAll('.dogFriendly');
    console.log(dogFriendlyElement, "dogFriendlyElement")
    const weightElement = fixture.nativeElement.querySelector('.weightInKg');
    console.log(weightElement, "weightElement")
    const scriptElement = fixture.nativeElement.querySelector('.dogScript');
    console.log(scriptElement, "scriptElement")
    const imageElement = fixture.nativeElement.querySelector('.singleBreedImg');
    console.log(imageElement, "imageElement")

    expect(breedNameElement.textContent).toBe(breedData.breed);
    expect(childFriendlyElement[0].textContent).toBe(`Child friendly: ${breedData.childFriendly}`);
    expect(dogFriendlyElement[0].textContent).toBe(`Dog friendly: ${breedData.dogFriendly}`);
    expect(weightElement.textContent).toBe(`Weight: approx ${breedData.weight_kg}kg`);
    expect(scriptElement.textContent).toBe(breedData.script);
    expect(imageElement.getAttribute('src')).toBe(breedData.image);
  });
});
