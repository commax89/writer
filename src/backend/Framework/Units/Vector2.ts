import {Vector2Interface} from "./Units";

export default class Vector2 implements Vector2Interface {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}