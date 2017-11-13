import { Input, OnChanges, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SComponent implements OnInit, OnChanges {

  @Input() powerLevel:number;

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.powerLevel=this.powerLevel*10;
  }

}
