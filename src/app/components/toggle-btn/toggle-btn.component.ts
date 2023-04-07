import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrls: ['./toggle-btn.component.scss']
})
export class ToggleBtnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   const checkbox = document.getElementById('checkbox');
//
//   checkbox.addEventListener('change', ()=>{
//   document.body.classList.toggle('dark');
// })

  toggle_mood() {
    document.body.classList.toggle('dark');
  }
}
