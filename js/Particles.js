import { Box } from "./Box"

function floor(e){
    return Math.floor(Math.random()*e)
}

export class ParticleSystem{
    constructor(pos = {x:0,y:0}){
        this.amount = 0.2
        this.randomness = {x:20,y:3}
        this.size = {x:50 , y:50}
        this.gravity = 2
        this.velocity = {x:0 ,y:0}
        this.particles = new Array()
        this.pos ={x:pos.x , y:pos.y}
    }
    init(c){
        for(let i = 0; i<this.amount; i++){
            this.particles.push(new Box({x:floor(this.size.x)+this.pos.x, y:floor(this.size.y) + this.pos.y}))
        
            this.particles[i].render(c)
        }
    }
    play(c){
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
            particle.size = {x:5 ,y:5}
            particle.update(c)
        })
    }
}