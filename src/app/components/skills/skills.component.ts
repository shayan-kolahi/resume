import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../services/skills.service";
import {Skills} from "../../interface/skills";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private SkillsService:SkillsService) { }
  items_skills:Skills[] = this.SkillsService.items_skills

  ngOnInit(): void {
  }

}
