document.addEventListener("DOMContentLoaded", () => {
  // P5.js background 'Hero'

  
});
const divSketchContainer = document.getElementById("backgroundAnimation");

// Detection Onresize
let canvas;
let sketchDivheight;
let sketchDivwidth;
sketchDivheight = divSketchContainer.offsetHeight;
sketchDivwidth = divSketchContainer.offsetWidth;
window.onresize = function () {
  //resize just happened, pixels changed
  sketchDivheight = divSketchContainer.offsetHeight;
  sketchDivwidth = divSketchContainer.offsetWidth;
  setup();
};

// this class describes the properties of a single particle.

class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0,sketchDivwidth);
    this.y = random(0,sketchDivheight);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

  // creation of a particle.
  createParticle() {
    noStroke();
    fill("#d1d5db");
    circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  moveParticle() {
    if (this.x < 0 || this.x > sketchDivwidth) this.xSpeed *= -1;
    if (this.y < 0 || this.y > sketchDivheight) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart

  joinParticles(particles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 120) {
        stroke("#d1d5db");
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

// an array to add multiple particles
let particles = [];

function setup() {
  // put setup code here
  canvas = createCanvas(sketchDivwidth, sketchDivheight);
  canvas.position(0, 0);
  canvas.style("z-index", "-99");
  if (particles.length <= 20) {
    for (let i = 0; i < 20; i++) {
      particles.push(new Particle());
    }
  }
}

function draw() {
  // put drawing code here

  background(255);
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
