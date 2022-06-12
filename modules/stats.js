// Class to hold information used in calculating the score
export class Stats {
    constructor(htmlId) {
        this.htmlId = '#' + htmlId;
        this.displaySelector = document.querySelector(this.htmlId);
        this.stat = 0;
    }

    reset() {
        this.stat = 0;
        this.displaySelector.textContent = this.stat;
    }
}