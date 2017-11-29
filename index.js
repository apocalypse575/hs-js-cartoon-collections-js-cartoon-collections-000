function dwarfRollCall(dwarves) {
  let arr = []
  for(let i = 0, l = dwarves.length; i < l; i++) {
    arr.push(`${i + 1}. ${dwarves[i]} `)
  }
  return arr.join(``)
}

function summonCaptainPlanet(planeteerCalls){
  let arr = []
  for(let i = 0, l = planeteerCalls.length; i < l; i++) {
  arr.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return arr
}

function longPlaneteerCalls(words) {
  for(let i = 0, l = words.length; i < l; i++) {
    if (words[i].length <= 4) {
      return false
    }
    else {
      return true
    }
  }
}

<<<<<<< HEAD
function findTheCheese(foods) {
  let cheese = [`cheddar`, `gouda`, `camembert`]
  for(let i = 0, l = foods.length; i < l; i++) {

    for(let j = 0, l = cheese.length; j < l; j++) {
      if(foods[i] === cheese[j]) {
        return cheese[j]
      }
    }

  }
  return 'no cheese!'
=======
function findTheCheese (foods) {
  for(let i = 0, l = foods.length; i < l; i++) {
    if(foods[i] === 'cheddar') {
    return 'cheddar'
  }
  // else {
  //   console.log(`no cheese!`)
  // }
  }
      return 'no cheese!'
>>>>>>> 040ccb8597df492897dbee3f56bdd9f51fc9449b
}
