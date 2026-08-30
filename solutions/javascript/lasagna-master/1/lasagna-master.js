/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function (...) {
 *   ...
 * }
 */
export function cookingStatus (timer){
  if( timer === 0 ){
    return 'Lasagna is done.'
  }else if (timer >= 0 ){
    return 'Not done, please wait.'
  }else if (timer == undefined){
    return 'You forgot to set the timer.'
  }
}

export function preparationTime (layers, min){
  if (min > 0){
    return layers.length * min
  }else{
    return layers.length * 2
  }
}

export function quantities (layers){
  let pasta = 0;
  let salsa = 0;
  const x = {'noodles': 0, 'sauce': 0};
  
  for (let i = 0; i < layers.length ; i++) {
    if (layers[i] == 'noodles'){     
       pasta += 1
       x.noodles = pasta * 50
    }else if (layers[i] == 'sauce'){
      salsa += 1
      x.sauce = salsa * 0.2
    }
  }
  return x  
}

export function addSecretIngredient(friendsList, myList){
 const x = friendsList[friendsList.length-1];
  myList.push(x);
}

export function scaleRecipe(recipe, num){

const x = {}
for (const key in recipe) {
    x[key] =(recipe[key]*num)/2
}
return x
}