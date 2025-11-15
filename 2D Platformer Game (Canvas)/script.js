document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const scoreEl = document.getElementById('score');

    const gravity = 0.5;
    let score = 0;
    const keys = {
        right: false,
        left: false
    };

    class Player {
        constructor() {
            this.position = { x: 100, y: 100 };
            this.velocity = { x: 0, y: 0 };
            this.width = 30;
            this.height = 30;
        }

        draw() {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }

        update() {
            this.draw();
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;

            if (this.position.y + this.height + this.velocity.y <= canvas.height) {
                this.velocity.y += gravity;
            } else {
                this.velocity.y = 0;
            }
        }
    }

    class Platform {
        constructor({ x, y, width, height }) {
            this.position = { x, y };
            this.width = width;
            this.height = height;
        }

        draw() {
            ctx.fillStyle = 'green';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    class Coin {
        constructor({ x, y }) {
            this.position = { x, y };
            this.width = 20;
            this.height = 20;
            this.active = true;
        }

        draw() {
            if (this.active) {
                ctx.fillStyle = 'gold';
                ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
            }
        }
    }

    class FinishLine {
        constructor({ x, y }) {
            this.position = { x, y };
            this.width = 20;
            this.height = 50;
        }

        draw() {
            ctx.fillStyle = 'blue';
            ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
        }
    }

    const player = new Player();
    const platforms = [
        new Platform({ x: 0, y: 350, width: 200, height: 50 }),
        new Platform({ x: 300, y: 250, width: 200, height: 20 }),
        new Platform({ x: 600, y: 200, width: 200, height: 20 }),
        new Platform({ x: 0, y: canvas.height - 20, width: canvas.width, height: 20 })
    ];

    const coins = [
        new Coin({ x: 150, y: 320 }),
        new Coin({ x: 350, y: 220 }),
        new Coin({ x: 650, y: 170 })
    ];

    const finishLine = new FinishLine({ x: 750, y: 150 });

    function resetGame() {
        player.position = { x: 100, y: 100 };
        player.velocity = { x: 0, y: 0 };
        score = 0;
        scoreEl.innerText = score;
        coins.forEach(coin => coin.active = true);
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        platforms.forEach(platform => {
            platform.draw();
        });

        coins.forEach(coin => {
            coin.draw();
        });

        finishLine.draw();

        player.update();

        if (keys.right && player.position.x < canvas.width - player.width) {
            player.velocity.x = 5;
        } else if (keys.left && player.position.x > 0) {
            player.velocity.x = -5;
        } else {
            player.velocity.x = 0;
        }

        // Platform collision detection
        platforms.forEach(platform => {
            if (
                player.position.y + player.height <= platform.position.y &&
                player.position.y + player.height + player.velocity.y >= platform.position.y &&
                player.position.x + player.width >= platform.position.x &&
                player.position.x <= platform.position.x + platform.width
            ) {
                player.velocity.y = 0;
            }
        });

        // Coin collision detection
        coins.forEach(coin => {
            if (coin.active &&
                player.position.x < coin.position.x + coin.width &&
                player.position.x + player.width > coin.position.x &&
                player.position.y < coin.position.y + coin.height &&
                player.position.y + player.height > coin.position.y
            ) {
                coin.active = false;
                score += 10;
                scoreEl.innerText = score;
            }
        });

        // Finish line collision
        if (
            player.position.x < finishLine.position.x + finishLine.width &&
            player.position.x + player.width > finishLine.position.x &&
            player.position.y < finishLine.position.y + finishLine.height &&
            player.position.y + player.height > finishLine.position.y
        ) {
            alert('You Win! Moving to the next level.');
            resetGame();
        }

        // Fall off screen
        if (player.position.y > canvas.height) {
            resetGame();
        }
    }

    animate();

    addEventListener('keydown', ({ key }) => {
        switch (key) {
            case 'ArrowLeft':
                keys.left = true;
                break;
            case 'ArrowRight':
                keys.right = true;
                break;
            case 'ArrowUp':
                if (player.velocity.y === 0) {
                    player.velocity.y = -15;
                }
                break;
        }
    });

    addEventListener('keyup', ({ key }) => {
        switch (key) {
            case 'ArrowLeft':
                keys.left = false;
                break;
            case 'ArrowRight':
                keys.right = false;
                break;
        }
    });
});
