import Canvas from "./Canvas";
import Vector2 from "../Framework/Units/Vector2";
import Container from "./Container";

export default class Bootstrap {
    static init(appNode: HTMLElement) {
        let container = new Container(appNode);

        console.debug(window.innerWidth, window.innerHeight);

        let canvas = new Canvas(
            container,
            new Vector2(window.innerWidth, window.innerHeight)
        );

        canvas.init();
    }
}