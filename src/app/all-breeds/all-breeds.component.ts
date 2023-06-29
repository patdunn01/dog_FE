import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-all-breeds',
  templateUrl: './all-breeds.component.html',
  styleUrls: ['./all-breeds.component.scss']
})
export class AllBreedsComponent implements OnInit {
  breeds!: any[]; // Store an array of breed objects. ! symbol indicates the property will be initialized later and may have an initial value of undefined. Will hold all breeds data fetched from the API.
  selectedSortOption: string = 'name'; // The value of this property will be used in the sortBreeds() method to determine the sorting behavior.
  loading: boolean = false; // It is initially set to false to indicate that the data is not being fetched. It will be set to true when the API call is made and set back to false once the data is loaded or an error occurs.

  constructor(private router: Router) {}

  ngOnInit() {
    this.makeAPICall();
  }

  makeAPICall() {

    this.loading = true; // Renders the loading div ("Fetching...")
    const url = 'https://dogs-api-sx58.onrender.com/dogs';

    axios.get(url)
      .then(response => {
        this.breeds = response.data; // Assign the API response data to the property
        this.loading = false; // Loading now false so that div is hidden
      })
      .catch(error => {
        console.error(error);
      });
  }

  sortBreeds() {
    if (this.selectedSortOption === 'name') {
      // Sort breeds by name
      this.breeds.sort((a, b) => a.breed.localeCompare(b.breed));
    } else if (this.selectedSortOption === 'weightdescending') {
      // Sort breeds by weight desc
      this.breeds.sort((a, b) => b.weight_kg - a.weight_kg);
    } else if (this.selectedSortOption === 'weightascending') {
      // Sort breeds by weight asc
      this.breeds.sort((a, b) => a.weight_kg - b.weight_kg);
    }
  }

  selectBreed(breed: any) {
    const breedId = breed.breed;
    this.router.navigate(['/breeds', breedId]);
  }
}
