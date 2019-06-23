const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "[»] Helper")) return message.channel.send(`Server does not have role set correctly., This error has been logged. \nPlease contact bot developer <@251557870603075586>`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.reply(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "[»] Helper");
        let role3 = message.guild.roles.find("name", "[»] Mod");
        let role4 = message.guild.roles.find("name", "Staff Manager");
        let role5 = message.guild.roles.find("name", "NodePVP Bot");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role3, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role4, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role5, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setParent('566436802651619329')
        message.reply(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setTitle(`Application For ${message.author.username}!`)
        .setDescription(``)
        .addField(`Requirements`)
        .addField(`Professional attitude and grammar`)
        .addField(`Working Microphone`)
        .addBlankField()
        .addField('Format')
        .addBlankField()
        .addField(`Minecraft username:`)
        .addField(`Previous Minecraft usernames:`)
        .addField(`Timezone:`)
        .addField(`Ability to record Minecraft video:`)
        .addField(`How much time do you have to contribute a week?`)
        .addField(`Any previous staff skills or experience?`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);

}

module.exports.help = {
    name: "apply"
    
}