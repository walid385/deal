import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.development';

interface Article {
  id: number;
  Brand: string;
  articleName: string;
  price: number;
  stock: number;
  imageUrl: string;
  image: {
    url: string;
    formats?: {
      large: {
        url: string;
      }
    }
  };
}

interface Response {
  data: {
    id: number;
    attributes: Article;
  }[];
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  articles: Article[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getArticles();
  }

  getStrapiImageUrl(imageUrl: string): string {
    return `${environment.strapiServerUrl}${imageUrl}`;
  }

  getArticles() {
    const apiUrl = 'http://localhost:1337/api/articles?populate=*';
    this.http.get<Response>(apiUrl).subscribe((response) => {
      this.articles = response.data.map((x) => x.attributes);
      console.log('Articles:', this.articles);
    });
  }
}


