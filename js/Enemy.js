import { Box } from "./Box"

class Enemy{
constructor(pos){
this.pos = {x:pos.x , y:pos.y}
this.object = new Box({x:this.pos.x , y:this.pos.y})
this.color = "#ff0000"
}
render(c){
    this.object.color = this.color
    this.object.render(c)
}
update(c){
    this.render(c)
}
}