import { Box } from "./js/Box";
import { Gun } from "./js/Gun";
import { ParticleSystem } from "./js/Particles";
import { PickableItem } from "./js/PickableItem";
import { PlatformsManager } from "./js/Platforms";
import { ele } from "./js/utils";
import "./style.css";

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

const collectabe = new PickableItem({ x: 300, y: floor.pos.y - 25 });
collectabe.render(c);

const _PlatformsManager = new PlatformsManager()
_PlatformsManager.init()

const particleSystem = new ParticleSystem({ x: player.pos.x, y: player.pos.y });
particleSystem.init(c);
particleSystem.pause(c)

let isPLayerGrounded = false;
const loop = () => {
  c.fillStyle = "#333";
  c.fillRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(loop);

  floor.update(c);
  player.update(c);
  gun.update(c);
  particleSystem.update(c);
  collectabe.update(c);

  if (isPLayerGrounded == true) {
    particleSystem.pause(c);
  }else{
    particleSystem.play(c)
    particleSystem.randomness.x = 0
    particleSystem.randomness.y = 10
    particleSystem.amount = "0.000001"
    particleSystem.gravity = 5
    particleSystem.glow = 80
    particleSystem.color = "#2ff7ea"
  }

particleSystem.pos = {x:player.pos.x, y:player.pos.y + player.size.y}

  bullets_counter.innerText = BULLET_COUNT;

  gun.pos = { x: player.pos.x, y: player.pos.y };

  if (player.pos.y + player.size.y + player.velocity.y >= floor.pos.y) {
    isPLayerGrounded = true;
    player.velocity.y = 0;
  } else {
    isPLayerGrounded = false;
  }

  //player controls
  document.onkeydown = (e) => {
    switch (e.key) {
      case "d":
        player.velocity.x = 5;
        break;
      case "w":
        if (isPLayerGrounded) {
          player.velocity.y = -10;
        }
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
