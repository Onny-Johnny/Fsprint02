let BlackWidow = {
        team: 'Avengers',
        universe: "Marvel",
        race: "human",
        eyeColor: "green",
        hairColor: "lightBrown/green",
      }
      
      var Superman = {
        team: "Justice League Of America",
        universe: "DC Comics",
        race: "human",
        eyeColor: "blue",
        hairColor: "black",
      }
      
      function ThisIsBlackWidow(hero) {
        if (
          hero.team === 'Avengers' &&
          hero.universe === 'Marvel' &&
          hero.race === 'human' &&
          hero.eyeColor === 'green' &&
          hero.hairColor === 'lightBrown/green'
        ) {
          alert("This is a Widow")
        } else {
          alert("Didn't recognize")
        }
      }
      
      ThisIsBlackWidow(BlackWidow);
      
      
      function ThisIsSuperman(heroes) {
        if (
          heroes.team === "Justice League Of America" &&
          heroes.universe === "DC Comics" &&
          heroes.race === "human" &&
          heroes.eyeColor === "blue" &&
          heroes.hairColor === "black"
        ) {
          alert("This is a Superman or Robin!")
        } else {
          alert("Didn't recognize")
        }
      }
      
      ThisIsSuperman(SpipermanRobin)