class YesNoQuestions {

    constructor() {
        this.positiveResponses = ['Sim', 'Com certeza', 'Absolutamente sim', 'Yes', 'Yes sir', 'Yep', 'Óbvio', 'Obviamente', 'Claro que sim'];
        this.negativeResponses = ['Não', 'Nem ferrando', 'No', 'Nop', 'Nunca', 'Jamais'];
    }

    handle() {
        let result;
        if (Math.random() < 0.5) {
            return this.getRandomResponse(this.positiveResponses)
        } else {
            return this.getRandomResponse(this.negativeResponses)
        }
        return result;
    }

    getRandomResponse(list) {
        const index = Math.floor((Math.random() * list.length));
        return list[index];
    }

}

module.exports = new YesNoQuestions();
