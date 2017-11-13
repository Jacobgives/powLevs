import { Input, OnChanges, Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-h',
  templateUrl: './h.component.html',
  styleUrls: ['./h.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HComponent implements OnInit {
  @Input() powerLevel;
  constructor() { }

  ngOnInit() {
  }

}
