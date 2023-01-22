const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})
const fs = require('fs')
const cron = require("node-cron")

if (!fs.existsSync("./config.js")) fs.writeFileSync(`./config.js`, 'module.exports = {\n    token: "" // Place your token here\n}');

const consolecolor = require('gradient-string');
const q = require('readline-sync')
const config = require('./config')

var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();



const token = config.token || process.env.token
if (!token) throw new TypeError("Placez Votre Token Dans La Config")

client.login(token).catch(() => console.log(consolecolor("#ff544a","#ff544a")("[!] Mauvais Token ! Modifiez Le Dans La Config")))

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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

    console.log(`                                               Il est actuellement ${hour}:${minute}:${second}\n\n`)
    await sleep(1500)
    console.log(consolecolor("#431dbf", "#af1dbf")("[1] Auto Voter"))
    console.log(consolecolor("#431dbf", "#af1dbf")("[2] Auto Bumper\n"))
    const question = q.question((`[~] Choissisez Une Option : `))
    const channelid = "966395038684835901"
    const channel = client.channels.cache.get(channelid)
    if (!channel){
        console.log(consolecolor("#ff544a","#ff544a")("[!] Pas de Salon trouvé (Veuillez Contacter ShadowMikado)"))
        await sleep(2000)
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
            await sleep(2000)
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
