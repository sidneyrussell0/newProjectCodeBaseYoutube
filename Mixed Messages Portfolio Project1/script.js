function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
    } 
    
    const marioBattleArrays = {
        playerOne: ['Mario', 'Luigi', 'Peach', 'Daisy'],
        playerTwo: ['Bowser', 'Wario', 'Waluigi', 'Drybones'],
        powerUp: ['red shell', 'banana', 'green', 'mushroom'],
        results: ['WON','LOST', 'WOOON', 'LOOOST']
    }
    
    let marioBattle = [];

    for (let prop in marioBattleArrays) {
        let optionIdx = generateRandomNumber(marioBattleArrays[prop].length);
        
        switch (prop) {
            case 'playerOne':
                marioBattle.push(`${marioBattleArrays[prop][optionIdx]} has chosen you for this Mario Battle!`);
                break;
            case 'playerTwo':
                marioBattle.push(`${marioBattleArrays[prop][optionIdx]} is your opponent, good luck!!!`);
                break;
            case 'powerUp':
                marioBattle.push(`The power-up to help you defeat your opponent is... a ${marioBattleArrays[prop][optionIdx]}!`);
                break;
            case 'results':
                marioBattle.push(`You have ${marioBattleArrays[prop][optionIdx]} the round!`);
                break;
            default:
                marioBattle.push('GAME NETWORK ERROR -- TRY AGAIN');   
        }
    }

    function formatMarioBattle(battle) {
        const formatted = marioBattle.join('\n')
        console.log(formatted);
    }

    formatMarioBattle(marioBattle);
