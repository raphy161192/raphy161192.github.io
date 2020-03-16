import './components/game.js'
import './components/victory.js'
import './components/start.js'

new Vue({
    el: "#app",
    data: {
        active_page: "start",
        symbol: " ",
        winner: " ",

    },
    methods: {

        show(new_page, winnerPlayer) {
            this.active_page = new_page
            this.winner = winnerPlayer
        },
    }
}) 
    

