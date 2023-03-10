import { Box } from "./js/Box";
import { Gun } from "./js/Gun";
import { ParticleSystem } from "./js/Particles";
import { PickableItemsManager } from "./js/PickableItem";
import { PlatformsManager } from "./js/Platforms";
import { ele } from "./js/utils";
import "./style.css";
import { UIManager } from "./ui/UIManager";
import {level} from './levels/level_1.json'

const canvas = document.getElementById("app");
canvas.width = innerWidth;
canvas.height = innerHeight;
const c = canvas.getContext("2d");

let BULLET_COUNT = 50;
let bullets_counter = ele("count");

const floor = new Box({ x: 0, y: canvas.height - 80 });
floor.size = { x: canvas.width, y: 80 };
floor.color = "#111111";
floor.render(c);

const player = new Box({ x: 20, y: 20 });
player.size = { x: 40, y: 40 };
player.gravity = 0.2;
player.glow = 0;
player.color = "#222222";
player.render(c);

const gun = new Gun({ x: 0, y: 0 });
gun.glow = 20;
gun.render(c);

const collectabe = new PickableItemsManager({ x: 300, y: floor.pos.y - 25 });
collectabe.render(c);

const _PlatformsManager = new PlatformsManager();
_PlatformsManager.init(c);

const particleSystem = new ParticleSystem({ x: player.pos.x, y: player.pos.y });
particleSystem.init(c);
particleSystem.pause(c);

level.platforms.map(e => {
  _PlatformsManager.add(new Box({x:e.x , y:e.y}))
})

let isPLayerGrounded = false;
UIManager({main_menu:ele("main_menu") , levels_menu:ele("levels_menu")})
const loop = () => {
  c.fillStyle = "#333";
  c.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(loop);

  floor.update(c);
  player.update(c);
  gun.update(c);
  particleSystem.update(c);
  collectabe.update(c);
  _PlatformsManager.update(c)


  for(let i = 0; i<_PlatformsManager.PLATFORMS.length ; i++){
    let platform = _PlatformsManager.PLATFORMS[i]
    if(player.pos.y + player.size.y + player.velocity.y >= platform.pos.y && player.pos.x +player.size.x >= platform.pos.x && player.pos.x <= platform.pos.x + platform.size.x && player.pos.y + player.velocity.y <= platform.pos.y  ){
      isPLayerGrounded = true
      player.velocity.y = 0
    }
  }

  if (isPLayerGrounded == true) {
    particleSystem.pause(c);
  } else {
    particleSystem.play(c);
    particleSystem.randomness.x = 0;
    particleSystem.randomness.y = 10;
    particleSystem.amount = "0.000001";
    particleSystem.range = { x: 40, y: 50 };
    particleSystem.isFinite = true;
    particleSystem.size = { x: 10, y: 10 };
    particleSystem.gravity = 5;
    particleSystem.glow = -20;
    particleSystem.color = "#636363";
  }

  particleSystem.pos = { x: player.pos.x, y: player.pos.y + player.size.y };

  bullets_counter.innerText = BULLET_COUNT;

  gun.pos = { x: player.pos.x, y: player.pos.y };

  if (player.pos.y + player.size.y + player.velocity.y >= floor.pos.y) {
    isPLayerGrounded = true;
    
  } else {
    isPLayerGrounded = false;
  }

  if(isPLayerGrounded){
    player.velocity.y = 0;
  }

  //player controls
  document.onkeydown = (e) => {
    switch (e.key) {
      case "d":
        player.velocity.x = 5;
        break;
      case "w":
          player.velocity.y = -10;
        
        break;
      case "a":
        player.velocity.x = -5;
        break;
      case "q":
        if (BULLET_COUNT != 0) {
          BULLET_COUNT -= 1;
          gun.launch({ player });
        }
        break;
    }
  };
  document.onkeyup = (e) => {
    switch (e.key) {
      case "d":
        player.velocity.x = 0;
        break;
      case "a":
        player.velocity.x = 0;
        break;
    }
  };

  if (
    player.pos.x + player.size.x >= collectabe.pos.x &&
    player.pos.x <= collectabe.pos.x + 10 &&
    player.pos.y + player.size.y >= collectabe.pos.y
  ) {
    BULLET_COUNT += 50;
    collectabe.destroy();
  }
};

loop();
