import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.development';

interface HeaderData {
  data: {
    attributes: {
      header: string;
    };
  }[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  paragraph: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchHeaderData();
  }


  fetchHeaderData(): void {
    this.http.get<HeaderData>('http://localhost:1337/api/headers')
      .subscribe(
        (data: HeaderData) => {
          const headerData = data?.data[0]?.attributes?.header;
          this.paragraph = headerData ? headerData : '';
          console.log('Fetched header data:', data);
          console.log('Paragraph:', this.paragraph);
        },
        (error) => {
          console.error('Error fetching header data:', error);
        }
      );
  }
}
