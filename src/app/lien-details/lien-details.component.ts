import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lien-details',
  templateUrl: './lien-details.component.html',
  styleUrls: ['../shared/shared-styles.css', './lien-details.component.css']
})
export class LienDetailsComponent implements OnInit {
  @Input() lien: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
