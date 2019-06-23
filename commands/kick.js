const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!kUser) return message.channel.send(`${message.author} Couldn't find the specified user`)
        args.shift(); 
        let kReason = args.join(" ");
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author} Do not have kick permission`);
        if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author} That person can't be kicked!`);
        
        let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kick")
        .setColor("#e56b00")
        .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
        .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Kicked In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", kReason);
        
        let kickChannel = message.guild.channels.find(`name`, "logs");
        if(!kickChannel) return message.channel.send("Can't find logs channel.");
        message.delete().catch(O_o=>{});
        message.channel.send(`${kUser} has been kicked by ${message.author}`)
        
        message.guild.member(kUser).kick(kReason)
        kickChannel.send(kickEmbed); 
}

module.exports.help = {
    name: "kick"
    
}