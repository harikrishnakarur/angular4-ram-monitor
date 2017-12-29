import { Component, OnInit } from '@angular/core';
import { ComponentShowHideService } from '../../services/component-show-hide.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
private components: any;
  constructor(private component:ComponentShowHideService) { 
    this.components = this.component.getStates();
  }

ngOnInit() {
    
  }

}
