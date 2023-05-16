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
        { name: "alabama", seed: 5 },
        { name: "texas cc", seed: 12 },
    ],
    [   
        { name: "maryland", seed: 4 },
        { name: "west virginia", seed: 13 },
    ],
    [
        { name: "alabama", seed: 6 },
        { name: "texas cc", seed: 11 },
    ],
    [
        { name: "maryland", seed: 3 },
        { name: "west virginia", seed: 14 },
    ],
    [
        { name: "alabama", seed: 7 },
        { name: "texas cc", seed: 10 },
    ],
    [
        { name: "maryland", seed: 2 },
        { name: "west virginia", seed: 15 },
    ]
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

simulateRound(east);