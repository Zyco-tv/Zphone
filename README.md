### [Downloads page](https://github.com/N3MTV/gcphone/releases)

<h2 align="center">Téléphone pour FiveM</h2>
<h2 align="center">Meilleur que pichot 🖕 </h2>

![Image of gcphone1](https://image.noelshack.com/fichiers/2020/30/5/1595616064-unknown.png)

## Fonctionnalités 
  - Liste des contacts
  - Envoi de sms
  - Appel vocal
  - Appel anonyme
  - Application Banque
  - Application Tchat anonyme
  - Application Bourse
  - Coque / Fond ecran customisable
  - . . .


## Configuration


### Modifier le fichier /html/static/config/config.json
```json
{
  "//": "Nom du reseau situé dans la barre du téléphone",
  "reseau": "Gannon",
  
  "//": "Couleur de base du téléphone",
  "themeColor": "#303f9f",

  "//": "Liste des couleurs pour les conctacts",
  "colors": [
    "#EF5350",
    "#EC407A",
    "#AB47BC",
    "#7E57C2",
    "#5C6BC0",
    "#42A5F5",
    "#29B6F6",
    "#26C6DA",
    "#26A69A",
    "#66BB6A",
    "#9CCC65",
    "#D4E157",
    "#FFCA28",
    "#FFA726",
    "#FF7043",
    "#8D6E63",
    "#78909C"
  ],

  "//": "Si false, Ajoute un '-' dans le numero (###-####)",
  "useFormatNumberFrance": false,

  "//": "useWebRTCVocal: false => Appels avec channels de GTA",
  "//": "useWebRTCVocal: true  => Appels avec WebRTC",
  "useWebRTCVocal": true,

  "//": "Configuration des serveurs TURN à utilisé",
  "RTCConfig": {
    "iceServers": [{
      "urls": ["turn:gannon.ovh"],
      "username": "jojo",
      "credential": "pass"
    }]
  },


  "//": "Liste des fonds d'ecran disponibles, location => /html/static/img/background",
  "background" : {
    "Calvin & Hobbes": "back001.jpg",
    "Destiny": "back002.jpg",
    "Stormtrooper": "back003.jpg",
    "Custom URL": "URL"
  },
  "//": "Fond d'ecran par default",
  "background_default": {
    "label": "Calvin & Hobbes",
    "value": "back001.jpg"
  },

  "//": "Liste des coque disponible, location => /html/static/img/coque",
  "coque": {
    "Sansumg S8": "s8.png",
    "Iphone X": "iphonex.png",
    "Brick Base": "base.png",
    "Transparent": "transparent.png"
  },
  "//": "Coque par default",
  "coque_default": {
    "label": "Sansumg S8",
    "value": "s8.png"
  },

  "//": "Configuration des appels service (Favorie)",
  "serviceCall": [
    {

      "//": "Nom de l'item",
      "display": "Police",

      "//": "Optionnel: Couleur de puce",
      "backgroundColor": "red",

      "//": "Optionnel: Image de la puce",
      "icon": "/html/static/img/icons_app/bank.png",

      "//": "Liste des actions disponible",
      "subMenu": [
        {
          "//": "Titre de l'action",
          "title": "Envoyer un message",

          "//": "Nom de l'event trigger à l'utilisation",
          "eventName": "esx_addons_gcphone:call",

          "//": "Optionnel: Parametre 'data' envoyé avec l'event",
          "type": {
            "number": "police"
          }
        },
        {
          "title": "Appeler le standard",
          "eventName": "gcphone:autoCallNumber",
          "type": {
            "number": "911"
          }
        }
      ]
    },
    {
      "display": "Ambulance",
      "backgroundColor": "red",
      "subMenu": [
        {
          "title": "Envoyer un message",
          "eventName": "esx_addons_gcphone:call",
          "type": {
            "number": "ambulance"
          }
        }
      ]
    }
  ],
  
  "//": "Ajouter des contact par defaut",
  "defaultContacts": [
    { "number": "ambulance" , "display": "AABBUULLAANNCCEE", "icon": "/html/static/img/icons_app/bank.png" },
    { "number": "police" , "display": "Police", "backgroundColor": "blue", "letter": "J" }
  ],

  "//": "Configuration des applications",
  "apps": [
    {
      "//": "Nom de l'application",
      "name": "Téléphone",

      "//": "Icons de l'application",
      "icons": "/html/static/img/icons_app/call.png",

      "//": "Route de l'application, NE PAS MODIFIER",
      "routeName": "appels",

      "//": "Si true, l'application serra disponible sur la home page",
      "inHomePage": true,

      "//": "Si false, l'application n'est pas visible",
      "enabled": true
    },
    {
      "name": "Messages",
      "icons": "/html/static/img/icons_app/sms.png",
      "routeName": "messages",
      "inHomePage": true,

      "//": "Référence au store, pour affiche un puce sous l'icone de l'app",
      "puceRef": "nbMessagesUnread",
    },
    {
      "name": "Contacts",
      "icons": "/html/static/img/icons_app/contacts.png",
      "routeName": "contacts",
      "inHomePage": true
    },
    {
      "name": "Paramètres",
      "icons": "/html/static/img/icons_app/settings.png",
      "routeName": "parametre",
      "inHomePage": true
    },
    {
      "name": "Bank",
      "icons": "/html/static/img/icons_app/bank.png",
      "routeName": "bank",
      "inHomePage": false
    },
    {
      "name": "Bourse",
      "icons": "/html/static/img/icons_app/bourse.png",
      "routeName": "bourse",
      "enabled": true
    },
    {
      "name": "Photo",
      "icons": "/html/static/img/icons_app/photo.png",
      "routeName": "photo"
    },
    {
      "name": "Dark Chat",
      "icons": "/html/static/img/icons_app/tchat.png",
      "routeName": "tchat"
    }
  ],
  
  "//": "Configuration des langues du telephone",
  "language": {
    "fr_FR": {
      "NAME": "Français",
      "KEY": "VALUE"
    },
    "en_US": {
      "NAME": "English",
      "//": "..."
    },
    "//": "Autre Langue"
  }
}

```
*N'oubliez pas de rajouter les nouveaux fichiers dans le __ressource.lua*


* Vous pouvez modifier les sons dans \html\static\sound
* Les coques doivent être au format 1000x500 px, La zone ecran est centrée de taille 800*400
* Les applications Banque & Bourse sont à configurer selon vos scripts

### Les postes fixes sont configurables dans gcphone/config.lua
```LUA
--[[
  Faites attention à ne pas utiliser un numéro qui entre en conflit avec un joueur
--]]
FixePhone = {
  -- Poste de police
  ['911'] = { name =  "Central Police", coords = { x = 441.2, y = -979.7, z = 30.58 } },
  
  -- Cabine proche du poste de police
  ['008-0001'] = { name = "Cabine Telephonique", coords = { x = 372.25, y = -965.75, z = 28.58 } },
}
```


## A propos de esx_addons_gcphone
Permet de faire la liaison entre le téléphone et les métiers esx.

Veuillez mettre esx_addons_gcphone & gcphone avant les jobs.
Exemple :
```yml
  # ...

  start mysql-async
  start essentialmode
  start esplugin_mysql
  start es_extended

  start esx_addons_gcphone
  start gcphone

  start esx_mecanojob
  start esx_job2
  start esx_job3
  # ...
```

## License
[GNU v3](https://opensource.org/licenses/gpl-3.0.html)

Jonathan (Gannon) D
