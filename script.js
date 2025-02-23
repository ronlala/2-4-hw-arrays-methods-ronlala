const fruits = [
    "apples",
    "bananas",
    "cherries",
    "dates",
    "elderberries",
    "figs",
    "grapes",
  ];
  
  // 1
  // How many elements are in the fruits array?

  console.log(fruits.length);

  const totalFruits = (fruits.length);
  
  // 2
  // Retrieve the first and last elements of fruits array
  const firstElement = fruits.find((element1) => element1.length > 1  );
  const LastElement = fruits.findLast((element2) => element2.length < 7);
 console.log ( "You have "+ totalFruits + "fruits on your list. The First Fruit on your list is " + firstElement + " and the last fruit on your list is " + LastElement );
  
  // 3
  // Retriever the first and the second elements from the colors array
  // Hint: Usee array destructuring
  const colors = ["red", "green", "blue", "black", "white"];
  // first element color destructuring
  const firstElementcolor = colors.find((colorElement1) => colorElement1.length > 1  );
  // Second element color destructuring
  const lastElementcolor = colors.findLast((colorElement2) => colorElement2.length < 7);

  // prints out the first and second elements of the colors array
 console.log ("The first color on your list is "+ firstElementcolor + " and the last color on your list is "+ lastElementcolor);
  

  // 4
  // Change the first element of colors array to orange

const replaceFirstelement = firstElementcolor.replace("red","orange");

  
  // 5
  // Change the third element of colors array to teal
const replaceThirdElement = colors.splice(2,1,"Teal");
  
  
  // 6
  // Combine fruits array with colors array and assign it to a new array called colorfulFruits
  // Hint: Use spread operator and then use concat operator

   const colorfulFruitsone = [...fruits,...colors];
   const colorfulFruits = colors.concat(fruits);


  
  // 7
  // Remove the first element from the fruits array
  
    const firstElementFruitsremove = fruits.shift();
    console.log(fruits);


  // 8
  // Remove the last element from the fruits array
  
  const firstElementfruits = fruits.slice(-1)[0];
  // 9
  // Add your favorite fruit to the beginning of the fruits array
  
  const beginningFruit = fruits.unshift("pear");
  console.log(fruits);
  // 10
  // Add your second favorite fruit to the end of the fruits array
 fruits.push( "watermelon" );
console.log(fruits);


  const numbers = [1, 2, 3, 2, 4, 2, 5];
  
  // 11
  // Find the index of the first occurrence of 2 in the numbers array

  const firstOccurance = numbers.indexOf(2);
  
  // 12
  // Find the index of the last occurrence of 2 in the numbers array

  const lastOccurance = numbers.lastIndexOf();
  
  // 13
  // Check if numbers array contains 3
  console.log(numbers.filter((numba)=> numba ===3));

  // 14
  // Check if numbers array contains 9
  console.log (numbers.filter((numba)=> numba === 9));