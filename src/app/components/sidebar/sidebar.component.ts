import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    toggles:string;
    components: {
        name:string,
        show:boolean
    }[];
  constructor() { 
    this.toggles = "Toggles";
      this.components = [{name:"CPU",show:true},{name:"RAM",show:true}];
  }

  ngOnInit() {
  }
toggle(component){
    component.show = !component.show;
}
}
