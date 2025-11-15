const canvas = document.getElementById('maze');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const mazeWidth = canvas.width / gridSize;
const mazeHeight = canvas.height / gridSize;

let maze = [];
for (let row = 0; row < mazeHeight; row++) {
    maze[row] = [];
    for (let col = 0; col < mazeWidth; col++) {
        maze[row][col] = 1; // 1 for wall, 0 for path
    }
}

function createMaze(x, y) {
    maze[y][x] = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    directions.sort(() => Math.random() - 0.5);

    for (const [dx, dy] of directions) {
        const newX = x + dx * 2;
        const newY = y + dy * 2;
        if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight && maze[newY][newX] === 1) {
            maze[y + dy][x + dx] = 0;
            createMaze(newX, newY);
        }
    }
}

createMaze(1, 1);
maze[mazeHeight - 2][mazeWidth - 2] = 2; // Exit

let player = {
    x: 1,
    y: 1,
    size: gridSize / 2
};

function drawMaze() {
    for (let row = 0; row < mazeHeight; row++) {
        for (let col = 0; col < mazeWidth; col++) {
            if (maze[row][col] === 1) {
                ctx.fillStyle = '#333';
                ctx.fillRect(col * gridSize, row * gridSize, gridSize, gridSize);
            } else if (maze[row][col] === 2) {
                ctx.fillStyle = 'green';
                ctx.fillRect(col * gridSize, row * gridSize, gridSize, gridSize);
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(player.x * gridSize + gridSize / 2, player.y * gridSize + gridSize / 2, player.size, 0, Math.PI * 2);
    ctx.fill();
}

function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    if (newX >= 0 && newX < mazeWidth && newY >= 0 && newY < mazeHeight && maze[newY][newX] !== 1) {
        player.x = newX;
        player.y = newY;
    }
}

function checkWin() {
    if (maze[player.y][player.x] === 2) {
        alert('You Win!');
        player.x = 1;
        player.y = 1;
        maze = [];
        for (let row = 0; row < mazeHeight; row++) {
            maze[row] = [];
            for (let col = 0; col < mazeWidth; col++) {
                maze[row][col] = 1;
            }
        }
        createMaze(1, 1);
        maze[mazeHeight - 2][mazeWidth - 2] = 2;
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawPlayer();
    checkWin();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

gameLoop();
