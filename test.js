const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const myregexp = /\/assets\/img\/raid-bosses\/graphic(.*?)\jpg/

JSDOM.fromURL("https://leekduck.com/boss/", {}).then(dom => {
  const pokemonURL = myregexp.exec(dom.serialize());
  if (pokemonURL.length > 0) {
    const raidbossURL = "https://leekduck.com" + pokemonURL[0];
    console.log(raidbossURL);

    // discord specific api?
    // exampleEmbed = new discord.MessageEmbed().setTitle('Current Pokemon Go Raid Bosses!').setURL(raidbossURL)
    // msg.channel.send({ embed: exampleEmbed })
  }
});