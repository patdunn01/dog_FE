import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-single-breed',
  templateUrl: './single-breed.component.html',
  styleUrls: ['./single-breed.component.scss'],
})
export class SingleBreedComponent implements OnInit {
  breedId: string | null = null;
  breedData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Access the breed ID from the route parameter
    this.breedId = this.route.snapshot.paramMap.get('id');

    this.makeAPICall();
  }

  makeAPICall() {
    const url = `https://dogs-api-sx58.onrender.com/dogs/${this.breedId}`;

    axios
      .get(url)
      .then((response) => {
        if (response.data && response.data.breed) {
          this.breedData = response.data; // Assign the API response data to the property
          console.log(this.breedData);
        } else {
          console.error('Invalid API response');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
