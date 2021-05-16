import Bootstrap from "./Bootstrap";
import Reporter from "./Exception/Reporter";
import Exception from "../Framework/Exceptions/Exception";

window.addEventListener('DOMContentLoaded', () => {
    let appNode = document.getElementById('app');

    if (appNode) {
        Bootstrap.init(appNode)
    } else {
        Reporter.throw(
            new Exception('Fatal error. Main app not found.')
        );
    }
})