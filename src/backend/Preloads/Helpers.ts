import Vector2 from "../Framework/Units/Vector2";

export default class Helper {
    static getWindowSize(): Vector2
    {
        return new Vector2(window.innerWidth, window.innerHeight);
    }
}