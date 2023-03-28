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
      img : "phone",
      title : "09025354927",
      type: "tel",
    },
    {
      img : "at",
      title : "shayankolahi30@gmail.com",
      type:"mailto",
    },
  ]


  items_socialMedia:any= [
    {
      link:"https://github.com/shayan-kolahi",
      title:"github"
    },
    {
      link:"https://www.instagram.com/shayan__362/",
      title:"instagram"
    },
    {
      link:"https://t.me/Shayan_k_82",
      title:"telegram"
    },
    {
      link:"https://wa.me/09025354927",
      title:"whatsApp"
    },
  ]

}
