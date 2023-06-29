import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-all-breeds',
  templateUrl: './all-breeds.component.html',
  styleUrls: ['./all-breeds.component.scss']
})
export class AllBreedsComponent implements OnInit {
  breeds!: any[];
  selectedSortOption: string = 'name';
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.makeAPICall();
  }

  makeAPICall() {

    this.loading = true;
    const url = 'https://dogs-api-sx58.onrender.com/dogs';

    axios.get(url)
      .then(response => {
        this.breeds = response.data;
        this.loading = false;
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
