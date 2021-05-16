import {ExceptionInterface} from "../../Framework/Exceptions/Exceptions";

export default class Reporter {

    protected exception: ExceptionInterface;

    constructor(exception: ExceptionInterface) {
        this.exception = exception;
    }

    drawOnBody() {
        let template = document.querySelector('template[data-role=errorMessage]') as HTMLTemplateElement;

        if (template) {
            let fragment = template.content.cloneNode(true) as DocumentFragment;
            let container = fragment.children.item(0) ?? new DocumentFragment();
            let title = container.querySelector('h3') ?? new HTMLElement();
            title.innerText = 'FATAL ERROR!';
            let message = container.querySelector('p') ?? new HTMLElement();
            message.textContent = this.exception.getMessage();

            document.body.append(container);
        }
    }

    static throw(exception: ExceptionInterface)
    {
        let reporter = new Reporter(exception);
        reporter.drawOnBody();

        throw new Error(exception.getMessage());
    }
}