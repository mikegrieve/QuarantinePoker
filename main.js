Vue.component('cards-on-table', {
    template: `
    <div>
        <img class="playing-card" v-for="card in cards" :src=cardImage(card)>
        <button @click="nextState">Display Cards</button>
    </div>
    `,
    data() {
        return {
            currState: 'empty',
            cards: []
        }
    },
    computed: {
        deck() {
            let deckValues = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
            let fullDeck = []
            deckValues.forEach(e => {
                fullDeck.push(`${e}C`, `${e}D`, `${e}H`, `${e}S`)
            });
            return fullDeck
        }
    },
    methods: {
        cardImage(card) {
            return `./assets/deck/${card}.png`
        },
        nextState() {
            if (this.currState === 'empty') {
                this.addRandomCard()
                this.addRandomCard()
                this.addRandomCard()
                this.currState = 'flop'
            } else if (this.currState === 'flop') {
                this.addRandomCard()
                this.currState = 'turn'
            } else if (this.currState === 'turn') {
                this.addRandomCard()
                this.currState = 'river'
            }
        },
        addRandomCard() {
            if (this.deck.length > 0) {
                let index = Math.floor(Math.random() * Math.floor(this.deck.length))
                this.cards.push(this.deck.splice(index, 1))
            }
            // TODO: Throw error when out of cards
        }
    }
})

var app = new Vue({
    el: '#app'
})