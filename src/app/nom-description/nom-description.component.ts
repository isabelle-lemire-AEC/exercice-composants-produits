import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nom-description',
  templateUrl: './nom-description.component.html',
  styleUrls: ['./nom-description.component.css']
})
export class NomDescriptionComponent implements OnInit {
  @Input() nom: string = '';
  @Input() description: string = '';  

  constructor() { }

  ngOnInit(): void {
  }



}
