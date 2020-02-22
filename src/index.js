const DISCHARGE_OF_UNITS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const DISCHARGE_OF_TENTHS = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const ROUND_TENTH = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(number) {
    if (number >= 0 && number < 10) {
        return DISCHARGE_OF_UNITS[number];
    }
    if (number >= 10 && number < 20) {
        return DISCHARGE_OF_TENTHS[number - 10];
    }
    if (number >= 20 && number < 100) {
        if (number % 10 !== 0) return `${ROUND_TENTH[Math.floor(number / 10 - 2)]} ${DISCHARGE_OF_UNITS[number % 10]}`;
        else return `${ROUND_TENTH[Math.floor(number / 10 - 2)]}`;
    }
    if (number >= 100) {
        if (number % 100 === 0) {
            return `${DISCHARGE_OF_UNITS[Math.trunc(number/100)]} hundred`;
        }
        if ((number - (Math.trunc(number / 100) * 100)) >= 20) {
            if ((number % 10 === 0)) return `${DISCHARGE_OF_UNITS[Math.trunc(number/100)]} hundred ${ROUND_TENTH[Math.trunc(number / 10) % 10 - 2]}`;
            else return `${DISCHARGE_OF_UNITS[Math.trunc(number/100)]} hundred ${ROUND_TENTH[Math.trunc(number / 10) % 10 - 2]} ${DISCHARGE_OF_UNITS[Math.trunc(number%10)]}`;
        }
        if ((number - (Math.trunc(number / 100) * 100)) >= 10 && (number - (Math.trunc(number / 100) * 100)) < 20) return `${DISCHARGE_OF_UNITS[Math.trunc(number/100)]} hundred ${DISCHARGE_OF_TENTHS[number%100 - 10]}`;
        if ((number - (Math.trunc(number / 100) * 100)) < 10) return `${DISCHARGE_OF_UNITS[Math.trunc(number/100)]} hundred ${DISCHARGE_OF_UNITS[Math.trunc(number%10)]}`;
    }

}