import { Box } from "./Box"

function floor(e){
    return Math.floor(Math.random()*e)
}

export class ParticleSystem{
    constructor(pos = {x:0,y:0}){
        this.amount = 0.2
        this.randomness = {x:2,y:2}
        this.size = {x:20 , y:2}
        this.glow = 2
        this.gravity = 2
        this.velocity = {x:0 ,y:0}
        this.particles = new Array()
        this.color = "#eeeeeee"
        this.pos ={x:pos.x , y:pos.y}
    }
    init(c){
        for(let i = 0; i<this.amount; i++){
            this.particles.push(new Box({x:floor(this.size.x)+this.pos.x, y:floor(this.size.y) + this.pos.y}))
        
            this.particles[i].render(c)
        }
    }
    play(c){
        this.amount = 0.2
        this.init(c)
    }
    pause(){
        this.amount = 0
    }
    update(c){
        this.init(c)
        this.particles.map(particle => {
            particle.velocity.x = floor(this.randomness.x)
            particle.velocity.y = floor(this.randomness.y)
            particle.velocity.y += this.gravity
            particle.size = {x:this.size.x ,y:this.size.y}
            particle.color = this.color
            particle.glow = this.glow
            particle.update(c)
        })
    }
}