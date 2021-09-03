
/**
 * Function Fishing
 * A simple fishing game
 *
 * Rules:
 * To Eat: Must have at least 1 fish and a fire
 * To Make Fire: Must have a least 1 log of wood
 * To Fish: Must have at least 1 piece of bait and fire must be out
 * To Find Wood: The fire must be out.
 * To Find Bait: The fire must be out.
 */

/**
 * The game object stores the current game status
 */

let game = {
  baitNumber: 0,
  fishNumber: 0,
  woodNumber: 0,
  fireStatus: false
}

/**
 * eat
 * To eat a fish:
 *    There first must be going
 *    There must be at least 1 fish
 */

function eat () {
  if (game.fireStatus === true) {
    if (game.fishNumber > 0) {
      game.fishNumber -= 1
      return 'Your fish is being cooked'
    } else if (game.fishNumber < 1) {
      return 'You do not have any fish'
    }
  } else {
    return 'You must start the fire'
  }
}

/**
* fish
* To go fishing:
*    The fire must be out
*    There must be at least 1 piece of bait
*/
function fish () {
  if (game.fireStatus === false) {
    if (game.baitNumber > 0) {
      game.fishNumber += 1
      game.baitNumber -= 1
      return `You have caught ${game.fishNumber} fish`
    } else {
      return 'Go find bait'
    }
  } else {
    return 'You must put out the fire'
  }
}

/**
* fire
* To start a fire:
*    The fire must be out
*    There must be at least 1 piece of wood
*
* To stop a fire:
*    The fire must be going
*/
function fire () {
  if (game.fireStatus === false) {
    if (game.woodNumber < 1) {
      return 'You do not have any wood'
    } else if (game.woodNumber > 0) {
      game.woodNumber -= 1
      game.fireStatus = true
      return 'You have started the fire'
    }
  } else {
    game.fireStatus = false
    return 'You have put out the fire'
  }
}

/**
* bait
* To search for bait:
*    The fire must be out
*/
function bait () {
  if (game.fireStatus === false) {
    game.baitNumber += 1
    return `You have found ${game.baitNumber} bait`
  } else {
    return 'You must put out the fire'
  }
}

/**
 * wood
 * To search for wood:
 *    The first must be out
 */
function wood () {
  if (game.fireStatus === false) {
    game.woodNumber += 1
    return `You have found ${game.woodNumber} piece of wood`
  } else {
    return 'You must put out the fire'
  }
}

/**
 * inventory
 * Shows the players current inventory
 */

function inventory () {
  console.table(game)
}

/**
* help
* Display the game instructions.
*/
function help () {
  return `Welcome to Functional Fishing
  The text-based console fishing game.
  Instructions
  In this game you will catch, cook and eat fish. You will also search for wood and bait.
  
  Commands
  To eat a fish use eat()  
  To go fishing use fish()  
  To start/stop a fire use fire()  
  To search for bait use bait()  
  To search for wood use wood()  
  To check inventory use inventory()  
  To view the instruction use help()`
}
console.log('help())')
