import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ComponentShowHideService {
constructor() {
}
private components:any = {CPU:true,RAM:true};
getStates(){
    return this.components;
  }
setStates(key){
this.components[key] = !this.components[key];
//    return this.components;
}

}
