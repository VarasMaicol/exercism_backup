//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, sec) => {
  let earthYear = sec/31557600;
  switch (planet){
    case 'mercury':
      return Math.round((earthYear / 0.2408467)*100)/100;
      break;
    case 'venus':
      return Math.round((earthYear / 0.61519726)*100)/100;;
      break;
    case 'mars':
      return Math.round((earthYear / 1.8808158)*100)/100;;
      break;
    case 'jupiter':
      return Math.round((earthYear / 11.862615)*100)/100;;
      break;
    case 'saturn':
      return Math.round((earthYear / 29.447498)*100)/100;;
      break;
    case 'uranus':
      return Math.round((earthYear / 84.016846)*100)/100;;
      break;
    case 'neptune':
      return Math.round((earthYear / 164.79132)*100)/100;;
      break;
    default:
      return Math.round(earthYear*100)/100;;
  }
};
