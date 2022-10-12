const { SlashCommandBuilder } = require('discord.js');
const { Monday, Tuesday, Wednesday, Thursday, Friday } = require('../../data/schedule.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('schedule')
        .setDescription('Daily Schedule'),
    async execute(interaction){
        return interaction.reply(returnString());
    },
};

function returnString (){
    //get the day of the week;
    let date = new Date();
    let day = date.getDay()
    switch(day){
        case 1:
            return Monday;
        case 2:
            return Tuesday;
        case 3:
            return Wednesday;
        case 4:
            return Thursday;
        case 5:
            return Friday;  
        default:
            return "You have nothing scheduled for today!"       
    }

}
