import {Vector2Interface} from "../Framework/Units/Units";
import Container from "./Container";
import Helper from "./Helpers";
import _ from "lodash";

/**
 * Represents tha main SVG canvas element
 */
export default class Canvas {
    /**
     * Global app container
     * @protected
     */
    protected app: Container;

    /**
     * The main canvas element
     * @protected
     */
    protected mainCanvas: SVGElement | null;

    protected debouncedCanvasSize: CallableFunction;

    /**
     * @param app
     * @param windowSize
     */
    constructor(app: Container)
    {
        this.app = app;
        this.mainCanvas = null;

        _.bindAll(this, 'onWindowResize', 'setCanvasSize');
        this.debouncedCanvasSize = _.debounce(this.setCanvasSize, 500);

        window.addEventListener('resize', this.onWindowResize);

        this.app.registerSingleton('canvas', this);
    }

    /**
     * Initialize the canvas
     */
    init(): Canvas
    {
        this.mainCanvas = document
            .createElementNS('http://www.w3.org/2000/svg', 'svg');

        this.setCanvasSize()
            .setCanvasAttribute('preserveAspectRatio', 'xMidYMid slice');

        this.app.getAppNode().append(this.mainCanvas);
        return this;
    }

    onWindowResize(): void
    {
        this.debouncedCanvasSize();
    }

    /**
     * Set the canvas size
     * @protected
     */
    protected setCanvasSize(): Canvas
    {
        console.debug('resizing', window.innerHeight, window.innerWidth);
        let windowSize = Helper.getWindowSize();
        this.setCanvasAttribute(
            'viewBox',
            `0 0 ${windowSize.x} ${windowSize.y}`
        )
        return this;
    }

    /**
     * Set an attribute on the main canvas element
     *
     * @param attribute
     * @param value
     * @protected
     */
    protected setCanvasAttribute(attribute: string, value: string): Canvas
    {
        this.mainCanvas?.setAttributeNS(null, attribute, value);
        return this;
    }
}