const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('slots')
        .setDescription('Play a slot machine!')
        .addIntegerOption(option =>
            option.setName('bet')
                .setDescription('bet')
                .setRequired(false)),
    async execute(interaction){
        const output = runSlots()
        if(interaction.options.getInteger('bet')){
            return interaction.reply(`${output} \n You ${checkWin(output)} \n You ${(checkWin(output).replace("!","") === 'win') ? 'won':'lost'} ${interaction.options.getInteger('bet')} tokens`);
        }
        else{
            return interaction.reply(`${output} \n You ${checkWin(output)}`)
        }
        
    },
};

function checkWin(slotOutput){
    //sanitize slotOutput
    slotOutput = slotOutput.trim();
    slotOutput = slotOutput.replaceAll("|","");

    let win = true;
    for(let i = 0; i < slotOutput.length; i++){
        if(slotOutput[0] != slotOutput[i]){
            win = false;
        }
    }
    return `${ win ? 'win':'lose'}!`
}

function runSlots(){
    return `|${spinRow()}|${spinRow()}|${spinRow()}|`
}

function spinRow(){
    const seed = Math.random();
    if(seed < .3){
        return `®`
    }
    else if(seed < .6){
        return `ø`
    }
    else if(seed < .6){
        return `©`
    }
    else{
        return `∆`
    }
}