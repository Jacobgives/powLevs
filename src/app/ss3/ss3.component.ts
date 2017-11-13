import { Input, OnChanges, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ss3',
  templateUrl: './ss3.component.html',
  styleUrls: ['./ss3.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ss3Component implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.powerLevel=this.powerLevel*250;
  }
}
