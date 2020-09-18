class Coin extends Sprite {

    static src = 'images/coin_spritesheet.png';

    constructor(x, y, context) {
        super({
            context: context,
            image: loader.images.coin,
            x: x,
            y: y,
            width: 48,
            height: 48,
            frameIndex: 0,
            row: 0,
            tickCount: 0,
            ticksPerFrame: 5,
            frames: 4
        });
    }
}
