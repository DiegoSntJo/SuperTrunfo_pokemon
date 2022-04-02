var cartas = [
  (carta1 = {
    nome: "Bulbasaur",
    tipo: "grass",
    tipo2: "poison",
    imagem:
      "https://64.media.tumblr.com/ef5b19370463829cbbb8acd90a6a5388/tumblr_pbcxmdDP1g1vw1ceco1_1280.png",
    atributos: {
      Attack: 49,
      SpAttack: 65,
      Defense: 49,
      SpDefense: 65,
      Speed: 45
    }
  }),
  (carta2 = {
    nome: "Ivysaur",
    tipo: "grass",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDE4JQXEAMGkTp?format=png&name=240x240",
    atributos: {
      Attack: 62,
      SpAttack: 80,
      Defense: 63,
      SpDefense: 80,
      Speed: 60
    }
  }),
  (carta3 = {
    nome: "Venusaur",
    tipo: "grass",
    tipo2: "poison",
    imagem:
      "https://bleedingcool.com/wp-content/uploads/2020/07/Base-Set-Venusaur-art-ptcg-1200x900.jpg",
    atributos: {
      Attack: 82,
      SpAttack: 100,
      Defense: 83,
      SpDefense: 100,
      Speed: 80
    }
  }),
  (carta4 = {
    nome: "Charmander",
    tipo: "fire",
    tipo2: "",
    imagem:
      "https://i.pinimg.com/originals/a7/38/2e/a7382e4d941b07f4300bf52b950eb3a9.jpg",
    atributos: {
      Attack: 52,
      SpAttack: 60,
      Defense: 43,
      SpDefense: 50,
      Speed: 65
    }
  }),
  (carta5 = {
    nome: "Charmeleon",
    tipo: "fire",
    tipo2: "",
    imagem:
      "https://i.pinimg.com/originals/f7/b6/1d/f7b61d4a8a33f5d403ee1100f953cc1f.jpg",
    atributos: {
      Attack: 64,
      SpAttack: 80,
      Defense: 58,
      SpDefense: 65,
      Speed: 80
    }
  }),
  (carta6 = {
    nome: "Charizard",
    tipo: "fire",
    tipo2: "flying",
    imagem:
      "https://bleedingcool.com/wp-content/uploads/2020/05/Charizard-Base-SEt-art-pkmn-1200x900.jpg",
    atributos: {
      Attack: 84,
      SpAttack: 109,
      Defense: 78,
      SpDefense: 85,
      Speed: 100
    }
  }),
  (carta7 = {
    nome: "Squirtle",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://64.media.tumblr.com/dc1ae3364caaceadede155ae9f2785d8/tumblr_pbendgXKms1vw1ceco1_1280.png",
    atributos: {
      Attack: 48,
      SpAttack: 50,
      Defense: 65,
      SpDefense: 64,
      Speed: 43
    }
  }),
  (carta8 = {
    nome: "Wartortle",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDE4JXXoAoBAgR?format=png&name=360x360",
    atributos: {
      Attack: 63,
      SpAttack: 65,
      Defense: 80,
      SpDefense: 80,
      Speed: 58
    }
  }),
  (carta9 = {
    nome: "Blastoise",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDE4JoWUAcHoz0?format=png&name=small",
    atributos: {
      Attack: 83,
      SpAttack: 85,
      Defense: 100,
      SpDefense: 105,
      Speed: 78
    }
  }),
  (carta10 = {
    nome: "Caterpie",
    tipo: "bug",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDE4JQWUAgKGuX?format=png&name=240x240",
    atributos: {
      Attack: 30,
      SpAttack: 20,
      Defense: 35,
      SpDefense: 20,
      Speed: 45
    }
  }),
  (carta11 = {
    nome: "Metapod",
    tipo: "bug",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDFd9HXIAAe8wU?format=png&name=360x360",
    atributos: {
      Attack: 20,
      SpAttack: 25,
      Defense: 55,
      SpDefense: 25,
      Speed: 30
    }
  }),
  (carta12 = {
    nome: "Butterfree",
    tipo: "bug",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDFd9FXMAEc6Ym?format=png&name=360x360",
    atributos: {
      Attack: 45,
      SpAttack: 90,
      Defense: 50,
      SpDefense: 80,
      Speed: 70
    }
  }),
  (carta13 = {
    nome: "Weedle",
    tipo: "bug",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDFd9XXsAoVyF7?format=png&name=360x360",
    atributos: {
      Attack: 35,
      SpAttack: 20,
      Defense: 30,
      SpDefense: 20,
      Speed: 50
    }
  }),
  (carta14 = {
    nome: "Kakuna",
    tipo: "bug",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDFd9ZWYAo5Q_z?format=png&name=900x900",
    atributos: {
      Attack: 25,
      SpAttack: 25,
      Defense: 50,
      SpDefense: 25,
      Speed: 35
    }
  }),
  (carta15 = {
    nome: "Beedrill",
    tipo: "bug",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDF1UpXwAk8-Yx?format=png&name=small",
    atributos: {
      Attack: 90,
      SpAttack: 45,
      Defense: 40,
      SpDefense: 80,
      Speed: 75
    }
  }),
  (carta16 = {
    nome: "Pidgey",
    tipo: "normal",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDF1UrWQAIszRg?format=png&name=900x900",
    atributos: {
      Attack: 45,
      SpAttack: 35,
      Defense: 40,
      SpDefense: 35,
      Speed: 56
    }
  }),
  (carta17 = {
    nome: "Pidgeotto",
    tipo: "normal",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDF1UkXwAUG1ys?format=png&name=360x360",
    atributos: {
      Attack: 60,
      SpAttack: 50,
      Defense: 55,
      SpDefense: 50,
      Speed: 71
    }
  }),
  (carta18 = {
    nome: "Pidgeot",
    tipo: "normal",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDF1UsX0Acxx1o?format=png&name=small",
    atributos: {
      Attack: 80,
      SpAttack: 70,
      Defense: 75,
      SpDefense: 70,
      Speed: 101
    }
  }),
  (carta19 = {
    nome: "Rattata",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDF5D8XEAQB3Rq?format=png&name=900x900",
    atributos: {
      Attack: 56,
      SpAttack: 25,
      Defense: 35,
      SpDefense: 35,
      Speed: 72
    }
  }),
  (carta20 = {
    nome: "Raticate",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDF5EIXIAYJYAg?format=png&name=900x900",
    atributos: {
      Attack: 81,
      SpAttack: 50,
      Defense: 60,
      SpDefense: 70,
      Speed: 97
    }
  }),
  (carta21 = {
    nome: "Spearow",
    tipo: "normal",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDF5EKXIAk0Uia?format=png&name=900x900",
    atributos: {
      Attack: 60,
      SpAttack: 31,
      Defense: 30,
      SpDefense: 31,
      Speed: 70
    }
  }),
  (carta22 = {
    nome: "Fearow",
    tipo: "normal",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDF5D3XoAcXrSj?format=png&name=900x900",
    atributos: {
      Attack: 90,
      SpAttack: 61,
      Defense: 65,
      SpDefense: 61,
      Speed: 100
    }
  }),
  (carta23 = {
    nome: "Ekans",
    tipo: "poison",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDF9JbWYAEI-NF?format=png&name=900x900",
    atributos: {
      Attack: 60,
      SpAttack: 40,
      Defense: 44,
      SpDefense: 54,
      Speed: 55
    }
  }),
  (carta24 = {
    nome: "Arbok",
    tipo: "poison",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDF9JVXMAA7fft?format=png&name=900x900",
    atributos: {
      Attack: 95,
      SpAttack: 65,
      Defense: 69,
      SpDefense: 79,
      Speed: 80
    }
  }),
  (carta25 = {
    nome: "Pikachu",
    tipo: "electric",
    tipo2: "",
    imagem:
      "https://sportshub.cbsistatic.com/i/2021/08/09/5a5471ca-0865-47ab-8f46-c74173d2b540/base-set-pikachu-1275663.jpg",
    atributos: {
      Attack: 55,
      SpAttack: 50,
      Defense: 40,
      SpDefense: 50,
      Speed: 90
    }
  }),
  (carta26 = {
    nome: "Raichu",
    tipo: "electric",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDF9JTXIAoAH4M?format=png&name=small",
    atributos: {
      Attack: 90,
      SpAttack: 90,
      Defense: 55,
      SpDefense: 80,
      Speed: 110
    }
  }),
  (carta27 = {
    nome: "Sandshrew",
    tipo: "ground",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDF9JaWUAYixbF?format=png&name=900x900",
    atributos: {
      Attack: 75,
      SpAttack: 20,
      Defense: 85,
      SpDefense: 30,
      Speed: 40
    }
  }),
  (carta28 = {
    nome: "Sandslash",
    tipo: "ground",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGB75WQAAD4OU?format=png&name=small",
    atributos: {
      Attack: 100,
      SpAttack: 45,
      Defense: 110,
      SpDefense: 55,
      Speed: 65
    }
  }),
  (carta29 = {
    nome: "Nidoran♀",
    tipo: "poison",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGB7oWQAEmnqB?format=png&name=small",
    atributos: {
      Attack: 47,
      SpAttack: 40,
      Defense: 52,
      SpDefense: 40,
      Speed: 41
    }
  }),
  (carta30 = {
    nome: "Nidorina",
    tipo: "poison",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGB7nXoAoa05w?format=png&name=small",
    atributos: {
      Attack: 62,
      SpAttack: 55,
      Defense: 67,
      SpDefense: 55,
      Speed: 56
    }
  }),
  (carta31 = {
    nome: "Nidoqueen",
    tipo: "poison",
    tipo2: "ground",
    imagem:
      "https://pbs.twimg.com/media/FPDGB7_XwAglx3Z?format=png&name=900x900",
    atributos: {
      Attack: 92,
      SpAttack: 75,
      Defense: 87,
      SpDefense: 85,
      Speed: 76
    }
  }),
  (carta32 = {
    nome: "Nidoran♂",
    tipo: "poison",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGGNHXsAUqTLU?format=png&name=small",
    atributos: {
      Attack: 57,
      SpAttack: 40,
      Defense: 40,
      SpDefense: 40,
      Speed: 50
    }
  }),
  (carta33 = {
    nome: "Nidorino",
    tipo: "poison",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGGNCXMAQSkWb?format=png&name=360x360",
    atributos: {
      Attack: 72,
      SpAttack: 55,
      Defense: 57,
      SpDefense: 55,
      Speed: 65
    }
  }),
  (carta34 = {
    nome: "Nidoking",
    tipo: "poison",
    tipo2: "ground",
    imagem:
      "https://pbs.twimg.com/media/FPDGGNCXEAAMpT0?format=png&name=900x900",
    atributos: {
      Attack: 102,
      SpAttack: 85,
      Defense: 77,
      SpDefense: 75,
      Speed: 85
    }
  }),
  (carta35 = {
    nome: "Clefairy",
    tipo: "fairy",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGGNVXEAENo1g?format=png&name=small",
    atributos: {
      Attack: 45,
      SpAttack: 60,
      Defense: 48,
      SpDefense: 65,
      Speed: 35
    }
  }),
  (carta36 = {
    nome: "Clefable",
    tipo: "fairy",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGJURXEAUA5XT?format=png&name=900x900",
    atributos: {
      Attack: 70,
      SpAttack: 95,
      Defense: 73,
      SpDefense: 90,
      Speed: 60
    }
  }),
  (carta37 = {
    nome: "Vulpix",
    tipo: "fire",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGJT_X0AsGHzu?format=jpg&name=medium",
    atributos: {
      Attack: 41,
      SpAttack: 50,
      Defense: 40,
      SpDefense: 65,
      Speed: 65
    }
  }),
  (carta38 = {
    nome: "Ninetales",
    tipo: "fire",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGJUIX0AsheNF?format=png&name=small",
    atributos: {
      Attack: 76,
      SpAttack: 81,
      Defense: 75,
      SpDefense: 100,
      Speed: 100
    }
  }),
  (carta39 = {
    nome: "Jigglypuff",
    tipo: "normal",
    tipo2: "fairy",
    imagem: "https://pbs.twimg.com/media/FPDGJUEXsAgw7nu?format=png&name=small",
    atributos: {
      Attack: 45,
      SpAttack: 45,
      Defense: 20,
      SpDefense: 25,
      Speed: 20
    }
  }),
  (carta40 = {
    nome: "Wigglytuff",
    tipo: "normal",
    tipo2: "fairy",
    imagem: "https://pbs.twimg.com/media/FPDGNeAWYAETTEE?format=png&name=small",
    atributos: {
      Attack: 70,
      SpAttack: 85,
      Defense: 45,
      SpDefense: 50,
      Speed: 45
    }
  }),
  (carta41 = {
    nome: "Zubat",
    tipo: "poison",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDGNdtXIAY5l6o?format=png&name=900x900",
    atributos: {
      Attack: 45,
      SpAttack: 30,
      Defense: 35,
      SpDefense: 40,
      Speed: 55
    }
  }),
  (carta42 = {
    nome: "Golbat",
    tipo: "poison",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDGNeDXIAAetF5?format=png&name=small",
    atributos: {
      Attack: 80,
      SpAttack: 65,
      Defense: 70,
      SpDefense: 75,
      Speed: 90
    }
  }),
  (carta43 = {
    nome: "Oddish",
    tipo: "grass",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDGNdzWQAMmV9R?format=png&name=small",
    atributos: {
      Attack: 50,
      SpAttack: 75,
      Defense: 55,
      SpDefense: 65,
      Speed: 30
    }
  }),
  (carta44 = {
    nome: "Gloom",
    tipo: "grass",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDGQ9xXMAAJ7Ww?format=png&name=900x900",
    atributos: {
      Attack: 65,
      SpAttack: 85,
      Defense: 70,
      SpDefense: 75,
      Speed: 40
    }
  }),
  (carta45 = {
    nome: "Vileplume",
    tipo: "grass",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDGQ-AXwAUJUSi?format=png&name=small",
    atributos: {
      Attack: 80,
      SpAttack: 110,
      Defense: 85,
      SpDefense: 90,
      Speed: 50
    }
  }),
  (carta46 = {
    nome: "Paras",
    tipo: "bug",
    tipo2: "grass",
    imagem:
      "https://pbs.twimg.com/media/FPDGQ9_XMAcCh82?format=png&name=900x900",
    atributos: {
      Attack: 70,
      SpAttack: 45,
      Defense: 55,
      SpDefense: 55,
      Speed: 25
    }
  }),
  (carta47 = {
    nome: "Parasect",
    tipo: "bug",
    tipo2: "grass",
    imagem:
      "https://pbs.twimg.com/media/FPDGQ-DXIAgBSLL?format=png&name=900x900",
    atributos: {
      Attack: 95,
      SpAttack: 60,
      Defense: 80,
      SpDefense: 80,
      Speed: 30
    }
  }),
  (carta48 = {
    nome: "Venonat",
    tipo: "bug",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDGVriWYAUdMvo?format=png&name=900x900",
    atributos: {
      Attack: 55,
      SpAttack: 40,
      Defense: 50,
      SpDefense: 55,
      Speed: 45
    }
  }),
  (carta49 = {
    nome: "Venomoth",
    tipo: "bug",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDGVrOXMAsTvT6?format=png&name=900x900",
    atributos: {
      Attack: 65,
      SpAttack: 90,
      Defense: 60,
      SpDefense: 75,
      Speed: 90
    }
  }),
  (carta50 = {
    nome: "Diglett",
    tipo: "ground",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGVrpWUAAXTfL?format=png&name=small",
    atributos: {
      Attack: 55,
      SpAttack: 35,
      Defense: 25,
      SpDefense: 45,
      Speed: 95
    }
  }),
  (carta51 = {
    nome: "Dugtrio",
    tipo: "ground",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGVrmWYAYInII?format=png&name=900x900",
    atributos: {
      Attack: 100,
      SpAttack: 50,
      Defense: 50,
      SpDefense: 70,
      Speed: 120
    }
  }),
  (carta52 = {
    nome: "Meowth",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGapjWQAEKSQQ?format=png&name=900x900",
    atributos: {
      Attack: 45,
      SpAttack: 40,
      Defense: 35,
      SpDefense: 40,
      Speed: 90
    }
  }),
  (carta53 = {
    nome: "Persian",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGapbXsAMTDFb?format=png&name=900x900",
    atributos: {
      Attack: 70,
      SpAttack: 65,
      Defense: 60,
      SpDefense: 65,
      Speed: 115
    }
  }),
  (carta54 = {
    nome: "Psyduck",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGapnWQAM02OU?format=png&name=small",
    atributos: {
      Attack: 52,
      SpAttack: 65,
      Defense: 48,
      SpDefense: 50,
      Speed: 55
    }
  }),
  (carta55 = {
    nome: "Golduck",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGapiXMAEH_Tp?format=png&name=900x900",
    atributos: {
      Attack: 82,
      SpAttack: 95,
      Defense: 78,
      SpDefense: 80,
      Speed: 85
    }
  }),
  (carta56 = {
    nome: "Mankey",
    tipo: "fighting",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGgXMWUAAGe06?format=png&name=small",
    atributos: {
      Attack: 80,
      SpAttack: 35,
      Defense: 35,
      SpDefense: 45,
      Speed: 70
    }
  }),
  (carta57 = {
    nome: "Primeape",
    tipo: "fighting",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGgW5XEAQBeY4?format=png&name=900x900",
    atributos: {
      Attack: 105,
      SpAttack: 60,
      Defense: 60,
      SpDefense: 70,
      Speed: 95
    }
  }),
  (carta58 = {
    nome: "Growlithe",
    tipo: "fire",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGgW5XEAoOnQN?format=png&name=small",
    atributos: {
      Attack: 70,
      SpAttack: 70,
      Defense: 45,
      SpDefense: 50,
      Speed: 60
    }
  }),
  (carta59 = {
    nome: "Arcanine",
    tipo: "fire",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGgW_WYA0THS7?format=png&name=small",
    atributos: {
      Attack: 110,
      SpAttack: 100,
      Defense: 80,
      SpDefense: 80,
      Speed: 95
    }
  }),
  (carta60 = {
    nome: "Poliwag",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGjyAWUAU1tfG?format=png&name=small",
    atributos: {
      Attack: 50,
      SpAttack: 40,
      Defense: 40,
      SpDefense: 40,
      Speed: 90
    }
  }),
  (carta61 = {
    nome: "Poliwhirl",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGjyAXEAEyZcx?format=png&name=small",
    atributos: {
      Attack: 65,
      SpAttack: 50,
      Defense: 65,
      SpDefense: 50,
      Speed: 90
    }
  }),
  (carta62 = {
    nome: "Poliwrath",
    tipo: "water",
    tipo2: "fighting",
    imagem: "https://pbs.twimg.com/media/FPDGjyEXMAUpV-b?format=png&name=small",
    atributos: {
      Attack: 95,
      SpAttack: 70,
      Defense: 95,
      SpDefense: 90,
      Speed: 70
    }
  }),
  (carta63 = {
    nome: "Abra",
    tipo: "psychic",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDGjyBXwAQ87t_?format=png&name=900x900",
    atributos: {
      Attack: 20,
      SpAttack: 105,
      Defense: 15,
      SpDefense: 55,
      Speed: 90
    }
  }),
  (carta64 = {
    nome: "Kadabra",
    tipo: "psychic",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGoFQX0AI4sts?format=png&name=small",
    atributos: {
      Attack: 35,
      SpAttack: 120,
      Defense: 30,
      SpDefense: 70,
      Speed: 105
    }
  }),
  (carta65 = {
    nome: "Alakazam",
    tipo: "psychic",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGoFOWQAAqEzP?format=png&name=small",
    atributos: {
      Attack: 50,
      SpAttack: 135,
      Defense: 45,
      SpDefense: 95,
      Speed: 120
    }
  }),
  (carta66 = {
    nome: "Machop",
    tipo: "fighting",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGoFKXsAsUDDq?format=png&name=small",
    atributos: {
      Attack: 80,
      SpAttack: 35,
      Defense: 50,
      SpDefense: 35,
      Speed: 35
    }
  }),
  (carta67 = {
    nome: "Machoke",
    tipo: "fighting",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGoE6XIAYfnO2?format=png&name=small",
    atributos: {
      Attack: 100,
      SpAttack: 50,
      Defense: 70,
      SpDefense: 60,
      Speed: 45
    }
  }),
  (carta68 = {
    nome: "Machamp",
    tipo: "fighting",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDGrztWUAEcJvS?format=png&name=small",
    atributos: {
      Attack: 130,
      SpAttack: 65,
      Defense: 80,
      SpDefense: 85,
      Speed: 55
    }
  }),
  (carta69 = {
    nome: "Bellsprout",
    tipo: "grass",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDGrztXsAkbxD7?format=png&name=small",
    atributos: {
      Attack: 75,
      SpAttack: 70,
      Defense: 35,
      SpDefense: 30,
      Speed: 40
    }
  }),
  (carta70 = {
    nome: "Weepinbell",
    tipo: "grass",
    tipo2: "poison",
    imagem:
      "https://pbs.twimg.com/media/FPDGrzaXIAYrft5?format=png&name=900x900",
    atributos: {
      Attack: 90,
      SpAttack: 85,
      Defense: 50,
      SpDefense: 45,
      Speed: 55
    }
  }),
  (carta71 = {
    nome: "Victreebel",
    tipo: "grass",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDGrzdWUBAQspV?format=png&name=small",
    atributos: {
      Attack: 105,
      SpAttack: 100,
      Defense: 65,
      SpDefense: 70,
      Speed: 70
    }
  }),
  (carta72 = {
    nome: "Tentacool",
    tipo: "water",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDGvdqXsAMrcHN?format=png&name=small",
    atributos: {
      Attack: 40,
      SpAttack: 50,
      Defense: 35,
      SpDefense: 100,
      Speed: 70
    }
  }),
  (carta73 = {
    nome: "Tentacruel",
    tipo: "water",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDGvd8XwAE__Js?format=png&name=small",
    atributos: {
      Attack: 70,
      SpAttack: 80,
      Defense: 65,
      SpDefense: 120,
      Speed: 100
    }
  }),
  (carta74 = {
    nome: "Geodude",
    tipo: "rock",
    tipo2: "ground",
    imagem:
      "https://pbs.twimg.com/media/FPDGveAXoAIqtDc?format=png&name=900x900",
    atributos: {
      Attack: 80,
      SpAttack: 30,
      Defense: 100,
      SpDefense: 30,
      Speed: 20
    }
  }),
  (carta75 = {
    nome: "Graveler",
    tipo: "rock",
    tipo2: "ground",
    imagem:
      "https://pbs.twimg.com/media/FPDGvdmXMAA9fti?format=png&name=900x900",
    atributos: {
      Attack: 95,
      SpAttack: 45,
      Defense: 115,
      SpDefense: 45,
      Speed: 35
    }
  }),
  (carta76 = {
    nome: "Golem",
    tipo: "rock",
    tipo2: "ground",
    imagem: "https://pbs.twimg.com/media/FPDG1FSXMAI4CXY?format=png&name=small",
    atributos: {
      Attack: 120,
      SpAttack: 55,
      Defense: 130,
      SpDefense: 65,
      Speed: 45
    }
  }),
  (carta77 = {
    nome: "Ponyta",
    tipo: "fire",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDG1FjWYAsecA1?format=png&name=small",
    atributos: {
      Attack: 85,
      SpAttack: 65,
      Defense: 55,
      SpDefense: 65,
      Speed: 90
    }
  }),
  (carta78 = {
    nome: "Rapidash",
    tipo: "fire",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDG1FZXEAorqBM?format=png&name=900x900",
    atributos: {
      Attack: 100,
      SpAttack: 80,
      Defense: 70,
      SpDefense: 80,
      Speed: 105
    }
  }),
  (carta79 = {
    nome: "Slowpoke",
    tipo: "water",
    tipo2: "psychic",
    imagem:
      "https://pbs.twimg.com/media/FPDG1FRXEAMJINT?format=png&name=900x900",
    atributos: {
      Attack: 65,
      SpAttack: 40,
      Defense: 65,
      SpDefense: 40,
      Speed: 15
    }
  }),
  (carta80 = {
    nome: "Slowbro",
    tipo: "water",
    tipo2: "psychic",
    imagem:
      "https://pbs.twimg.com/media/FPDG570XwAomsHq?format=png&name=900x900",
    atributos: {
      Attack: 75,
      SpAttack: 100,
      Defense: 110,
      SpDefense: 80,
      Speed: 30
    }
  }),
  (carta81 = {
    nome: "Magnemite",
    tipo: "electric",
    tipo2: "steel",
    imagem: "https://pbs.twimg.com/media/FPDG57hWYAE_iTF?format=png&name=small",
    atributos: {
      Attack: 35,
      SpAttack: 95,
      Defense: 70,
      SpDefense: 55,
      Speed: 45
    }
  }),
  (carta82 = {
    nome: "Magneton",
    tipo: "electric",
    tipo2: "steel",
    imagem:
      "https://pbs.twimg.com/media/FPDG57hXEAAIb-E?format=png&name=900x900",
    atributos: {
      Attack: 60,
      SpAttack: 120,
      Defense: 95,
      SpDefense: 70,
      Speed: 70
    }
  }),
  (carta83 = {
    nome: "Farfetch'd",
    tipo: "normal",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDG573XMA0qIIP?format=png&name=360x360",
    atributos: {
      Attack: 90,
      SpAttack: 58,
      Defense: 55,
      SpDefense: 62,
      Speed: 60
    }
  }),
  (carta84 = {
    nome: "Doduo",
    tipo: "normal",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDG-R3XMAI3QtO?format=png&name=small",
    atributos: {
      Attack: 85,
      SpAttack: 35,
      Defense: 45,
      SpDefense: 35,
      Speed: 75
    }
  }),
  (carta85 = {
    nome: "Dodrio",
    tipo: "normal",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDG-RmX0AwHPfZ?format=png&name=900x900",
    atributos: {
      Attack: 110,
      SpAttack: 60,
      Defense: 70,
      SpDefense: 60,
      Speed: 110
    }
  }),
  (carta86 = {
    nome: "Seel",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDG-R9WQAI2Pq4?format=png&name=900x900",
    atributos: {
      Attack: 45,
      SpAttack: 45,
      Defense: 55,
      SpDefense: 70,
      Speed: 45
    }
  }),
  (carta87 = {
    nome: "Dewgong",
    tipo: "water",
    tipo2: "ice",
    imagem:
      "https://pbs.twimg.com/media/FPDG-RyWUAMNwtJ?format=png&name=900x900",
    atributos: {
      Attack: 70,
      SpAttack: 70,
      Defense: 80,
      SpDefense: 95,
      Speed: 70
    }
  }),
  (carta88 = {
    nome: "Grimer",
    tipo: "poison",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHFeWXEAgtD7f?format=png&name=900x900",
    atributos: {
      Attack: 80,
      SpAttack: 40,
      Defense: 50,
      SpDefense: 50,
      Speed: 25
    }
  }),
  (carta89 = {
    nome: "Muk",
    tipo: "poison",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHFemX0AAWzQi?format=png&name=900x900",
    atributos: {
      Attack: 105,
      SpAttack: 65,
      Defense: 75,
      SpDefense: 100,
      Speed: 50
    }
  }),
  (carta90 = {
    nome: "Shellder",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHFeSWYAoiiWP?format=png&name=small",
    atributos: {
      Attack: 65,
      SpAttack: 45,
      Defense: 100,
      SpDefense: 25,
      Speed: 40
    }
  }),
  (carta91 = {
    nome: "Cloyster",
    tipo: "water",
    tipo2: "ice",
    imagem:
      "https://pbs.twimg.com/media/FPDHFeUXMAM2JN4?format=png&name=900x900",
    atributos: {
      Attack: 95,
      SpAttack: 85,
      Defense: 180,
      SpDefense: 45,
      Speed: 70
    }
  }),
  (carta92 = {
    nome: "Gastly",
    tipo: "ghost",
    tipo2: "poison",
    imagem:
      "https://preview.redd.it/0waw7b6j50381.png?width=640&crop=smart&auto=webp&s=29a876c4dacc189c16172f35bb4194aa85c0cebf",
    atributos: {
      Attack: 35,
      SpAttack: 100,
      Defense: 30,
      SpDefense: 35,
      Speed: 80
    }
  }),
  (carta93 = {
    nome: "Haunter",
    tipo: "ghost",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDHJl7WYAMftda?format=png&name=small",
    atributos: {
      Attack: 50,
      SpAttack: 115,
      Defense: 45,
      SpDefense: 55,
      Speed: 95
    }
  }),
  (carta94 = {
    nome: "Gengar",
    tipo: "ghost",
    tipo2: "poison",
    imagem: "https://pbs.twimg.com/media/FPDHJmJXwAoNRFN?format=png&name=small",
    atributos: {
      Attack: 65,
      SpAttack: 130,
      Defense: 60,
      SpDefense: 75,
      Speed: 110
    }
  }),
  (carta95 = {
    nome: "Onix",
    tipo: "rock",
    tipo2: "ground",
    imagem: "https://pbs.twimg.com/media/FPDHJl6WUAY_SHM?format=png&name=small",
    atributos: {
      Attack: 45,
      SpAttack: 30,
      Defense: 160,
      SpDefense: 45,
      Speed: 70
    }
  }),
  (carta96 = {
    nome: "Drowzee",
    tipo: "psychic",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHJmJXEAsBzVR?format=png&name=small",
    atributos: {
      Attack: 48,
      SpAttack: 43,
      Defense: 45,
      SpDefense: 90,
      Speed: 42
    }
  }),
  (carta97 = {
    nome: "Hypno",
    tipo: "psychic",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHOJMXEAYt72S?format=png&name=small",
    atributos: {
      Attack: 73,
      SpAttack: 73,
      Defense: 70,
      SpDefense: 115,
      Speed: 67
    }
  }),
  (carta98 = {
    nome: "Krabby",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHOJKXEAAslMf?format=png&name=900x900",
    atributos: {
      Attack: 105,
      SpAttack: 25,
      Defense: 90,
      SpDefense: 25,
      Speed: 50
    }
  }),
  (carta99 = {
    nome: "Kingler",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHOJdXIAYwjzS?format=png&name=900x900",
    atributos: {
      Attack: 130,
      SpAttack: 50,
      Defense: 115,
      SpDefense: 50,
      Speed: 75
    }
  }),
  (carta100 = {
    nome: "Voltorb",
    tipo: "electric",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHOJdWYAk3rh6?format=png&name=small",
    atributos: {
      Attack: 30,
      SpAttack: 55,
      Defense: 50,
      SpDefense: 55,
      Speed: 100
    }
  }),
  (carta101 = {
    nome: "Electrode",
    tipo: "electric",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHSmuXwAg9Z3J?format=png&name=small",
    atributos: {
      Attack: 50,
      SpAttack: 80,
      Defense: 70,
      SpDefense: 80,
      Speed: 150
    }
  }),
  (carta102 = {
    nome: "Exeggcute",
    tipo: "grass",
    tipo2: "psychic",
    imagem:
      "https://pbs.twimg.com/media/FPDHSmsXIAAH1ze?format=png&name=900x900",
    atributos: {
      Attack: 40,
      SpAttack: 60,
      Defense: 80,
      SpDefense: 45,
      Speed: 40
    }
  }),
  (carta103 = {
    nome: "Exeggutor",
    tipo: "grass",
    tipo2: "psychic",
    imagem:
      "https://pbs.twimg.com/media/FPDHSmuXIAYfh_D?format=png&name=900x900",
    atributos: {
      Attack: 95,
      SpAttack: 125,
      Defense: 85,
      SpDefense: 75,
      Speed: 55
    }
  }),
  (carta104 = {
    nome: "Cubone",
    tipo: "ground",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHSmtXMAAVD6Q?format=png&name=900x900",
    atributos: {
      Attack: 50,
      SpAttack: 40,
      Defense: 95,
      SpDefense: 50,
      Speed: 35
    }
  }),
  (carta105 = {
    nome: "Marowak",
    tipo: "ground",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHldjXMAcSKa5?format=png&name=900x900",
    atributos: {
      Attack: 80,
      SpAttack: 50,
      Defense: 110,
      SpDefense: 80,
      Speed: 45
    }
  }),
  (carta106 = {
    nome: "Hitmonlee",
    tipo: "fighting",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHldrXoAsNGTo?format=png&name=900x900",
    atributos: {
      Attack: 120,
      SpAttack: 35,
      Defense: 53,
      SpDefense: 110,
      Speed: 87
    }
  }),
  (carta107 = {
    nome: "Hitmonchan",
    tipo: "fighting",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHldnXwAYoc0t?format=png&name=small",
    atributos: {
      Attack: 105,
      SpAttack: 35,
      Defense: 79,
      SpDefense: 110,
      Speed: 76
    }
  }),
  (carta108 = {
    nome: "Lickitung",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHldnWQAcWTdS?format=png&name=900x900",
    atributos: {
      Attack: 55,
      SpAttack: 60,
      Defense: 75,
      SpDefense: 75,
      Speed: 30
    }
  }),
  (carta109 = {
    nome: "Koffing",
    tipo: "poison",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHpUrWUAsSjBr?format=png&name=small",
    atributos: {
      Attack: 65,
      SpAttack: 60,
      Defense: 95,
      SpDefense: 45,
      Speed: 35
    }
  }),
  (carta110 = {
    nome: "Weezing",
    tipo: "poison",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHpVBXEAMhDB6?format=png&name=900x900",
    atributos: {
      Attack: 90,
      SpAttack: 85,
      Defense: 120,
      SpDefense: 70,
      Speed: 60
    }
  }),
  (carta111 = {
    nome: "Rhyhorn",
    tipo: "ground",
    tipo2: "rock",
    imagem:
      "https://pbs.twimg.com/media/FPDHpVGWUAEd4LP?format=png&name=900x900",
    atributos: {
      Attack: 85,
      SpAttack: 30,
      Defense: 95,
      SpDefense: 30,
      Speed: 25
    }
  }),
  (carta112 = {
    nome: "Rhydon",
    tipo: "ground",
    tipo2: "rock",
    imagem:
      "https://pbs.twimg.com/media/FPDHpUvXIAEnKeF?format=png&name=900x900",
    atributos: {
      Attack: 130,
      SpAttack: 45,
      Defense: 120,
      SpDefense: 45,
      Speed: 40
    }
  }),
  (carta113 = {
    nome: "Chansey",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHuWaXsAgbAlJ?format=png&name=900x900",
    atributos: {
      Attack: 5,
      SpAttack: 35,
      Defense: 5,
      SpDefense: 105,
      Speed: 50
    }
  }),
  (carta114 = {
    nome: "Tangela",
    tipo: "grass",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHuWeX0AMdKRk?format=png&name=small",
    atributos: {
      Attack: 55,
      SpAttack: 100,
      Defense: 115,
      SpDefense: 40,
      Speed: 60
    }
  }),
  (carta115 = {
    nome: "Kangaskhan",
    tipo: "normal",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHuWTXMAAMTfD?format=png&name=small",
    atributos: {
      Attack: 95,
      SpAttack: 40,
      Defense: 80,
      SpDefense: 80,
      Speed: 90
    }
  }),
  (carta116 = {
    nome: "Horsea",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHuWLXoAEWnwW?format=png&name=900x900",
    atributos: {
      Attack: 40,
      SpAttack: 70,
      Defense: 70,
      SpDefense: 25,
      Speed: 60
    }
  }),
  (carta117 = {
    nome: "Seadra",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDHzbUWQAUYojJ?format=png&name=900x900",
    atributos: {
      Attack: 65,
      SpAttack: 95,
      Defense: 95,
      SpDefense: 45,
      Speed: 85
    }
  }),
  (carta118 = {
    nome: "Goldeen",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHzbFXMAEWFfm?format=png&name=small",
    atributos: {
      Attack: 67,
      SpAttack: 35,
      Defense: 60,
      SpDefense: 50,
      Speed: 63
    }
  }),
  (carta119 = {
    nome: "Seaking",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHzbTXEAUlI7a?format=png&name=small",
    atributos: {
      Attack: 92,
      SpAttack: 65,
      Defense: 65,
      SpDefense: 80,
      Speed: 68
    }
  }),
  (carta120 = {
    nome: "Staryu",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDHzbRXoAgBiy7?format=png&name=small",
    atributos: {
      Attack: 45,
      SpAttack: 70,
      Defense: 55,
      SpDefense: 55,
      Speed: 85
    }
  }),
  (carta121 = {
    nome: "Starmie",
    tipo: "water",
    tipo2: "psychic",
    imagem: "https://pbs.twimg.com/media/FPDH288XMAU1EXL?format=png&name=small",
    atributos: {
      Attack: 75,
      SpAttack: 100,
      Defense: 85,
      SpDefense: 85,
      Speed: 115
    }
  }),
  (carta122 = {
    nome: "Mr.Mime",
    tipo: "psychic",
    tipo2: "fairy",
    imagem: "https://pbs.twimg.com/media/FPDH29mXEAM_E1g?format=png&name=small",
    atributos: {
      Attack: 45,
      SpAttack: 100,
      Defense: 65,
      SpDefense: 120,
      Speed: 90
    }
  }),
  (carta123 = {
    nome: "Scyther",
    tipo: "bug",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDH29CXMAAr-uq?format=png&name=900x900",
    atributos: {
      Attack: 110,
      SpAttack: 55,
      Defense: 80,
      SpDefense: 80,
      Speed: 105
    }
  }),
  (carta124 = {
    nome: "Jynx",
    tipo: "ice",
    tipo2: "psychic",
    imagem: "https://pbs.twimg.com/media/FPDH28_XsAQcMW6?format=png&name=small",
    atributos: {
      Attack: 50,
      SpAttack: 115,
      Defense: 35,
      SpDefense: 95,
      Speed: 95
    }
  }),
  (carta125 = {
    nome: "Electabuzz",
    tipo: "electric",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDH6kQXwAAaZda?format=png&name=900x900",
    atributos: {
      Attack: 83,
      SpAttack: 95,
      Defense: 57,
      SpDefense: 85,
      Speed: 105
    }
  }),
  (carta126 = {
    nome: "Magmar",
    tipo: "fire",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDH6j6XMAIkSOS?format=png&name=small",
    atributos: {
      Attack: 95,
      SpAttack: 100,
      Defense: 57,
      SpDefense: 85,
      Speed: 93
    }
  }),
  (carta127 = {
    nome: "Pinsir",
    tipo: "bug",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDH6kIXoAcWY6Z?format=png&name=900x900",
    atributos: {
      Attack: 125,
      SpAttack: 55,
      Defense: 100,
      SpDefense: 70,
      Speed: 85
    }
  }),
  (carta128 = {
    nome: "Tauros",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDH6kPXEAsohpD?format=png&name=900x900",
    atributos: {
      Attack: 100,
      SpAttack: 40,
      Defense: 95,
      SpDefense: 70,
      Speed: 110
    }
  }),
  (carta129 = {
    nome: "Magikarp",
    tipo: "water",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDH_4vXsAsLICn?format=png&name=small",
    atributos: {
      Attack: 10,
      SpAttack: 15,
      Defense: 55,
      SpDefense: 20,
      Speed: 80
    }
  }),
  (carta130 = {
    nome: "Gyarados",
    tipo: "water",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDH_4sWYAI5zED?format=png&name=small",
    atributos: {
      Attack: 125,
      SpAttack: 60,
      Defense: 79,
      SpDefense: 100,
      Speed: 81
    }
  }),
  (carta131 = {
    nome: "Lapras",
    tipo: "water",
    tipo2: "ice",
    imagem: "https://pbs.twimg.com/media/FPDH_4vWYAwIr11?format=png&name=small",
    atributos: {
      Attack: 85,
      SpAttack: 85,
      Defense: 80,
      SpDefense: 95,
      Speed: 60
    }
  }),
  (carta132 = {
    nome: "Ditto",
    tipo: "normal",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDH_4yX0AIS49z?format=png&name=small",
    atributos: {
      Attack: 48,
      SpAttack: 48,
      Defense: 48,
      SpDefense: 48,
      Speed: 48
    }
  }),
  (carta133 = {
    nome: "Eevee",
    tipo: "normal",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDIDZOXEAsMvCW?format=png&name=900x900",
    atributos: {
      Attack: 55,
      SpAttack: 45,
      Defense: 50,
      SpDefense: 65,
      Speed: 55
    }
  }),
  (carta134 = {
    nome: "Vaporeon",
    tipo: "water",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDIDZBXwAQMvtg?format=png&name=900x900",
    atributos: {
      Attack: 65,
      SpAttack: 110,
      Defense: 60,
      SpDefense: 95,
      Speed: 65
    }
  }),
  (carta135 = {
    nome: "Jolteon",
    tipo: "electric",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDIDZAXIAQABc5?format=png&name=900x900",
    atributos: {
      Attack: 65,
      SpAttack: 110,
      Defense: 60,
      SpDefense: 95,
      Speed: 130
    }
  }),
  (carta136 = {
    nome: "Flareon",
    tipo: "fire",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDIDZFWUAcmebE?format=png&name=900x900",
    atributos: {
      Attack: 130,
      SpAttack: 95,
      Defense: 60,
      SpDefense: 110,
      Speed: 65
    }
  }),
  (carta137 = {
    nome: "Porygon",
    tipo: "normal",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDIIIVXoAAFnCV?format=png&name=small",
    atributos: {
      Attack: 60,
      SpAttack: 85,
      Defense: 70,
      SpDefense: 75,
      Speed: 40
    }
  }),
  (carta138 = {
    nome: "Omanyte",
    tipo: "rock",
    tipo2: "water",
    imagem:
      "https://pbs.twimg.com/media/FPDIIIIXIAUvnsX?format=png&name=900x900",
    atributos: {
      Attack: 40,
      SpAttack: 90,
      Defense: 100,
      SpDefense: 55,
      Speed: 35
    }
  }),
  (carta139 = {
    nome: "Omastar",
    tipo: "rock",
    tipo2: "water",
    imagem:
      "https://pbs.twimg.com/media/FPDIIIHX0AAV5gr?format=png&name=900x900",
    atributos: {
      Attack: 60,
      SpAttack: 115,
      Defense: 125,
      SpDefense: 70,
      Speed: 55
    }
  }),
  (carta140 = {
    nome: "Kabuto",
    tipo: "rock",
    tipo2: "water",
    imagem: "https://pbs.twimg.com/media/FPDIIIMXwAswC4W?format=png&name=small",
    atributos: {
      Attack: 80,
      SpAttack: 55,
      Defense: 90,
      SpDefense: 45,
      Speed: 55
    }
  }),
  (carta141 = {
    nome: "Kabutops",
    tipo: "rock",
    tipo2: "water",
    imagem: "https://pbs.twimg.com/media/FPDIM_EXsAIhqQT?format=png&name=small",
    atributos: {
      Attack: 115,
      SpAttack: 65,
      Defense: 105,
      SpDefense: 70,
      Speed: 80
    }
  }),
  (carta142 = {
    nome: "Aerodactyl",
    tipo: "rock",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDIM-yWUAQyAyh?format=png&name=small",
    atributos: {
      Attack: 105,
      SpAttack: 60,
      Defense: 65,
      SpDefense: 75,
      Speed: 130
    }
  }),
  (carta143 = {
    nome: "Snorlax",
    tipo: "normal",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDIM_GWQAUk3VG?format=png&name=small",
    atributos: {
      Attack: 110,
      SpAttack: 65,
      Defense: 65,
      SpDefense: 110,
      Speed: 30
    }
  }),
  (carta144 = {
    nome: "Articuno",
    tipo: "ice",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDIM_IWYBEr8kO?format=png&name=900x900",
    atributos: {
      Attack: 85,
      SpAttack: 95,
      Defense: 100,
      SpDefense: 125,
      Speed: 85
    }
  }),
  (carta145 = {
    nome: "Zapdos",
    tipo: "electric",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDIRvoXMAEQ19t?format=png&name=small",
    atributos: {
      Attack: 90,
      SpAttack: 125,
      Defense: 85,
      SpDefense: 90,
      Speed: 100
    }
  }),
  (carta146 = {
    nome: "Moltres",
    tipo: "fire",
    tipo2: "flying",
    imagem: "https://pbs.twimg.com/media/FPDIRvpWQAQtXou?format=png&name=small",
    atributos: {
      Attack: 100,
      SpAttack: 125,
      Defense: 90,
      SpDefense: 85,
      Speed: 90
    }
  }),
  (carta147 = {
    nome: "Dratini",
    tipo: "dragon",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDIRv5XwAYdXni?format=png&name=small",
    atributos: {
      Attack: 64,
      SpAttack: 50,
      Defense: 45,
      SpDefense: 50,
      Speed: 50
    }
  }),
  (carta148 = {
    nome: "Dragonair",
    tipo: "dragon",
    tipo2: "",
    imagem: "https://pbs.twimg.com/media/FPDIRv7WYAkJ6Mc?format=png&name=small",
    atributos: {
      Attack: 84,
      SpAttack: 70,
      Defense: 65,
      SpDefense: 70,
      Speed: 70
    }
  }),
  (carta149 = {
    nome: "Dragonite",
    tipo: "dragon",
    tipo2: "flying",
    imagem:
      "https://pbs.twimg.com/media/FPDIVUUXEAYL7dn?format=png&name=900x900",
    atributos: {
      Attack: 134,
      SpAttack: 100,
      Defense: 95,
      SpDefense: 100,
      Speed: 80
    }
  }),
  (carta150 = {
    nome: "Mewtwo",
    tipo: "psychic",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDIVUkX0AQ4AXc?format=png&name=900x900",
    atributos: {
      Attack: 110,
      SpAttack: 154,
      Defense: 90,
      SpDefense: 90,
      Speed: 130
    }
  }),
  (carta151 = {
    nome: "Mew",
    tipo: "psychic",
    tipo2: "",
    imagem:
      "https://pbs.twimg.com/media/FPDIVUjXsAAr9D3?format=png&name=360x360",
    atributos: {
      Attack: 100,
      SpAttack: 100,
      Defense: 100,
      SpDefense: 100,
      Speed: 100
    }
  })
];

var cartaMaquina;
var cartaJogador;

var danoSuperEfetivo = 0;
var danoSuperEfetivo2 = 0;
var danoSuperEfetivo3 = 0;
var danoSuperEfetivo4 = 0;

var ataqueSuperEfetivo = 0;
var ataqueSuperEfetivo2 = 0;
var ataqueSuperEfetivo3 = 0;
var ataqueSuperEfetivo4 = 0;

function sortearCarta() {
  var elementoResultado = document.getElementById("resultado");

  var numeroCartaMaquina = parseInt(Math.random() * 151);
  cartaMaquina = cartas[numeroCartaMaquina];

  var numeroCartaJogador = parseInt(Math.random() * 151);
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 151);
  }
  cartaJogador = cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirCartaJogador();
  exibirCartaMaquina();

  calcularFraqueza();
  calcularFraqueza2();
  calcularFraqueza3();
  calcularFraqueza4();

  calcularForca();
  calcularForca2();
  calcularForca3();
  calcularForca4();

  //console.log(cartaJogador.tipo,cartaMaquina.tipo,"ataque: ",ataqueSuperEfetivo,"dano: ",danoSuperEfetivo); //console.log(cartaJogador.tipo2,cartaMaquina.tipo2,"ataque: ",ataqueSuperEfetivo2,"dano: ",danoSuperEfetivo2);
//console.log(cartaJogador.tipo,cartaMaquina.tipo2,"ataque: ",ataqueSuperEfetivo3,"dano: ",danoSuperEfetivo3); //console.log(cartaJogador.tipo2,cartaMaquina.tipo,"ataque: ",ataqueSuperEfetivo4,"dano: ",danoSuperEfetivo4);

  elementoResultado.innerHTML = "";
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

function calcularFraqueza() {
  var tipoCartaDoJogador = cartaJogador.tipo;
  var tipoCartaDaMaquina = cartaMaquina.tipo;

  if (tipoCartaDoJogador == "normal" && tipoCartaDaMaquina == "fighting") {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "electric")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "psychic")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "ice")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "rock")
  ) {
    danoSuperEfetivo = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "electric") ||
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "grass")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    tipoCartaDoJogador == "electric" &&
    tipoCartaDaMaquina == "ground"
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "ghost") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo = 2;
  } else {
    danoSuperEfetivo = 1;
  }
}

function calcularFraqueza2() {
  var tipoCartaDoJogador = cartaJogador.tipo2;
  var tipoCartaDaMaquina = cartaMaquina.tipo2;

  if (tipoCartaDoJogador == "" && tipoCartaDaMaquina == "") {
    danoSuperEfetivo2 = 0;
  } else if (tipoCartaDoJogador == "" && tipoCartaDaMaquina != "") {
    danoSuperEfetivo2 = 1;
  } else if (
    tipoCartaDoJogador == "normal" &&
    tipoCartaDaMaquina == "fighting"
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "electric")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "psychic")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "ice")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "rock")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "electric") ||
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "grass")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    tipoCartaDoJogador == "electric" &&
    tipoCartaDaMaquina == "ground"
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "ghost") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo2 = 2;
  } else {
    danoSuperEfetivo2 = 1;
  }
}

function calcularFraqueza3() {
  var tipoCartaDoJogador = cartaJogador.tipo;
  var tipoCartaDaMaquina = cartaMaquina.tipo2;

  if (tipoCartaDoJogador == "" && tipoCartaDaMaquina != "") {
    danoSuperEfetivo3 = 1;
  } else if (tipoCartaDoJogador == "" && tipoCartaDaMaquina == "") {
    danoSuperEfetivo3 = 0;
  } else if (
    tipoCartaDoJogador == "normal" &&
    tipoCartaDaMaquina == "fighting"
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "electric")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "psychic")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "ice")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "rock")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "electric") ||
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "grass")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    tipoCartaDoJogador == "electric" &&
    tipoCartaDaMaquina == "ground"
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "ghost") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo3 = 2;
  } else {
    danoSuperEfetivo3 = 1;
  }
}

function calcularFraqueza4() {
  var tipoCartaDoJogador = cartaJogador.tipo2;
  var tipoCartaDaMaquina = cartaMaquina.tipo;

  if (tipoCartaDoJogador == "" && tipoCartaDaMaquina != "") {
    danoSuperEfetivo4 = 1;
  } else if (tipoCartaDoJogador == "" && tipoCartaDaMaquina == "") {
    danoSuperEfetivo4 = 0;
  } else if (
    tipoCartaDoJogador == "normal" &&
    tipoCartaDaMaquina == "fighting"
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "electric")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "psychic")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "ice")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "rock")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ground")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "electric") ||
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "grass")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    tipoCartaDoJogador == "electric" &&
    tipoCartaDaMaquina == "ground"
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "ghost") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "bug")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "dragon" && tipoCartaDaMaquina == "fairy")
  ) {
    danoSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "steel")
  ) {
    danoSuperEfetivo4 = 2;
  } else {
    danoSuperEfetivo4 = 1;
  }
}

function calcularForca() {
  var tipoCartaDoJogador = cartaJogador.tipo;
  var tipoCartaDaMaquina = cartaMaquina.tipo;

  if (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "normal") {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "fighting")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "flying")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "poison")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "ground")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "rock")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "bug")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "steel")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "fire")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "water")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "grass")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    tipoCartaDoJogador == "ground" &&
    tipoCartaDaMaquina == "electric"
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "psychic")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ice")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "dragon") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "dragon")
  ) {
    ataqueSuperEfetivo = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "fairy") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fairy")
  ) {
    ataqueSuperEfetivo = 2;
  } else {
    ataqueSuperEfetivo = 1;
  }
}

function calcularForca2() {
  var tipoCartaDoJogador = cartaJogador.tipo2;
  var tipoCartaDaMaquina = cartaMaquina.tipo2;

  if (tipoCartaDoJogador != "" && tipoCartaDaMaquina == "") {
    ataqueSuperEfetivo2 = 1;
  } else if (tipoCartaDoJogador == "" && tipoCartaDaMaquina == "") {
    ataqueSuperEfetivo2 = 0;
  } else if (
    tipoCartaDoJogador == "fighting" &&
    tipoCartaDaMaquina == "normal"
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "fighting")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "flying")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "poison")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "ground")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "rock")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "bug")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "steel")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "fire")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "water")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "grass")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    tipoCartaDoJogador == "ground" &&
    tipoCartaDaMaquina == "electric"
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "psychic")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ice")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "dragon") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "dragon")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "fairy") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fairy")
  ) {
    ataqueSuperEfetivo2 = 2;
  } else {
    ataqueSuperEfetivo2 = 1;
  }
}

function calcularForca3() {
  var tipoCartaDoJogador = cartaJogador.tipo;
  var tipoCartaDaMaquina = cartaMaquina.tipo2;

  if (tipoCartaDoJogador != "" && tipoCartaDaMaquina == "") {
    ataqueSuperEfetivo3 = 1;
  } else if (tipoCartaDoJogador == "" && tipoCartaDaMaquina == "") {
    ataqueSuperEfetivo3 = 0;
  } else if (
    tipoCartaDoJogador == "fighting" &&
    tipoCartaDaMaquina == "normal"
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "fighting")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "flying")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "poison")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "ground")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "rock")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "bug")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "steel")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "fire")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "water")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "grass")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    tipoCartaDoJogador == "ground" &&
    tipoCartaDaMaquina == "electric"
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "psychic")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ice")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "dragon") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "dragon")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "fairy") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fairy")
  ) {
    ataqueSuperEfetivo3 = 2;
  } else {
    ataqueSuperEfetivo3 = 1;
  }
}

function calcularForca4() {
  var tipoCartaDoJogador = cartaJogador.tipo2;
  var tipoCartaDaMaquina = cartaMaquina.tipo;

  if (tipoCartaDoJogador != "" && tipoCartaDaMaquina == "") {
    ataqueSuperEfetivo4 = 1;
  } else if (tipoCartaDoJogador == "" && tipoCartaDaMaquina == "") {
    ataqueSuperEfetivo4 = 0;
  } else if (
    tipoCartaDoJogador == "fighting" &&
    tipoCartaDaMaquina == "normal"
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "fighting") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "fighting")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "flying") ||
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "flying")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "poison") ||
    (tipoCartaDoJogador == "psychic" && tipoCartaDaMaquina == "poison")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "ground") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "ground")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "rock") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "rock")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "bug") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "bug")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "ghost") {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "steel") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "steel")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "water" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "fire") ||
    (tipoCartaDoJogador == "ground" && tipoCartaDaMaquina == "fire")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "electric" && tipoCartaDaMaquina == "water") ||
    (tipoCartaDoJogador == "grass" && tipoCartaDaMaquina == "water")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "flying" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "grass") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "grass")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    tipoCartaDoJogador == "ground" &&
    tipoCartaDaMaquina == "electric"
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "ghost" && tipoCartaDaMaquina == "psychic") ||
    (tipoCartaDoJogador == "bug" && tipoCartaDaMaquina == "psychic")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "rock" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fighting" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "fire" && tipoCartaDaMaquina == "ice") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "ice")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "ice" && tipoCartaDaMaquina == "dragon") ||
    (tipoCartaDoJogador == "fairy" && tipoCartaDaMaquina == "dragon")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else if (
    (tipoCartaDoJogador == "poison" && tipoCartaDaMaquina == "fairy") ||
    (tipoCartaDoJogador == "steel" && tipoCartaDaMaquina == "fairy")
  ) {
    ataqueSuperEfetivo4 = 2;
  } else {
    ataqueSuperEfetivo4 = 1;
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var divResultado;

  if (ataqueSuperEfetivo2 == 0 && danoSuperEfetivo2 == 0) {
    var cartaJogadorMultiplicador =
      ((ataqueSuperEfetivo + ataqueSuperEfetivo2) *
        ataqueSuperEfetivo3 *
        ataqueSuperEfetivo4) /
      ((danoSuperEfetivo + danoSuperEfetivo2) *
        danoSuperEfetivo3 *
        danoSuperEfetivo4);
  } else if (
    (ataqueSuperEfetivo == 2 &&
      ataqueSuperEfetivo2 == 2 &&
      cartaJogador.tipo2 != "") ||
    (ataqueSuperEfetivo == 2 &&
      ataqueSuperEfetivo3 == 2 &&
      cartaJogador.tipo2 != "") ||
    (ataqueSuperEfetivo == 2 &&
      ataqueSuperEfetivo4 == 2 &&
      cartaJogador.tipo2 != "") ||
    (ataqueSuperEfetivo2 == 2 &&
      ataqueSuperEfetivo3 == 2 &&
      cartaJogador.tipo2 != "") ||
    (ataqueSuperEfetivo2 == 2 &&
      ataqueSuperEfetivo4 == 2 &&
      cartaJogador.tipo2 != "") ||
    (ataqueSuperEfetivo3 == 2 &&
      ataqueSuperEfetivo4 == 2 &&
      cartaJogador.tipo2 != "")
  ) {
    var cartaJogadorMultiplicador =
      (ataqueSuperEfetivo *
        ataqueSuperEfetivo2 *
        ataqueSuperEfetivo3 *
        ataqueSuperEfetivo4) /
        (danoSuperEfetivo *
          danoSuperEfetivo2 *
          danoSuperEfetivo3 *
          danoSuperEfetivo4) -
      2;
  } else {
    var cartaJogadorMultiplicador =
      (ataqueSuperEfetivo *
        ataqueSuperEfetivo2 *
        ataqueSuperEfetivo3 *
        ataqueSuperEfetivo4) /
      (danoSuperEfetivo *
        danoSuperEfetivo2 *
        danoSuperEfetivo3 *
        danoSuperEfetivo4);
  }

  if (cartaJogadorMultiplicador < 0.25) {
    cartaJogadorMultiplicador = 0.25;
  } else if (cartaJogadorMultiplicador > 4) {
    cartaJogadorMultiplicador = 4;
  }

  var cartaJogadorResult = valorCartaJogador * cartaJogadorMultiplicador;

  if (cartaJogadorResult > valorCartaMaquina) {
    divResultado = "<p class='resultado-final'>Você ganhou !</p>";
  } else if (cartaJogadorResult < valorCartaMaquina) {
    divResultado = "<p class='resultado-final'>Você perdeu !</p>";
  } else {
    divResultado = "<p class='resultado-final'>Empate !</p>";
  }
  elementoResultado.innerHTML = divResultado;

  //console.log(cartaJogadorResult);

  exibirStatusMaquina();

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
}

function exibirCartaJogador() {
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  var moldura =
    '<img src="https://i0.wp.com/i.pinimg.com/originals/c8/06/86/c80686b645efd1585f085e161cab6a34.png" style=" border-radius: 15px; width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div 'id=opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type='radio' name='atributo' value='" +
      atributo +
      "' checked>" +
      "<p>" +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;

  if (cartaJogador.tipo2 != "") {
    var tipo = `<br><p class="carta-tipo2">${cartaJogador.tipo}/${cartaJogador.tipo2}</p>`;
  } else {
    var tipo = `<br><p class="carta-tipo">${cartaJogador.tipo}</p>`;
  }

  divCartaJogador.innerHTML =
    moldura + nome + tipo + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://i0.wp.com/i.pinimg.com/originals/c8/06/86/c80686b645efd1585f085e161cab6a34.png" style=" border-radius: 15px; width: inherit; height: inherit; position: absolute;">';

  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  if (cartaMaquina.tipo2 != "") {
    var tipo = `<br><p class="carta-tipo2">${cartaMaquina.tipo}/${cartaMaquina.tipo2}</p>`;
  } else {
    var tipo = `<br><p class="carta-tipo">${cartaMaquina.tipo}</p>`;
  }

  divCartaMaquina.innerHTML = moldura + nome + tipo + "</div>";
}

function exibirStatusMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  var moldura =
    '<img src="https://i0.wp.com/i.pinimg.com/originals/c8/06/86/c80686b645efd1585f085e161cab6a34.png" style=" border-radius: 15px; width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div 'id=opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<p class='texto-status'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;

  if (cartaMaquina.tipo2 != "") {
    var tipo = `<br><p class="carta-tipo2">${cartaMaquina.tipo}/${cartaMaquina.tipo2}</p>`;
  } else {
    var tipo = `<br><p class="carta-tipo">${cartaMaquina.tipo}</p>`;
  }

  divCartaMaquina.innerHTML =
    moldura + nome + tipo + tagHTML + opcoesTexto + "</div>";
}

function mostrarRegras() {
  var mostrarRegras = document.getElementById("mostrarRegras");
  var regras = document.getElementById("regras");

  document.querySelector("#cover").className = "mostrar-regras-cover";
  document.querySelector("#mostrarRegras").className = "mostrar-regras";

  if (mostrarRegras.value == undefined && regras == null) {
    mostrarRegras.innerHTML =
      "<p id='regras'>" +
      "<br><br>" +
      "1 - Para começar o jogo clique no botão 'sortear carta', assim que você clicar nesse botão você e máquina receberão uma carta com um pokémon." +
      "<br><br>" +
      "2 - Cada pokémon tem seu status como ataque, defesa, velocidade e etc..." +
      "<br><br>" +
      "3 - Além dos status cada pokémon tem seu tipo ou mais de um, e cada tipo tem suas vantagens e desvantagens." +
      "<br><br>" +
      "4 - Quando você selecionar um atributo ele será comparado com o atributo da máquina, se o atributo selecionado for maior que o da máquina você ganha." +
      "<br><br>" +
      "5 - O atributo selecionado sempre vai ser equivalente as vantagens dos tipos. Exemplo: se sua carta tiver vantagem ela vai ser duas vezes mais forte, se tiver desvantagem ela vai ser duas vezes mais fraca." +
      "</p>";
  } else {
    mostrarRegras.innerHTML = "";
    document.querySelector("#cover").className = "";
    document.querySelector("#mostrarRegras").className = "";
  }
}

function mostrarTipos() {
  var mostrarTipos = document.getElementById("mostrarTipos");
  var tipos = document.getElementById("tipos");

  //document.querySelector("#mostrarTipos").className = "mostrar-tipos";

  if (mostrarTipos.value == undefined && tipos == null) {
    mostrarTipos.innerHTML =
      '<img id="tipos" src="https://pbs.twimg.com/media/FPH5w-mWUAAhzbq?format=png&name=900x900">';
  } else {
    mostrarTipos.innerHTML = "";
    //document.querySelector("#mostrarTipos").className = "";
  }
}