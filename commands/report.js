const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!rUser) return message.channel.send(`${message.author} Couldn't find the specified user`)
        args.shift(); 
        let rReason = args.join(" ");
        
        let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor("#15f153")
        .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("Channel", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", rReason)
        
        let reportschannel = message.guild.channels.find('name', "reports")
        if(!reportschannel) return message.channel.send(`${message.author} Can't find reports channel.`)
        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed)
}

module.exports.help = {
    name: "report"
    
}