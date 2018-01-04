import { Injectable } from '@angular/core';

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
}

}
