import { Item } from './../models/item';
import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Item();
  public faStar = faStar;

  constructor() { }

  ngOnInit(): void {
  }

}
