const east = [
    [
        { name: "alabama", seed: 1 },
        { name: "texas cc", seed: 16 }
    ],
    [
        { name: "maryland", seed: 8 },
        { name: "west virginia", seed: 9 },
    ],
    [
        { name: "San Diego St.", seed: 5 },
        { name: "Charleston", seed: 12 },
    ],
    [
        { name: "virgina", seed: 6 },
        { name: "furman", seed: 11 },
    ],
    [
        { name: "creighton", seed: 3 },
        { name: "nc state", seed: 14 },
    ],
    [
        { name: "baylor", seed: 7 },
        { name: "UCSB", seed: 10 },
    ],
    [
        { name: "missouri", seed: 2 },
        { name: "Utah St.", seed: 15 },
    ],
    [   
        { name: "Arizona", seed: 4 },
        { name: "Princton", seed: 13 },
    ],
]

function simulateGame(team1, team2) {
    const seedDifference = Math.abs(team1.seed - team2.seed);
    const probability = 1 / (1 + Math.pow(2, -seedDifference / 5));
    const winner = Math.random() < probability ? team1 : team2;
    console.log(team1.seed, team2.seed, probability)
    return winner;
}

function simulateRound(games) {
    const nextRound = [];
    let nextGame = [];
    for (let game of games) {
        const [ team1, team2 ] = game;
        // who wins this game?
        const winner = simulateGame(team1, team2);
        // add winner to next game
        nextGame.push(winner);
        // if next game has 2 teams, add the game to the next round
        if (nextGame.length === 2) {
            nextRound.push(nextGame);
            nextGame = [];
        }
    }
    console.log(nextRound);
    if (nextRound.length) {
        simulateRound(nextRound);
    } else {
        // this is the winner
        return nextGame[0];
    }
}

function createRound(gameCount) {
   for(let i = 0; i < gameCount; i++){
    const round = document.createElement('div');
    round.className = 'round';
    document.body.appendChild(round);
    const game = document.createElement('div');
    game.className = 'game';
    document.body.round.appendChild(game);
    }
}

// function createGame () {
// for(let i = 8; i > 8; i/2){
//     const game = document.createElement('div');
//     game.className = 'game';
//     document.body.appendChild(game);
//     }
// }



createRound(5);

simulateRound(east);