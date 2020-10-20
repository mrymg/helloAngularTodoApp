import { Component } from '@angular/core';
import { Model, todoItems } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mod = new Model();
  isDisplay = false;
  getName(){
    return this.mod.user;
  }
  getItems (){
    if(this.isDisplay){
      return this.mod.items;
    }else{return this.mod.items.filter(a => !a.action );}
    
  }
  addItem(value){
    if(value!=""){
      this.mod.items.push(new todoItems(value, false));
    }
}
}
