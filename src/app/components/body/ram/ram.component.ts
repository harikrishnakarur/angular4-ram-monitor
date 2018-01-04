import { Component, OnInit } from '@angular/core';
import { ComponentShowHideService } from '../../../services/component-show-hide.service';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {

constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getData();
  }

}
