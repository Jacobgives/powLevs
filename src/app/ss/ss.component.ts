import { Input, OnChanges, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ss',
  templateUrl: './ss.component.html',
  styleUrls: ['./ss.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SsComponent implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.powerLevel=this.powerLevel*90;
  }
}
