const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})
const fs = require('fs')
const cron = require("node-cron")

if (!fs.existsSync("./config.js")) fs.writeFileSync(`./config.js`, 'module.exports = {\n    token: "" // Place your token here\n}');

const consolecolor = require('gradient-string');
const q = require('readline-sync')
const config = require('./config')

const token = config.token || process.env.token
if (!token) throw new TypeError("Placez Votre Token Dans La Config")

client.login(token).catch(() => console.log(consolecolor("#ff544a","#ff544a")("[!] Mauvais Token ! Modifiez Le Dans La Config")))

function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec*1000));
  }


async function main() {
    console.clear()
    console.log(consolecolor("#873d7e", "#28136e")(`
                 ▄▄▄       █    ██ ▄▄▄█████▓ ▒█████   ███▄ ▄███▓ ▄▄▄     ▄▄▄█████▓ ██▓▒███████▒▓█████  ██▀███  
                ▒████▄     ██  ▓██▒▓  ██▒ ▓▒▒██▒  ██▒▓██▒▀█▀ ██▒▒████▄   ▓  ██▒ ▓▒▓██▒▒ ▒ ▒ ▄▀░▓█   ▀ ▓██ ▒ ██▒
                ▒██  ▀█▄  ▓██  ▒██░▒ ▓██░ ▒░▒██░  ██▒▓██    ▓██░▒██  ▀█▄ ▒ ▓██░ ▒░▒██▒░ ▒ ▄▀▒░ ▒███   ▓██ ░▄█ ▒
                ░██▄▄▄▄██ ▓▓█  ░██░░ ▓██▓ ░ ▒██   ██░▒██    ▒██ ░██▄▄▄▄██░ ▓██▓ ░ ░██░  ▄▀▒   ░▒▓█  ▄ ▒██▀▀█▄  
                 ▓█   ▓██▒▒▒█████▓   ▒██▒ ░ ░ ████▓▒░▒██▒   ░██▒ ▓█   ▓██▒ ▒██▒ ░ ░██░▒███████▒░▒████▒░██▓ ▒██▒
                 ▒▒   ▓▒█░░▒▓▒ ▒ ▒   ▒ ░░   ░ ▒░▒░▒░ ░ ▒░   ░  ░ ▒▒   ▓▒█░ ▒ ░░   ░▓  ░▒▒ ▓░▒░▒░░ ▒░ ░░ ▒▓ ░▒▓░
                  ▒   ▒▒ ░░░▒░ ░ ░     ░      ░ ▒ ▒░ ░  ░      ░  ▒   ▒▒ ░   ░     ▒ ░░░▒ ▒ ░ ▒ ░ ░  ░  ░▒ ░ ▒░
                  ░   ▒    ░░░ ░ ░   ░      ░ ░ ░ ▒  ░      ░     ░   ▒    ░       ▒ ░░ ░ ░ ░ ░   ░     ░░   ░ 
                      ░  ░   ░                  ░ ░         ░         ░  ░         ░    ░ ░       ░  ░   ░     
                                                                                      ░                        
                                                             `))

                                                             
    //console.log(`                                               Il est actuellement ${hour}:${minute}:${second}\n\n`)
    console.log(consolecolor("#00FFFF", "#00FFFF")(`                                        Enregistré en tant que ${client.user.tag}\n\n`))

    
    await sleep(1.5)
    console.log(consolecolor("#431dbf", "#af1dbf")("[1] Auto Voter"))
    console.log(consolecolor("#431dbf", "#af1dbf")("[2] Auto Bumper\n"))
    const question = q.question((`[~] Choissisez Une Option : `))
    const channelid = "966395038684835901"
    const channel = client.channels.cache.get(channelid)
    if (!channel){
        console.log(consolecolor("#ff544a","#ff544a")("[!] Pas de Salon trouvé (Veuillez Contacter ShadowMikado)"))
        await sleep(2)
        main()
    }

    if(question == "1") {
        cron.schedule('2 * * * * *', () => {
            var date = new Date();
            var hour = date.getHours();
            var minute = date.getMinutes();
            
            if (hour == 0 && minute == 0) {
                
                sendVote(channel)
                console.log(consolecolor("#431dbf", "#af1dbf")(`\n[+] Envoi du vote...`))
            } 
            else {
                if(hour == 12 && minute == 0) {
                  
                    sendVote(channel)
                    console.log(consolecolor("#431dbf", "#af1dbf")(`\n[+] Envoi du vote...`))
                }
                else {
                //console.log("Il n'est pas l'heure d'aller voter")
                }
            }
        });
    }
    else {     
        if(question == "2"){
            console.log(consolecolor("#431dbf", "#af1dbf")(`\n[+] Envoi du Bump...`))
            sendBump(channel)
            setInterval(() => {
                console.log(consolecolor("#431dbf", "#af1dbf")(`\n[+] Envoi du Bump...`))
                sendBump(channel)
            }, 1000*3660)        

        } else {
            console.log(consolecolor("#ff544a","#ff544a")(`\n[!] Erreur, Réessayez...`))
            await sleep(2)
            main()
        }
    }
}


client.on('ready', () => main())


function sendVote(channel) {
    channel.send("=vote")
}
function sendBump(channel) {
    channel.send("=bump")
}


//\u{46}\u{61}\u{69}\u{74}\u{20}\u{70}\u{61}\u{72}\u{20}\u{53}\u{68}\u{61}\u{64}\u{6f}\u{77}\u{4d}\u{69}\u{6b}\u{61}\u{64}\u{6f}
