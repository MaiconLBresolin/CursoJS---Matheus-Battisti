const arr1 = [1, 2, 3, 4, 5, 6, 8];
const arr2 = [1, 2];

function checkArr(arr) {
  if (arr.length >= 5) {
    console.log("Muitos elementos");
  } else {
    console.log("Poucos elementos");
  }
}

checkArr(arr1);
checkArr(arr2);
