import { Component, OnInit } from '@angular/core';
import { ComponentShowHideService } from '../../services/component-show-hide.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    toggles:string;
    components: Object;
constructor(private component:ComponentShowHideService) { 
    this.toggles = "Toggles";
    this.components = this.component.getStates();
  }

  ngOnInit() {
  }
toggle(component){
    component.show = !component.show;
}
}
