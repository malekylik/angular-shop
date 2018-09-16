import { Component, OnInit, Input } from '@angular/core'; 

@Component({
  selector: 'app-name-with-line',
  templateUrl: './name-with-line.component.html',
  styleUrls: ['./name-with-line.component.css']
})
export class NameWithLineComponent implements OnInit {

  @Input() name:string;
  @Input() rightSide: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
