const Discord = require(`discord.js`);

module.exports.run = async (client, message, args) => {
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if (!bUser) return message.channel.send(`${message.author} Couldn't find the specified user`)
        args.shift(); 
        let bReason = args.join(" ");
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author} Do not have kick permission`);
        if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author} That person can't be kicked!`);
        
        let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#bc0000")
        .addField("Banned User", `${bUser} with ID ${bUser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", bReason);
        
        let banChannel = message.guild.channels.find(`name`, "logs");
        if(!banChannel) return message.channel.send("Can't find logs channel.");
        message.delete().catch(O_o=>{});
        message.channel.send(`${bUser} has been banned by ${message.author}`)
        
        message.guild.member(bUser).ban(bReason)
        banChannel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
    
}