const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})

const fs = require('fs')
if (!fs.existsSync("./config.js")) fs.writeFileSync(`./config.js`, 'module.exports = {\n    token: "" // Place your token here\n}');

const consolecolor = require('gradient-string');
const { setMaxIdleHTTPParsers } = require('http');

const q = require('readline-sync')

const config = require('./config')


const token = config.token || process.env.token
if (!token) throw new TypeError("You must place your token in the config file")

client.login(token).catch(() => console.log(consolecolor("#873d7e", "#1e1854")("[!] Invalid token ! Change it in the config file")))

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

    //const channelid = q.question(consolecolor("#431dbf", "#af1dbf")("[~] What's the channel ID : "))
    //const message = q.question(consolecolor("#431dbf", "#af1dbf")("[~] What's the message : "))

    console.log(consolecolor("#431dbf", "#af1dbf")("[1] Auto Voter"))
    console.log(consolecolor("#431dbf", "#af1dbf")("[2] Auto Bumper\n"))
    const question = q.question(("[~] Choose an option : "))
    const channelid = "966395038684835901"
    const channel = client.channels.cache.get(channelid)
    if (!channel){
        console.log(consolecolor("#431dbf", "#af1dbf")("[!] No channel found"))
        await sleep(2000)
        main()
    }

    if(question == "1") {
        console.log("In dev")
        await sleep(2000)
        main()
    }
    else {
        if(question == "2"){
            channel.send("=bump")
            console.log(consolecolor("#431dbf", "#af1dbf")("[+] Sending Bump..."))
            setInterval(() => {
                console.log(consolecolor("#431dbf", "#af1dbf")("[+] Sending Bump..."))
                channel.send("=bump")
            }, 1000*3660)        
        }
    }
}


client.on('ready', () => main())