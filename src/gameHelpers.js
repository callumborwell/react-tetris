export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
    for (let y = 0; y < player.tetromino.length; y+= 1) {
        for (let x = 0; x < player.tetromino[0].length; x+= 1) {
            
            // 1. Check that we on a tetro cell
            if (player.tetromino[y][x] !== 0) {
                if (
                    // 2. Check that our move is inside the area height y
                    // including below the bottom of game area
                    !stage[y + player.pos.y + moveY] ||
                    // 3. Check that our move is inside the area width x
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                    // 4. Check that the cell is not set to clear / not colliding
                    stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ) {
                    return true;
                }
            }

        }
    }
}