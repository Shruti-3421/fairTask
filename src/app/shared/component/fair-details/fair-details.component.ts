import { Component, Input, OnInit } from '@angular/core';
import { Ifair } from '../../models/fairs';

@Component({
  selector: 'app-fair-details',
  templateUrl: './fair-details.component.html',
  styleUrls: ['./fair-details.component.scss']
})
export class FairDetailsComponent implements OnInit {
  @Input() getFairDetails !: Ifair;
  constructor() { }

  ngOnInit(): void {
    
  }

}
