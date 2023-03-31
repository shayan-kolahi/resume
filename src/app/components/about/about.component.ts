import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items_aboutMe:any= [
    {
      img : "cake-candles",
      title : "متولد 82 ام",
    },
    {
      img : "location-pin",
      title : "ساکن تهران",
    },
    {
      img : "graduation-cap",
      title : "دیپلمه مکانیک ( مایل به ادامه تحصیل در دانشگاه )",
    },
  ]
  items_contactMe:any= [
    {
      img : "location-pin",
      title : "09025354927",
      type: "tel",
    },
    {
      img : "graduation-cap",
      title : "shayankolahi30@gmail.com",
      type:"mailto",
    },
  ]


  items_skills:any= [
    "html",
    "css",
    "js",
    "scss",
    "tailwind",
    "bootstrap",
    "typescript",
    "angular",
  ]

}
