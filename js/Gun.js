import { Box } from "./Box";
import { getAngle } from "./utils";

export class Gun {
    constructor(pos) {
      this.pos = { x: pos.x, y: pos.y };
      this.velocity = { x: 0, y: 0 };
      this.bullets = new Array();
      document.onmousemove = (e) => {
        this.mouse = { x: e.pageX, y: e.pageY };
      };
      this.glow = 0
      this.color = "#03e3fc"
    }
    render(c) {
      c.fillStyle =this.color;
      c.shadowBlur = this.glow;
      c.shadowColor = `${this.color}`
      c.fillRect(this.pos.x, this.pos.y, 12, 12);
  
      this.bullets.map((bullet) => {
        bullet.size = { x: 13, y: 13 };
        bullet.color = "#03fcf0"
        bullet.glow = 30
      });

      this.bullets.map(e => e.render(c))
    }
    launch(props) {
      let angle = getAngle(
        { x: this.pos.x, y: this.pos.y },
        { x: this.mouse.x, y: this.mouse.y }
      );
      this.bullets.push(new Box({ x: this.pos.x, y: this.pos.y }));
      console.log(angle);
      if(this.mouse.x >= props.player.pos.x){
        this.bullets[this.bullets.length - 1].velocity = {
        x: 10 * Math.cos(angle),
        y: 10 * Math.sin(angle),
      };
    }else{
      this.bullets[this.bullets.length - 1].velocity = {
        x: 10 * Math.cos(3.14+angle),
        y: 10 * Math.sin(3.14+angle),
      };
    }
    }
    update(c) {
      this.render(c);
      this.pos.x += this.velocity.x;
      this.pos.y += this.velocity.y;
  
      this.bullets.map((bullet) => bullet.update(c));
    }
  }
  