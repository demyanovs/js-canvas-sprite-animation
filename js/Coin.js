class Coin extends Sprite {

    static src = 'images/coin_spritesheet.png';

    constructor(x, y, context, image) {
        super({
            context: context,
            image: image,
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
