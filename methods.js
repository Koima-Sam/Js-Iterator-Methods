const users = [
  {
    firstName: "Niky",
    lastName: "Morgan",
    favoriteColor: "Blue",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Tracy",
    lastName: "Lum",
    favoriteColor: "Yellow",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Josh",
    lastName: "Rowley",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Kate",
    lastName: "Travers",
    favoriteColor: "Red",
    favoriteAnimal: "Jaguar",
  },
  {
    firstName: "Avidor",
    lastName: "Turkewitz",
    favoriteColor: "Blue",
    favoriteAnimal: "Penguin",
  },
  {
    firstName: "Drew",
    lastName: "Price",
    favoriteColor: "Yellow",
    favoriteAnimal: "Elephant",
  },
];
const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];

// console.log(users)
// Filter the array and return modified data
function colorFilter(c){
    return c.filter((item)=> item.favoriteColor==="Yellow")
}
// Return modified data with the same length as the original
function fullName(c){
    return c.map((item)=> item.firstName+' '+item.lastName)
}
console.log(fullName(users))
// add the total for each element with reduce
function getTotal(c){
    return c.reduce((acc,item)=> (item.price + acc),0)
}
console.log(getTotal(products))