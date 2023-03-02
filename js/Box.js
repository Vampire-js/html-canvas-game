export class Box {
    constructor(pos) {
      this.pos = { x: pos.x, y: pos.y };
      this.velocity = { x: 0, y: 0 };
      this.size = { x: 40, y: 40 };
      this.color = "#dddddd";
      this.gravity = 0;
      this.rotation = 0;
      this.glow = 0
    }
    render(c) {
      c.fillStyle = this.color;
      c.rotate((Math.PI * this.rotation) / 180);
  
      c.shadowBlur = this.glow;
      c.shadowColor = `${this.color}66`
      c.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
    }
    update(c) {
      this.render(c);
      this.pos.x += this.velocity.x;
      this.pos.y += this.velocity.y;
  
      this.velocity.y += this.gravity;
    }
  }