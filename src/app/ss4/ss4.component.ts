import { Input, OnChanges, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ss4',
  templateUrl: './ss4.component.html',
  styleUrls: ['./ss4.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ss4Component implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.powerLevel=this.powerLevel*500;
  }
}
