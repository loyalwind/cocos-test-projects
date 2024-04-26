import { _decorator, Component, Node, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('setNewSprite')
export class setNewSprite extends Component {
    @property({type: SpriteFrame, tooltip: "图片变化"})
    url: SpriteFrame | null = null;
    // url: string = "";

    @property({ type: SpriteFrame, tooltip: "默认图片" })
    defaultImg: SpriteFrame | null = null;
    // defaultImg: string = "";

    public setUrl(url: string, defaultImg: string) {
        // this.url = url
        // this.defaultImg = defaultImg
        // 开始去加载新图片
    }

    onLoad() {
        let sp = this.node.getComponent(Sprite)!
        sp.spriteFrame = SpriteFrame.createWithImage()
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}
