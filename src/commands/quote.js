const { SlashCommandBuilder } = require('discord.js');
const Quote = require('inspirational-quotes');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Get an inspirational quote'),
    async execute(interaction){
        return interaction.reply(callQuoteAPI()); 
    }           
}

function callQuoteAPI(){
    return Quote.getRandomQuote();
    //  return `${JSON.stringify(Quote.getRandomQuote( { author: false } ).text)}` +
    //     `\n -${JSON.stringify(Quote.getRandomQuote({ author: true}).author)}`

}

   