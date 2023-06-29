import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-single-breed',
  templateUrl: './single-breed.component.html',
  styleUrls: ['./single-breed.component.scss'],
})
export class SingleBreedComponent implements OnInit {
  breedId: string | null = null;
  breedData: any;
  loading: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.breedId = params.get('id');
      this.makeAPICall();
    });
  }

  makeAPICall() {
    this.loading = true;
    const url = `https://dogs-api-sx58.onrender.com/dogs/${this.breedId}`;

    axios
      .get(url)
      .then((response) => {
        if (response.data && response.data.breed) {
          this.breedData = response.data; // Assign the API response data to the property
          this.loading = false;
        } else {
          console.error('Invalid API response');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
