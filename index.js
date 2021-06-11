const companies = [
    {name: "Walmart", category: "Retail", start: 1981, end: 2021 },
    {name: "Ford", category: "Auto", start: 1950, end: 1999 },
    {name: "WSJ", category: "Finance", start: 1930, end: 2000 },
    {name: "New York Times", category: "News", start: 1940, end: 1996 },
    {name: "Mercedes Benz", category: "Auto", start: 1960, end: 2011 },
    {name: "CNN", category: "News", start: 1990, end: 2012 },


    
]

// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start) {
//         return 0;
//     } else {
//         return -1;
//     }
// })

// console.log(sortedCompanies);
// const companyNames = companies.map(company=> company.name)
// console.log(companyNames)

// const companyNames =companies.map(function(company){
//     return `${company.name} // ${company.start} - ${company.end}`
    
// })
// console.log(companyNames);

// const retailCompanies = companies.filter(company => company.category === "Auto");
// console.log(retailCompanies);

// const eightiesCompanies = companies.filter(company=> company.start >= 1980 && company.start < 1990)
// console.log(eightiesCompanies);

// const lastedTenYears = companies.filter(company=> (company.end - company.start > 10))
// console.log(lastedTenYears);

const ages = [33,12,20,16,5,24,44,61,13,15,45,26,64];


const ageSum = ages.reduce(function(total, age){
    return total + age
}, 0);
console.log(ageSum)

const cvsProducts = [22, 15, 5, 6, 7, 8, 9, 20, 11, 7, 10];

const pocket = cvsProducts.reduce((total, product)=> total - product, 200);
console.log("$" + pocket + ".00")

// const sortAges = ages.sort((a,b) => (a-b));
// console.log(sortAges);

// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// companies.forEach(function(company) {
//     console.log(company.name) + " " + console.log(company.category)
// });

// let canDrink = [];
// let noDrink = [];
// for (let i = 0; i < ages.length; i ++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     } else noDrink.push(ages[i]);
// }
    
// console.log(canDrink)
// console.log(noDrink)

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })

// const canDrink = ages.filter(age=> age >= 21)
// console.log(canDrink);

// // const middleAge = ages.filter(function(age){
// //     if(age >= 34 && (age < 60))
// //     return true
// // })

// const middleAge = ages.filter(age=> age >= 34 && age < 60)
// console.log(middleAge)

// const young = ages.filter(function(age) {
//     if(age < 21)
//     return true
// })
// console.log(young);

// const salaries = [20000, 150000, 35000, 55000, 68000, 98000];

// const goodPay = salaries.filter(function(salary) {
//     if(salary > 60000)
//     return true
// })
// console.log(goodPay);

// const restaurants = ["Yobe", "Burger King", "Bok Choy Palace", "Samson", "Golden Corral", "Red Barn"];

// const startsWith = restaurants.filter(function(restuarant) {
//     if(restuarant.charAt(0) == "G")
//     return true
// })
// console.log(startsWith);

