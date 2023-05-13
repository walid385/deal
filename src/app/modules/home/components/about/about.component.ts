import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

interface AboutData {
  content: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutContent: string[] = [];
  private subscription: Subscription | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchAboutContent();
  }

  fetchAboutContent(): void {
    this.subscription = this.http.get<any>('http://localhost:1337/api/heroes')
      .subscribe((data: any) => {
        console.log(data); // Log the response data
        const content = data.data[0]?.attributes.about;
        this.aboutContent = content ? content.split('\n\n') : [];
        console.log(this.aboutContent);
      });
  }
}  