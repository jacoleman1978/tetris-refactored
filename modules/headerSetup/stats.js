// Class to hold information used in calculating the score
export class Stats {
    constructor(htmlId) {
        this.htmlId = '#' + htmlId;
        this.displaySelector = document.querySelector(this.htmlId);
        this.stat = 0;
    }

    getStat() {
        return this.stat;
    }

    setStat(stat) {
        this.stat = stat;
        this.displaySelector.textContent = this.stat;
    }

    setDisplay(value) {
        this.displaySelector.textContent = value;
    }
}