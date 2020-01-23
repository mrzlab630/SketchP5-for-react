/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 14.01.2020
 * Time: 17:06
 * About:
 *
 *
 */



const SketchP5MrZLab = (p5, canvasParentRef) =>{

    const particles = [];

    class Particle {
        constructor(p5) {
            this.p5  = p5;
            this.pos = p5.createVector(p5.random(p5.width), p5.random(p5.height));
            this.vel = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));
            this.size = 5;
        }

        update() {
            this.pos.add(this.vel);
            this.edges();
        }

        draw() {
            this.p5.noStroke();
            this.p5.fill('rgba(255, 255, 255, 0.5)');
            this.p5.circle(this.pos.x, this.pos.y, this.size * 2);
        }

        edges() {
            if(this.pos.x < 0 || this.pos.x > this.p5.width) {
                this.vel.x *= -1;
            }

            if(this.pos.y < 0 || this.pos.y > this.p5.height) {
                this.vel.y *= -1;
            }

// 		if(this.pos.x > this.p5.width) {
// 			this.pos.x = 0;
// 		}

// 		if(this.pos.y > this.p5.height) {
// 			this.pos.y = 0;
// 		}
        }

        checkParticles(particles) {
            particles.forEach(particle => {
                const d = this.p5.dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
                if(d < 120) {
                    const alpha = this.p5.map(d, 0, 120, 0, 0.25)
                    this.p5.stroke(`rgba(255, 255, 255, ${alpha})`);
                    this.p5.line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
                }
            });
        }
    }

    return {
        preload: p5 => {
            //  bg = loadImage("/public/img/back.jpg");
            // videoBack = createVideo(['/public/assets/video/Mt_Baker.mp4'],videoBackLoad);
        },

        setup: (p5, canvasParentRef) => {

            const {windowWidth,windowHeight} = p5 || false;

            p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);

            const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
            for(let i=0; i<particlesLength; i++) {
                particles.push(new Particle(p5));
            }

        },

        draw: p5 => {

            p5.background(20);

            particles.forEach((particle, idx) => {
                particle.update();
                particle.draw();
                particle.checkParticles(particles.slice(idx));
            });

        },

        windowResized: p5 =>{
            p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        }
    }

};


export default SketchP5MrZLab;