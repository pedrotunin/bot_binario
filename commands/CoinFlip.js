class CoinFlip {

    handle() {
        let result;
        if (Math.random() < 0.5) {
            result = 'Cara';
        } else {
            result = 'Coroa';
        }
        return `a moeda deu **${result}**`;
    }

}

module.exports = new CoinFlip();