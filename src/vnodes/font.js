import VNode from '../core/vnode';
export default class Font extends VNode {
    constructor (config = {}) {
        super(config);
    }

    defaultConfig () {
        return {
            start: { x: 0, y: 0 },
            text: '',
            fontSize: '16px',
            color: '#666'
        };
    }

    render (context) {
        context.beginPath();
        context.font = `normal ${this.fontSize} Verdana,微软雅黑`;
        context.fillStyle = this.color;
        context.textBaseline = 'top';
        context.fillText(this.text, this.start.x, this.start.y);
        context.closePath();
    }
}
