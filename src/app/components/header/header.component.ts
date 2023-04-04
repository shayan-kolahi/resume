import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  items_header:any = [
    {
      id:"about",
      title:"درباره من",
    },
    {
      id:"angular-project",
      title:"انگولار",
    },
    {
      id:"skills",
      title:"مهارت های من",
    },
    {
      id:"recent-portfolio",
      title:"نمونه کار ها",
    },
  ]
  scroll_to_section(id:string) {
    this.scroller.scrollToAnchor(id);
  }
}
