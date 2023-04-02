import { Injectable } from '@angular/core';
import {Skills} from "../interface/skills";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  items_skills:Skills[] = [
    {
      amount: 89,
      title: "html"
    },
    {
      amount: 72,
      title: "css"
    },
    {
      amount: 68,
      title: "js"
    },
    {
      amount: 59,
      title: "scss"
    },
    {
      amount: 54,
      title: "tailwind"
    },
    {
      amount: 65,
      title: "bootstrap"
    },
    {
      amount: 45,
      title: "typescript"
    },
    {
      amount: 53,
      title: "angular"
    },
  ]

}
