import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { SingleBreedComponent } from './single-breed.component';

describe('SingleBreedComponent', () => {
  let component: SingleBreedComponent;
  let fixture: ComponentFixture<SingleBreedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBreedComponent],
      imports: [RouterModule],
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
