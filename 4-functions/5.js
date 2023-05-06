// function canAccessWebsite(age) {
//   if (age < 18) {
//     return false;
//   } else {
//     return true;
//   }
// }

function canAccessWebsite(age) {
  if (age < 18) {
    return false;
  }

  console.log("The text won't show if you're younger than 18");

  return true;
}

// console.log(canAccessWebsite(18));

// const canAccessProfile = age => age >= 18;
const canAccessVideo = age => (age < 18 ? 'No' : 'Yes');

console.log(canAccessVideo(18));
