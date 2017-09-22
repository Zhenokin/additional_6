module.exports = function zeros(expression) {
    let numbers = expression.split('*');
    let zeros = 0;
    let multiplier;
    let velue;
    for (let i = 0; i < numbers.length; i++) {
        velue = numbers[i];

        if (velue[velue.length - 2] === '!') {
            velue = parseInt(velue, 10);
            if (veluse % 2 == 0) {
                multiplier = 2;
            }


        } else {
            velue = parseInt(velue, 10);
            multiplier = 5;
            while (true) {
                if (velue >= multiplier) {
                    zeros += Math.floor(velue / multiplier);
                    multiplier *= 5;
                } else {
                    break;
                }
            }


        }
    }
    return zeros;
    // console.log(e);
}