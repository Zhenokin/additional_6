module.exports = function zeros(expression) {
    let numbers = expression.split('*');
    let zeros = 0;
    // counts of 2 and 5
    let factor = [0, 0];
    let multiplier;
    let velue;
    for (let i = 0; i < numbers.length; i++) {
        velue = numbers[i];
        if (velue[velue.length - 2] === '!') {
            velue = parseInt(velue, 10);
            if (velue % 2 == 0) {
                factor[0] += zer(velue, 2, 2);
                factor[1] += zer(velue, 10, 5);
            } else {
                factor[1] += zer(velue, 5, 5);
                factor[1] -= zer(velue, 10, 5);

            }
        } else {
            velue = parseInt(velue, 10);
            factor[1] += zer(velue, 5, 5);
            factor[0] += zer(velue, 2, 2);
        }
    }
    zeros = Math.min(factor[0], factor[1]);
    return zeros;
}

function zer(velue, mult, y) {
    let m = mult;
    let v = velue;
    let count = 0;
    let x = y;
    while (true) {
        if (v >= m) {
            count += Math.floor(v / m);
            m *= x;
        } else {
            break;
        }
    }
    return count;
}