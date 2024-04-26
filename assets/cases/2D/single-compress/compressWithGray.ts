
import { _decorator, Component, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('compressWithGray')
export class compressWithGray extends Component {

    start () {
        let sprite = this.node.getComponent(Sprite)!;
        sprite.grayscale = false;
        sprite.grayscale = true;
        // "db://assets/cases/2D/single-compress/image/pvrtc2_rgb_a"
        // sprite.spriteFrame!.texture = null;
    }
}
