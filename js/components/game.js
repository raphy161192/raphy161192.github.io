import avecTemplateHtml from '../avecTemplateHtml.js'

Vue.component('game', avecTemplateHtml({
    props: ['show', 'test'],
    data() {
        return {
            start: false,
            easy: false,
            medium: false,
            hard: false,
            isActive: false,
            playerOneVictory: false,
            playerOne: true,
            topLeft: " ",
            topCenter: " ",
            topRight: " ",
            centerLeft: " ",
            center: " ",
            centerRight: " ",
            bottomLeft: " ",
            bottomCenter: " ",
            bottomRight: " ",
            player: "Player one",
            firstTurn: true,
            botWin: false,
            hardList: [],
            css: {
                borderColor: this.randomColor(),
                fontWeight: "bold",
                fontSize: "100px",
                textAlign: "center",
                transition: "2s"
            },
        }
    },
    template: 'ticTacToe.html',
    mounted() {
        setInterval(()=>{
            this.css.borderColor = this.randomColor()
        },1000)
    },
    methods: {

        hardGame() {
            this.hard = true
            this.isActive = true
            this.start = true
        },

        easyGame() {
            this.easy = true
            this.isActive = true
            this.start = true
        },

        clickCase(selectedCase) {

            if(this.start != true) {
                return
            }
            // console.log(selectedCase)
            if(this[selectedCase] == "X") {
                return
            }  else if(this[selectedCase] == "O") {
                return
            } else if (this.playerOne == true) {
                this[selectedCase] = "X"
                this.playerOne = false
                this.player = "Bot"
            } 
            // else {
            //     this[selectedCase] = "O"
            //     this.playerOne = true
            //     this.player = "Player one"

            // }

            this.valider()

            setTimeout(() => {
                this.bot()
                this.valider()
            }, 1000);
   
        },

        bot() {

            if(this.easy == true) {
                this.botEasy()
            } else if(this.hard == true) {
                this.botHard()
            }
            
        },

        botEasy() {
            let list = []

        if (this.topLeft == ' ') {
            list.push('topLeft')
        }
            
        if(this.topCenter == ' ') {
            list.push('topCenter')
        }
            
        if(this.topRight == ' ') {
            list.push('topRight')
        }
            
        if(this.centerLeft == ' ') {
            list.push('centerLeft')
        }
            
        if(this.center == ' ') {
            list.push('center')
        }
            
        if(this.centerRight == ' ') {
            list.push('centerRight')
        }
            
        if(this.bottomLeft == ' ') {
            list.push('bottomLeft')
        }
            
        if(this.bottomCenter == ' ') {
            list.push('bottomCenter')
        }
            
        if(this.bottomRight == ' ') {
            list.push('bottomRight')
        }

        let choiceEasy = Math.floor(Math.random() * list.length)
        let selectedCaseBotEasy = list[choiceEasy]
        this[selectedCaseBotEasy] = "O"
            
        
        this.playerOne = true
        this.player = "Player one"
        },

        firstTurnMedium() {
            if(this.firstTurn == true) {
                this.botEasy()
                this.firstTurn = false
            }
        },

        firstTurnHard() {

            let hardListFirst = []

            if(this.firstTurn == true) {

                if(this.center == ' ') {
                    hardListFirst.push('center')
                }
                
                if(this.topLeft == ' ') {
                    hardListFirst.push('topLeft')
                }
                
                if(this.topRight == ' ') {
                    hardListFirst.push('topRight')
                }
    
                if(this.bottomLeft == ' ') {
                    hardListFirst.push('bottomLeft')
                }
    
                if(this.bottomRight == ' ') {
                    hardListFirst.push('bottomRight')
                }
    
                let choice = Math.floor(Math.random() * hardListFirst.length)
                let selectedCaseBot = hardListFirst[choice]
                this[selectedCaseBot] = "O"
    
                this.playerOne = true
                this.player = "Player one"
            }

        },

        botHard() {

            this.firstTurnHard()

            this.canTheBotWin()

            if(this.firstTurn == false & this.botWin == false) {

                let hardList = []

                if (this.topLeft == 'X' & this.topCenter == 'X' & this.topRight == ' ') { /* Horizontal Première rangée */
                    hardList.push('topRight')
                } else if(this.topCenter == 'X' & this.topRight == 'X' & this.topLeft == ' ') {
                    hardList.push('topLeft')
                } else if(this.topRight == 'X' & this.topLeft == 'X' & this.topCenter == ' ') {
                    hardList.push('topCenter')
                } else if(this.centerLeft == 'X' & this.center == 'X' & this.centerRight == ' ') { /* Horizontal Deuxième rangée */
                    hardList.push('centerRight')
                } else if(this.center == 'X' & this.centerRight == 'X' & this.centerLeft == ' ') {
                    hardList.push('centerLeft')
                } else if(this.centerRight == 'X' & this.centerLeft == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.bottomLeft == 'X' & this.bottomCenter == 'X' & this.bottomRight == ' ') { /* Horizontal Troisième rangée */
                    hardList.push('bottomRight')
                } else if(this.bottomCenter == 'X' & this.bottomRight == 'X' & this.bottomLeft == ' ') {
                    hardList.push('bottomLeft')
                } else if(this.bottomRight == 'X' & this.bottomLeft == 'X' & this.bottomCenter == ' ') {
                    hardList.push('bottomCenter')
                } else if(this.topLeft == 'X' & this.centerLeft == 'X' & this.bottomLeft == ' ') { /* Vertical Première rangée */
                    hardList.push('bottomLeft')
                } else if(this.centerLeft == 'X' & this.bottomLeft == 'X' & this.topCenter == ' ') {
                    hardList.push('topCenter')
                } else if(this.topLeft == 'X' & this.bottomLeft == 'X' & this.centerLeft == ' ') {
                    hardList.push('centerLeft')
                } else if(this.topCenter == 'X' & this.center == 'X' & this.bottomCenter == ' ') { /* Vertical Deuxième rangée */
                    hardList.push('bottomCenter')
                } else if(this.center == 'X' & this.bottomCenter == 'X' & this.topCenter == ' ') {
                    hardList.push('topCenter')
                } else if(this.topCenter == 'X' & this.bottomCenter == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.topRight == 'X' & this.centerRight == 'X' & this.bottomRight == ' ') { /* Vertical Troisième rangée */
                    hardList.push('bottomRight')
                } else if(this.centerRight == 'X' & this.bottomRight == 'X' & this.topRight == ' ') {
                    hardList.push('topRight')
                } else if(this.topRight == 'X' & this.bottomRight == 'X' & this.centerRight == ' ') {
                    hardList.push('centerRight')
                } else if(this.topLeft == 'X' & this.center == 'X' & this.bottomRight == ' ') { /* Diagonale gauche -> droite */
                    hardList.push('bottomRight')
                } else if(this.center == 'X' & this.bottomRight == 'X' & this.topLeft == ' ') {
                    hardList.push('topLeft')
                } else if(this.topLeft == 'X' & this.bottomRight == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.topRight == 'X' & this.center == 'X' & this.bottomLeft == ' ') { /* Diagonale droite -> gauche */
                    hardList.push('bottomLeft')
                } else if(this.center == 'X' & this.bottomLeft == 'X' & this.topRight == ' ') {
                    hardList.push('topRight')
                } else if(this.topRight == 'X' & this.bottomLeft == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.topCenter == 'X' & this.bottomRight == 'X' & this.center == ' ') { /* Centres et coins */
                    hardList.push('center')
                } else if(this.topCenter == 'X' & this.bottomLeft == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.bottomCenter == 'X' & this.topRight == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.bottomCenter == 'X' & this.topLeft == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.centerLeft == 'X' & this.topRight == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.centerLeft == 'X' & this.bottomRight == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.centerRight == 'X' & this.topLeft == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else if(this.centerRight == 'X' & this.bottomLeft == 'X' & this.center == ' ') {
                    hardList.push('center')
                } else {
                    this.botEasy()
                }

                let choiceHard = Math.floor(Math.random() * hardList.length)
                let selectedCaseBotHard = hardList[choiceHard]
                this[selectedCaseBotHard] = "O"

                this.playerOne = true
                this.player = "Player one"
            }

            this.firstTurn = false

        },

        canTheBotWin() {
            let botList = []

            /* Le bot vérifie s'il peut gagner */
            if (this.topLeft == 'O' & this.topCenter == 'O' & this.topRight == ' ') { /* Horizontal Première rangée */
                botList.push('topRight')
                this.botWin = true
            } else if(this.topCenter == 'O' & this.topRight == 'O' & this.topLeft == ' ') {
                botList.push('topLeft')
                this.botWin = true
            } else if(this.topRight == 'O' & this.topLeft == 'O' & this.topCenter == ' ') {
                botList.push('topCenter')
                this.botWin = true
            } else if(this.centerLeft == 'O' & this.center == 'O' & this.centerRight == ' ') { /* Horizontal Deuxième rangée */
                botList.push('centerRight')
                this.botWin = true
            } else if(this.center == 'O' & this.centerRight == 'O' & this.centerLeft == ' ') {
                botList.push('centerLeft')
                this.botWin = true
            } else if(this.centerRight == 'O' & this.centerLeft == 'O' & this.center == ' ') {
                botList.push('center')
                this.botWin = true
            } else if(this.bottomLeft == 'O' & this.bottomCenter == 'O' & this.bottomRight == ' ') { /* Horizontal Troisième rangée */
                botList.push('bottomRight')
                this.botWin = true
            } else if(this.bottomCenter == 'O' & this.bottomRight == 'O' & this.bottomLeft == ' ') {
                botList.push('bottomLeft')
                this.botWin = true
            } else if(this.bottomRight == 'O' & this.bottomLeft == 'O' & this.bottomCenter == ' ') {
                botList.push('bottomCenter')
                this.botWin = true
            } else if(this.topLeft == 'O' & this.centerLeft == 'O' & this.bottomLeft == ' ') { /* Vertical Première rangée */
                botList.push('bottomLeft')
                this.botWin = true
            } else if(this.centerLeft == 'O' & this.bottomLeft == 'O' & this.topCenter == ' ') {
                botList.push('topCenter')
                this.botWin = true
            } else if(this.topLeft == 'O' & this.bottomLeft == 'O' & this.centerLeft == ' ') {
                botList.push('centerLeft')
                this.botWin = true
            } else if(this.topCenter == 'O' & this.center == 'O' & this.bottomCenter == ' ') { /* Vertical Deuxième rangée */
                botList.push('bottomCenter')
                this.botWin = true
            } else if(this.center == 'O' & this.bottomCenter == 'O' & this.topCenter == ' ') {
                botList.push('topCenter')
                this.botWin = true
            } else if(this.topCenter == 'O' & this.bottomCenter == 'O' & this.center == ' ') {
                botList.push('center')
                this.botWin = true
            } else if(this.topRight == 'O' & this.centerRight == 'O' & this.bottomRight == ' ') { /* Vertical Troisième rangée */
                botList.push('bottomRight')
                this.botWin = true
            } else if(this.centerRight == 'O' & this.bottomRight == 'O' & this.topRight == ' ') {
                botList.push('topRight')
                this.botWin = true
            } else if(this.topRight == 'O' & this.bottomRight == 'O' & this.centerRight == ' ') {
                botList.push('centerRight')
            } else if(this.topLeft == 'O' & this.center == 'O' & this.bottomRight == ' ') { /* Diagonale gauche -> droite */
                botList.push('bottomRight')
                this.botWin = true
            } else if(this.center == 'O' & this.bottomRight == 'O' & this.topLeft == ' ') {
                botList.push('topLeft')
                this.botWin = true
            } else if(this.topLeft == 'O' & this.bottomRight == 'O' & this.center == ' ') {
                botList.push('center')
                this.botWin = true
            } else if(this.topRight == 'O' & this.center == 'O' & this.bottomLeft == ' ') { /* Diagonale droite -> gauche */
                botList.push('bottomLeft')
                this.botWin = true
            } else if(this.center == 'O' & this.bottomLeft == 'O' & this.topRight == ' ') {
                botList.push('topRight')
                this.botWin = true
            } else if(this.topRight == 'O' & this.bottomLeft == 'O' & this.center == ' ') {
                botList.push('center')
                this.botWin = true
            }

            let choiceWin = Math.floor(Math.random() * botList.length)
            let selectedCaseBotWin = botList[choiceWin]
            this[selectedCaseBotWin] = "O"

            this.playerOne = true
            this.player = "Player one"

        },

        valider() {
            
            if(this.topLeft === "X" && this.topCenter === "X" && this.topRight === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if (this.centerLeft === "X" && this.center === "X" && this.centerRight === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if(this.bottomLeft === "X" && this.bottomCenter === "X" && this.bottomRight === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if(this.topLeft === "X" && this.centerLeft === "X" && this.bottomLeft === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if(this.topCenter === "X" && this.center === "X" && this.bottomCenter === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if(this.topRight === "X" && this.centerRight === "X" && this.bottomRight === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if(this.topLeft === "X" && this.center === "X" && this.bottomRight === "X") {
                this.playerOneVictory = true
                this.victory()
            } else if(this.topRight === "X" && this.center === "X" && this.bottomLeft === "X") {
                this.playerOneVictory = true
                this.victory()
            } 


            if(this.topLeft === "O" && this.topCenter === "O" && this.topRight === "O") {
                this.victory()
            } else if (this.centerLeft === "O" && this.center === "O" && this.centerRight === "O") {
                this.victory()
            } else if(this.bottomLeft === "O" && this.bottomCenter === "O" && this.bottomRight === "O") {
                this.victory()
            } else if(this.topLeft === "O" && this.centerLeft === "O" && this.bottomLeft === "O") {
                this.victory()
            } else if(this.topCenter === "O" && this.center === "O" && this.bottomCenter === "O") {
                this.victory()
            } else if(this.topRight === "O" && this.centerRight === "O" && this.bottomRight === "O") {
                this.victory()
            } else if(this.topLeft === "O" && this.center === "O" && this.bottomRight === "O") {
                this.victory()
            } else if(this.topRight === "O" && this.center === "O" && this.bottomLeft === "O") {
                this.victory()
            } 

            if(this.topLeft != " " && this.topCenter != " " && this.topRight != " " &&
            this.centerLeft != " " && this.center != " " && this.centerRight != " " &&
            this.bottomLeft != " " && this.bottomCenter != " " && this.bottomRight != " ") {
                this.draw()
            }
        },

        victory() {
            if(this.playerOneVictory == true) {
                this.show('victory', 'Player one wins!')
                var audio = new Audio();
                audio.src = "../../audio/grunt-birthday-party.mp3";
                audio.play();
            } else {
                this.show('victory', 'Player two wins!')
                var audio = new Audio();
                audio.src = "../../audio/grunt-birthday-party.mp3";
                audio.play();
            }
        },

        draw() {
            this.show('victory', 'Draw!')
        },

        randomColor() {

            var caracters = [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f"
            ];
        
            var color = "#"
        
            for( var i = 0; i < 6; i ++){
                color += caracters[Math.floor(Math.random() * caracters.length )]
            }
        
            return color       
        },
    }
}))