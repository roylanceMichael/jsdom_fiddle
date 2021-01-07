// https://www.npmjs.com/package/jsdom
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// https://www.npmjs.com/package/discord.js?source=post_page-----7b5fe27cb6fa----------------------
const Discord = require('discord.js');

// https://discordjs.guide/popular-topics/embeds.html#using-the-richembedmessageembed-constructor
const myregexp = /\/assets\/img\/raid-bosses\/graphic(.*?)\jpg/

JSDOM.fromURL("https://leekduck.com/boss/", {}).then(dom => {
  const pokemonURL = myregexp.exec(dom.serialize());
  if (pokemonURL.length > 0) {
    const raidbossURL = "https://leekduck.com" + pokemonURL[0];
    console.log(raidbossURL);

    // discord specific api?
    const exampleEmbed = new Discord.MessageEmbed().setTitle('Current Pokemon Go Raid Bosses!').setURL(raidbossURL);
    console.log(exampleEmbed);
    // is this running in a bot? respond to msg, or channel
    // msg.channel.send({ embed: exampleEmbed })
  }
});