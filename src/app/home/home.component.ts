import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  myNumbers: number[] = [];

  constructor(
    public route: ActivatedRoute,
    public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.myNumbers = this.route.snapshot.data['mydata'] as number[];
  }

}
