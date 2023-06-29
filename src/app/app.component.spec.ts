import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AllBreedsComponent } from './all-breeds/all-breeds.component';
import { SingleBreedComponent } from './single-breed/single-breed.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AllBreedsComponent, SingleBreedComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'CheckMyDog'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    console.log(fixture, "fixture")
    const app = fixture.componentInstance;
    console.log(app, "app");
    expect(app.title).toEqual('CheckMyDog');
  });

});
