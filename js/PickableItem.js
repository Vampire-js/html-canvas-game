import { Box } from "./Box";
import { interpolate } from "./utils";

export class PickableItemsManager{
    constructor(pos = {x:0 , y:0}){
        this.pos = {x:pos.x , y:pos.y}
        this.isPicked = false
        this.color = "#0aff64"
        this.object = null
        this.items = new Array()
    }
    render(c){
        this.object = new Box({x:this.pos.x , y:this.pos.y})
        this.object.color = this.color
        this.object.glow = 20
        this.object.size = {x:10,y:20}
        this.object.render(c)
    }
    destroy(){
        this.object.size = {x:0 , y:0}
        this.pos = {x:100 , y:innerHeight + 100}
    }
    update(e){
        this.render(e)
        this.object.update(e)
        
    }
}