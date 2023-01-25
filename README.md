<h1 align="center">
  📨 Automatizer 📨
</h1>

---



## <a id="setup"></a> 📁 » Mise En Place


⚠️**ATTENTION⚠️: C'EST A VOS RISQUES ET PERILS CAR LES SELFBOT VONT A L'ENCONTRE DES [DISCORD ToS](https://discord.com/terms)** (Je ne suis pas responsable de vos actes)


1. Installez [Nodejs](https://nodejs.org/).
2. Installez les modules `discord.js-selfbot-v13`, `gradient-string`, `node-cron` et `fs` avec la commande `npm install [nom du module]`.
3. Ouvrez [config.js](https://github.com/ShadowMikado/Discord-Automatizer-JS/blob/main/config.js) avec Notepad ou un autre éditeur.
4. Double Clickez sur [start.bat](https://github.com/ShadowMikado/Discord-Automatizer-JS/blob/main/start.bat).

# <a id="config"></a>⚙ » Config

Si vous voulez changer la config, ouvrez [config.js](https://github.com/ShadowMikado/Discord-Automatizer-JS/blob/main/config.js). Vous pouvez modifier différentes choses comme ci-dessous:

```js
module.exports = {
    token: "NzgKMjA0ODUuOTEwOTgxMTYa.blablablablabla" // Token here
}
```

Pour copier votre Token vous devez ouvrir la console sur discord, à l'aide des touches `Ctrl+Maj+i` et coller ce script:

```javascript
window.webpackChunkdiscord_app.push([[Math.random()], {}, (req) => {for (const m of Object.keys(req.c).map((x) => req.c[x].exports).filter((x) => x))
    {
       if (m.default && m.default.getToken !== undefined) {
           console.log(m.default.getToken())
           copy(m.default.getToken())
           console.log(`%cYou token has been copied in the clipboard!`, "font-size: 20px")
       }
       if (m.getToken !== undefined) {
           console.log(m.default.getToken())
           copy(m.default.getToken())
           console.log(`%cYou token has been copied in the clipboard!`, "font-size: 20px")
        }  
       }
    }
]);
```

