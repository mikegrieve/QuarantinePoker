Vue.component('cards-on-table', {
    template: `
    <div>
        <img class="playing-card" v-for="card in cards" :src=cardImage(card)>
        <button @click="nextState">Display Cards</button>
    </div>
    `,
    data() {
        return {
            states: [
                'empty',
                'flop',
                'turn',
                'river'
            ],
            currState: 'empty',
            cards: []
        }
    },
    computed: {
        deck() {
            deckValues = ['2','3','4','5','J','Q','K','A']
        }
    },
    methods: {
        cardImage(card) {
            return `./assets/deck/${card}.png`
        },
        nextState() {
            if (this.currState === 'empty') {
                this.cards = ['5S', '4D', '2C'];
                this.currState = 'flop';
            } else if (this.currState === 'flop') {
                this.cards.push('3C');
                this.currState = 'turn';
            } else if (this.currState === 'turn') {
                this.cards.push('2H')
                this.currState = 'river'
            }
        }
    }
})

var app = new Vue({
    el: '#app'
})