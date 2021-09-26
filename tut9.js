// MRF-Methord problems
//map=>takes the function as a parameter and apply function on each and every elements of the array and returns a new array.
// Filter=> It will aplly function onh each and every element of the array,if the specific element passes the condition then it will be pushed to the new array and if not then element will be ignored.
// Reduce=> in reduce function it take two parameter one is accumulator(initial value) and one is element.
//XML  HTTP REQUEST(xhr) (VIA API)

4.// printing all population from restcountry api
/*var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
var total_popln=data.reduce((accu,Element)=>accu+Element.population,0)
    console.log(total_popln)
}*/


1.//Get all the countries from Asia continent /region using Filter function
var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
var data=JSON.parse(request.response);
// var country=data.filter((element)=>{
//     if(element.region==="Asia"){
//         return element.name
//     }
// })
// console.log(country)
// }

2.//Get all the countries with a population of less than 2 lakhs using Filter function

/*var country=data.filter((element)=>element.population<200000)
console.log(country)
}*/

3.//Print the following details name, capital, flag using forEach function
// Object.entries(data).forEach((key,value) => {
//     console.log(`${data[value].name}${data[value].capital}${data[value].name}`)
// });
// }

5.//Print the country which uses US Dollars as currency.
// let country=data.filter((elem)=>{
//     for (let i in elem.currencies){
//         if(elem.currencies[i].code==="USD"){
//             return true
//         }
//     }
// })
// console.log(country)
 }