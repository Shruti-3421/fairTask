import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ifair } from '../../models/fairs';

@Component({
  selector: 'app-fair-card',
  templateUrl: './fair-card.component.html',
  styleUrls: ['./fair-card.component.scss']
})
export class FairCardComponent implements OnInit {
  @Input() getFair !: Ifair;
  @Output() emitFairDetail : EventEmitter<Ifair> = new EventEmitter<Ifair>()  //new eventEmi <Ifair>nhi likha to bhi chlega
  constructor() { }

  ngOnInit(): void {
  }
  onFairClick(){
    console.log(this.getFair);
    this.emitFairDetail.emit(this.getFair)
  }

}
