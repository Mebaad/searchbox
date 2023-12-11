let movies = [
    "The Meg 2", 
    "The Meg", 
    "Extraction 2",
    "Mission Impossible: Dead Reckoning",
    "Mission Impossible: Ghost Protocol",
    "Mission Impossible: Rogue Nation",
    "The Avengers:End Game",
    "Money Heist",
    "Barbie",
    "The Avengers:Age of Ultron",
    "The Avengers:Infinity War",
    "The Quantum Paradox",
    "Midnight Mirage",
    "Echoes of Eternity",
    "Nebula's Embrace",
    "Enigma Chronicles",
    "Radiant Requiem",
    "Shadow of Serenity",
    "Shattered Dimensions",
    "Celestial Odyssey",
    "Veil of Whispers",
    "Elysium Enigma",
    "Luminous Legacy",
    "Tempest Tango",
    "Ascension Protocol",
    "Chronicles of the Cosmos",
    "Solstice Symphony",
    "Beyond the Horizon",
    "Nebulous Nexus",
    "Aetherium Secrets",
    "Serendipity's Song",
    "Aurora Ascending",
    "Stellar Alchemy",
    "Dreamweaver's Dilemma",
    "Quantum Quicksilver",
    "Echoes from Tomorrow",
    "Midnight Metropolis",
    "Odyssey of Oracles",
    "Prism's Peril",
    "Nebula Noir",
    "Arcane Amalgam",
    "Echoes in Eternity",
    "Paradox Pandora",
    "Enchanted Eclipse",
    "Whispers in the Void",
    "Twilight Traverse",
    "Ephemeral Elysium",
    "Ethereal Enchantment",
    "Synchronicity Saga",
    "Echoes of the Nebula",
    "Midnight Monolith",
    "Zodiac Zenith",
    "Celestial Cipher",
    "Portal to Eternity",
    "Nova's Nexus",
    "Solitary Stardust",
    "Enigma of Echoes",
    "Nebula's End",
    "Whispering Shadows",
    "Quantum Quandary",
    "Aeon Arcana",
    "Twilight's Lullaby",
    "Stellar Mirage",
    "Chrono Crucible",
    "Prism's Pathway",
    "Labyrinth of Light",
    "Ethereal Echo",
    "Whispers of Infinity",
    "Enchanted Echoes",
    "Nova Nostalgia",
    "Galaxy's Grasp",
    "Veil of Vision",
    "Ephemeral Embrace",
    "Twilight Threnody",
    "Ethereal Odyssey",
    "Siren's Solace",
    "Quantum Quasar",
    "Arcane Aurora",
    "Midnight Muse",
    "Prism's Passage",
    "Enigma Entwined",
    "Celestial Caravan",
    "Nebula's Nocturne",
    "Echoes of Eden",
    "Aetherium Alchemy",
    "Stellar Soliloquy",
    "Enchanted Enigma",
    "Whispers in Wilderness",
    "Twilight Triad",
    "Luminous Labyrinth",
    "Ethereal Eclipse",
    "Nebula's Nexus",
    "Aurora's Arc",
    "Quantum Quest",
    "Prism's Prism",
    "Enchanted Odyssey",
    "Celestial Cascade",
    "Echoes of Empyrean",
    "Ethereal Equinox",
    "Twilight Travellers",
    "Nebula Nectar",
    "Quantum Quiescence",
    "Stellar Serenade",
    "Enchanted Echoes",
    "Arcane Allegory",
    "Celestial Chronograph",
    "Prism's Paradox",
    "Ephemeral Eden",
    "Nebula's Nexus",
    "Twilight Tapestry",
    "Echoes of Endeavor",
  ];
  let newMovies = movies.map((movie) => {
    return movie.toLowerCase();
      });
    
      let searchbox = document.getElementById("searchbox");
      let list = document.getElementById("list");
    
      let search = () =>{
    
        let query = searchbox.value.toLowerCase();
        // console.log(query);
    
        let result = newMovies.filter((movie)=>{
              if(movie.includes(query))return movie; 
            //   "the" meg == "the"
        });
        console.log(result);
    
        if (result.length ==0){
            list.innerHTML =`
            oops...! movie not found`;
        } else{
            list.innerHTML = "";
            result.forEach((element) => {
                list.innerHTML += `<li>${element}</li>`;
            });
        }
      };
    
      searchbox.addEventListener("keyup" , search);

