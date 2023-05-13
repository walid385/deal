import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.development';

interface SponsorData {
  id: number;
  name: string;
  logo: string;
  logoUrl: string;
}

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorComponent implements OnInit {
  sponsors: SponsorData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchSponsors();
  }
  getLogoUrl(sponsor: SponsorData): string {
    return `${environment.strapiServerUrl}${sponsor.logoUrl}`;
  }
  
  
  
  

  fetchSponsors(): void {
    this.http.get<any>('http://localhost:1337/api/sponsorss?populate=*')
      .subscribe(
        (data: any) => {
          this.sponsors = data.data.map((sponsor: any) => sponsor.attributes);
          console.log('Fetched sponsor data:', this.sponsors);
        },
        (error) => {
          console.error('Error fetching sponsor data:', error);
        }
      );
  }
  
  
}
