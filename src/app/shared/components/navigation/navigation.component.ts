import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  isHomePage = true;

  constructor() { }

  ngOnInit(): void {
    this.isHomePage = window.location.pathname === "/";
  }

}
