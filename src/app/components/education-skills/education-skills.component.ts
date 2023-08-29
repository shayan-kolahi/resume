import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-skills',
  templateUrl: './education-skills.component.html',
  styleUrls: ['./education-skills.component.scss']
})
export class EducationSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skill:any[] = [
    {
      name: "html css",
      percent: 95
    },
    {
      name: "scss",
      percent: 75
    },
    {
      name: "bootstrap",
      percent: 80
    },
    {
      name: "tailwind css",
      percent: 65
    },
    {
      name: "js",
      percent: 70
    },
    {
      name: "jquery",
      percent: 80
    },
    {
      name: "typescript",
      percent: 60
    },
    {
      name: "angular",
      percent: 65
    },
  ]

}
