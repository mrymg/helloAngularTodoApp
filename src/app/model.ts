export class Model{
    user;
    items;

    constructor(){
        this.user = "YMG";
        this.items = [

          ];
    }
}


export class todoItems{
    description;
    action;

    constructor(description, action){
        this.description = description;
        this.action = action;
    }
}