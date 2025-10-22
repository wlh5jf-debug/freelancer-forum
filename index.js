/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer (){
    const name = NAMES[Math.floor(Math.random() * NAMES.length)]
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)]
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
 
    return { name, occupation, rate };
  
}

const freelancers = Array.from({length: NUM_FREELANCERS}, makeFreelancer)


function getAverageRate(freelancers){
const value = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0)
return value / freelancers.length
}

let averageRateNumber = getAverageRate(freelancers);



function singleFreelancer(freelancer){
     const {name, occupation, rate} = freelancer

    const $single = document.createElement("article")
    $single.classList.add("freelancer")
    $single.innerHTML = `
    <span>${freelancer.name} - ${freelancer.occupation} - $${freelancer.rate}/hr</span>`

    return $single


}

function averageRate(average){
    const $average = document.createElement("article")
    $average.classList.add("averagerate")
    $average.innerHTML = `
    <h2>The Average Rate is ${averageRateNumber}</h2>`

    return $average
}


function arrayFreelancer(freelancers){
  const $array = document.createElement("section");
  $array.classList.add("freelancers");

  const freelancerElements = freelancers.map(singleFreelancer);
  $array.replaceChildren(...freelancerElements);

  return $array;
}

function render(){
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Freelancer Rates</h1>
    <AverageRate></AverageRate>
    <FreelancerList></FreelancerList>
    `
  
  $app.querySelector("AverageRate").replaceWith(averageRate(averageRateNumber));
  $app.querySelector("FreelancerList").replaceWith(arrayFreelancer(freelancers));

}

render()
