import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items_header:any = [
    "درباره من",
    "نمونه کار ها",
    "لینک ها",
    "سوابغ کاری",
    "ممد نبودی ببنی",
    "درباره ما",
    "تماس با ما",
  ]

}
