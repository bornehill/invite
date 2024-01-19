import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Invite {
  id: number;
  fullName: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  public invites: Invite[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<Invite[]>('https://localhost:8002/api/invites').subscribe(
      (result) => {
        this.invites = result;
      },
      (error) => {
        console.error(error);
      }
      );
  }

  title = 'invite.client';
}
