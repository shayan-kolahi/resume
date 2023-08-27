import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items_recentWorks:any = [
    {
      img: 12,
      title: "جهانگردان",
      link: "https://www.iran-tech.com/under_construction/jahangardan/jahangardan1/home.html",
    },
    {
      img: 2,
      title: "رکسان گشت",
      link: "https://www.iran-tech.com/under_construction/roxan/roxan1/home.html",
    },
    {
      img: 3,
      title: "فلای بوشهر",
      link: "https://www.iran-tech.com/under_construction/midari/midari_1/home.html",
    },
    {
      img: 6,
      title: "تهران گشت",
      link: "https://www.iran-tech.com/under_construction/tehran_gasht/tehran_gasht/home.html",
    },
    {
      img: 7,
      title: " Flight 20 ( قصر آسمان )",
      link: "https://www.iran-tech.com/under_construction/ghasre_aseman/ghasre_aseman_4/home.html",
    },
    {
      img: 8,
      title: "تراولتا سلامت",
      link: "https://www.iran-tech.com/under_construction/Travelta_Health/Travelta_4/home.html",
    },
    {
      img: 9,
      title: "تراولتا",
      link: "https://www.iran-tech.com/under_construction/Travelta/Travelta_7/home.html",
    },
    {
      img: 5,
      title: "دلنیا گشت",
      link: "https://www.iran-tech.com/under_construction/dilan_gasht/dilan_gasht_1/home.html",
    },
    {
      img: 10,
      title: "نیایش سیر",
      link: "https://www.iran-tech.com/under_construction/niyayesh_seir/niyayesh_seir_2/home.html",
    },
    {
      img: 11,
      title: "ابر و موج",
      link: "https://www.iran-tech.com/under_construction/abr_o_moj/abr_o_moj_2/home.html",
    },
    {
      img: 1,
      title: "جزیره گنج",
      link: "https://www.iran-tech.com/under_construction/afsaneh_jazireh_ganj/afsaneh_jazireh_ganj1/home.html",
    },
    {
      img: 4,
      title: "منشور صلح پارسیان",
      link: "https://www.iran-tech.com/under_construction/manshor/manshor3/home.html",
    },
  ]

}
