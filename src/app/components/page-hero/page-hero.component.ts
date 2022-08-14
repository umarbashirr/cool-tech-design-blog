import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  templateUrl: './page-hero.component.html',
  styleUrls: ['./page-hero.component.css'],
})
export class PageHeroComponent implements OnInit {
  @Input() public pageName: String | undefined;

  constructor() {}

  ngOnInit(): void {}
}
