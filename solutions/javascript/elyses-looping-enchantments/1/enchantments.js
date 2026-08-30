// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let certainType = 0; 
  stack.forEach(value => {
    if (value === card){
      certainType += 1;    }
  })
  return certainType;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let counter = 0;
  for (let number of stack) {
    const evenOrOdd = number % 2;
    if (!type) {
      if (evenOrOdd !== 0) {
         counter ++;
      }
    } else {
      if (evenOrOdd === 0) {
        counter ++;
      }
    }
  } return counter;
}
