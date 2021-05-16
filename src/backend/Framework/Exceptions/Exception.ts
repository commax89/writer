import {ExceptionInterface} from "./Exceptions";

export default class Exception implements ExceptionInterface {
    message: string;

    constructor(message:string)
    {
        this.message = message;
    }

    getMessage(): string
    {
        return this.message;
    }
}