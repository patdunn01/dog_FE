import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-single-breed',
  templateUrl: './single-breed.component.html',
  styleUrls: ['./single-breed.component.scss'],
})
export class SingleBreedComponent implements OnInit {
  breedId: string | null = null; // Store the ID of the breed for which the data is being fetched. Set to null until the ngOnInit() method is called. (line 20)
  breedData: any; // Store data of the fetched breed. Default as any so it can store any value
  loading: boolean = false; // Track the state of the loading component. This changes when the data is fetched. (line 31)

  constructor(private route: ActivatedRoute) {}

  // Set up the component to retrieve the id parameter from the route

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.breedId = params.get('id');

      // Make an API call to fetch the relevant data based on the id parameter

      this.makeAPICall();
    });
  }

  makeAPICall() {
    this.loading = true; // Renders the loading div ("Fetching...")
    const url = `https://dogs-api-sx58.onrender.com/dogs/${this.breedId}`;

    axios
      .get(url)
      .then((response) => {
        if (response.data) {
          this.breedData = response.data; // Assign the API response data to the property
          this.loading = false; // Loading now false so that div is hidden
        } else {
          console.error('Invalid API response'); // Handle any errors with the API call
        }
      })
      .catch((error) => {
        console.error(error); // Catch block to handle errors
      });
  }
}
