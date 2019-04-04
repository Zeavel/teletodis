const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const hook1 = new Discord.WebhookClient('552776940231065615', process.env.HOOK1)
const hook2 = new Discord.WebhookClient('552779703170236437', process.env.HOOK2)
const hook3 = new Discord.WebhookClient('552781891514925056', process.env.HOOK3)
const hook4 = new Discord.WebhookClient('552782571021533184', process.env.HOOK4)
const hook5 = new Discord.WebhookClient('552784608916144129', process.env.HOOK5)
const hook6 = new Discord.WebhookClient('552785272706957334', process.env.HOOK6)
const hook7 = new Discord.WebhookClient('552788071482130453', process.env.HOOK7)
const hook8 = new Discord.WebhookClient('552788807632814082', process.env.HOOK8)
const hook9 = new Discord.WebhookClient('552789536825016347', process.env.HOOK9)
const hook10 = new Discord.WebhookClient('552789978950664193', process.env.HOOK10)
const hook11 = new Discord.WebhookClient('552790397546659840', process.env.HOOK11)
const hook12 = new Discord.WebhookClient('552790736203022337', process.env.HOOK12)
const hook13 = new Discord.WebhookClient('552791077346738186', process.env.HOOK13)


const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(process.env.BOT1, {polling: true} );
const bot2 = new TelegramBot(process.env.BOT2, {polling: true} );
const bot3 = new TelegramBot(process.env.BOT3, {polling: true} );
const bot4 = new TelegramBot(process.env.BOT4, {polling: true} );
const bot5 = new TelegramBot(process.env.BOT5, {polling: true} );



bot.on('channel_post', (msg) => {
  const chatId = msg.chat.id;
if(msg.photo != undefined)
{
    var id = msg.photo[msg.photo.length - 1].file_id
bot.getFile(id).then(sf=>{
    console.log(sf.file_path)
})
    bot.getFileLink(id).then(sd=>  {
       console.log(msg.caption)
        if(msg.caption == undefined)
        {
            var embeds = new Discord.RichEmbed()
            .setImage(sd)
           hook1.send(embeds)
        }
      else
      {
        var embeds = new Discord.RichEmbed()
        .setImage(sd)
        .setDescription(msg.caption)
        hook1.send(embeds)
      }
      })
}
else
{
    hook1.send(msg.text)
}
});
bot2.on('channel_post', (msg) => {
    const chatId = msg.chat.id;
  if(msg.photo != undefined)
  {
    var id = msg.photo[msg.photo.length - 1].file_id
  bot2.getFile(id).then(sf=>{
      console.log(sf.file_path)
  })
      bot2.getFileLink(id).then(sd=>  {
         console.log(msg.caption)
          if(msg.caption == undefined)
          {
              var embeds = new Discord.RichEmbed()
              .setImage(sd)
             hook2.send(embeds)
          }
        else
        {
          var embeds = new Discord.RichEmbed()
          .setImage(sd)
          .setDescription(msg.caption)
          hook2.send(embeds)
        }
        })
  }
  else
  {
      hook2.send(msg.text)
  }
  });
  bot3.on('channel_post', (msg) => {
    const chatId = msg.chat.id;
  if(msg.photo != undefined)
  {
    var id = msg.photo[msg.photo.length - 1].file_id
  bot3.getFile(id).then(sf=>{
      console.log(sf.file_path)
  })
      bot3.getFileLink(id).then(sd=>  {
         console.log(msg.caption)
          if(msg.caption == undefined)
          {
              var embeds = new Discord.RichEmbed()
              .setImage(sd)
             hook3.send(embeds)
          }
        else
        {
          var embeds = new Discord.RichEmbed()
          .setImage(sd)
          .setDescription(msg.caption)
          hook3.send(embeds)
        }
        })
  }
  else
  {
      hook3.send(msg.text)
  }
  });
  bot4.on('channel_post', (msg) => {
    const chatId = msg.chat.id;
  if(msg.photo != undefined)
  {
    var id = msg.photo[msg.photo.length - 1].file_id
  bot4.getFile(id).then(sf=>{
      console.log(sf.file_path)
  })
      bot4.getFileLink(id).then(sd=>  {
         console.log(msg.caption)
          if(msg.caption == undefined)
          {
              var embeds = new Discord.RichEmbed()
              .setImage(sd)
             hook4.send(embeds)
          }
        else
        {
          var embeds = new Discord.RichEmbed()
          .setImage(sd)
          .setDescription(msg.caption)
          hook4.send(embeds)
        }
        })
  }
  else
  {
      hook4.send(msg.text)
  }
  });
  bot5.on('channel_post', (msg) => {
    const chatId = msg.chat.id;
    console.log("post")
if(msg.text.startsWith("/add"))
{
    console.log("da")
    var ide = msg.text.substring(5)
    console.log(ide)
  console.log(client.user.username)
  client.channels.get(ide).createWebhook(client.channels.get(ide).name, 'https://i.imgur.com/mI8XcpG.jpg')
    .then(webhook => {
     console.log(client.user.username)
        client.channels.get("563222640903585792").fetchMessage("563222913986199563")
        .then(t=>{
         
         t.edit(t.content+chatId+"darud")
   
        })
        client.channels.get("563222640903585792").fetchMessage("563222919212171264")
        .then(t=>{
       console.log(t.content)
         t.edit(t.content+webhook.id+"darud")
        
        })
        bot5.sendMessage(chatId, "Введите токен")
   })
   
   
   
}
if(msg.text.startsWith("/token"))
{
    var tok = msg.text.substring(7)
    client.channels.get("563222640903585792").fetchMessage("563222916649713689")
    .then(t=>{
   t.edit(t.content+tok+"darud")
    })
}
else
{
    client.channels.get("563222640903585792").fetchMessage("563222913986199563")
    .then(ts=>{
       if(ts.content.includes(chatId))
       {
          
           var number = ts.content.split("darud").indexOf(chatId.toString())
           console.log(number)
           client.channels.get("563222640903585792").fetchMessage("563222919212171264")
           .then(wi=>{
            var webid = wi.content.split("darud")[number]
            console.log(webid)
            client.channels.get("563222640903585792").fetchMessage("563222916649713689")
            .then(wt=>{
             
               var wk = wt.content.split("darud")[number]
               console.log(wk)
               var hook = new Discord.WebhookClient(webid, wk);
               if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook.send(embeds)
              }
              })
        }
        else
        {
            hook.send(msg.text)
        }
              
            })
           })
       }
    })
}


    console.log(chatId)
    if(chatId == -1001328466311)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook5.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook5.send(embeds)
              }
              })
        }
        else
        {
            hook5.send(msg.text)
        }
    }
    if(chatId == -1001491971663)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook6.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook6.send(embeds)
              }
              })
        }
        else
        {
            hook6.send(msg.text)
        }
    }
    if(chatId == -1001302864030)
    {
       
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook7.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook7.send(embeds)
              }
              })
        }
        else
        {
            hook7.send(msg.text)
        } 
    }
    if(chatId == -1001384719128)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook8.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook8.send(embeds)
              }
              })
        }
        else
        {
            hook8.send(msg.text)
        } 
    }
    if(chatId == -1001484319922)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook9.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook9.send(embeds)
              }
              })
        }
        else
        {
            hook9.send(msg.text)
        } 
    }
    if(chatId == -1001340884200)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook10.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook10.send(embeds)
              }
              })
        }
        else
        {
            hook10.send(msg.text)
        } 
    }
    if(chatId == -1001352580875)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook11.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook11.send(embeds)
              }
              })
        }
        else
        {
            hook11.send(msg.text)
        } 
    }
    if(chatId == -1001247482522)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook12.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook12.send(embeds)
              }
              })
        }
        else
        {
            hook12.send(msg.text)
        } 
    }
    if(chatId == -1001397358006)
    {
        if(msg.photo != undefined)
        {
          var id = msg.photo[msg.photo.length - 1].file_id
        bot5.getFile(id).then(sf=>{
            console.log(sf.file_path)
        })
            bot5.getFileLink(id).then(sd=>  {
               console.log(msg.caption)
                if(msg.caption == undefined)
                {
                    var embeds = new Discord.RichEmbed()
                    .setImage(sd)
                   hook13.send(embeds)
                }
              else
              {
                var embeds = new Discord.RichEmbed()
                .setImage(sd)
                .setDescription(msg.caption)
                hook13.send(embeds)
              }
              })
        }
        else
        {
            hook13.send(msg.text)
        } 
    }
    /*
  if(msg.photo != undefined)
  {
    var id = msg.photo[msg.photo.length - 1].file_id
  bot5.getFile(id).then(sf=>{
      console.log(sf.file_path)
  })
      bot5.getFileLink(id).then(sd=>  {
         console.log(msg.caption)
          if(msg.caption == undefined)
          {
              var embeds = new Discord.RichEmbed()
              .setImage(sd)
             hook5.send(embeds)
          }
        else
        {
          var embeds = new Discord.RichEmbed()
          .setImage(sd)
          .setDescription(msg.caption)
          hook5.send(embeds)
        }
        })
  }
  else
  {
      hook5.send(msg.text)
  }*/
  });

var fs = require("fs");

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("-" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function getRandomInt(min, max)
{

  return Math.floor(Math.random() * (max - min + 1)) + min;

}
client.on("ready", n =>{

})
client.on("message", message =>
{
   
 
   
})
client.login(process.env.CLIENTB)
client2.login(process.env.CLIENTB2)


