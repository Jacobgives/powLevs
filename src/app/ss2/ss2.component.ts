import { Input, OnChanges, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ss2',
  templateUrl: './ss2.component.html',
  styleUrls: ['./ss2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ss2Component implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.powerLevel=this.powerLevel*150;
  }
}
