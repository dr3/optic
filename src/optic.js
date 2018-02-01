export default class Optic {
    constructor(element) {
        this.el = document.getElementById(element);;

        this.init();
    }

    init() {
        console.log('👁👁 init()')
        //Build Canvas
    }

    getElement() {
        return this.el;
    }
}
