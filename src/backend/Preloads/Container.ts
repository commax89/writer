import {SingletonInterface} from "../Framework/Framework";

/**
 * Represents the main frontend app container
 */
export default class Container {

    /**
     * The main app node
     * @protected
     */
    protected appNode: HTMLElement;

    /**
     * Collection of app wide singletons
     * @protected
     */
    protected singletons: Array<SingletonInterface>;

    /**
     * Construct the app wide container
     * @param appNode
     */
    constructor(appNode: HTMLElement)
    {
        this.appNode = appNode;
        this.singletons = [];
    }

    /**
     * Return the main app node
     */
    getAppNode(): HTMLElement
    {
        return this.appNode;
    }

    /**
     * Register a singleton in the app container
     *
     * @param key
     * @param object
     */
    registerSingleton(key: string, object: object): Container
    {
        this.singletons.push({
            key, object
        })
        return this;
    }
}