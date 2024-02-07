import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../shared/shared-styles.css', './image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() image: string = ""


  constructor() { }

  ngOnInit(): void {
  }

}
