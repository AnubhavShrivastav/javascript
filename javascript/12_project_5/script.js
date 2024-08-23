const form = document.querySelector('form')

form.addEventListener('submit',function (e){
    e.preventDefault()

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

if (height < 0 || height === " " || isNaN(height)){
    results.innerHTML =`Please give a valid height ${height}`;
}else if (weight < 0 || weight === " " || isNaN(weight)){
    results.innerHTML =`Please give a valid weight ${weight}`;
}else{
 const Bmi = (weight/((height*height)/10000)).toFixed(2);
 //show the result
 //results.innerHTML = `<span>${Bmi}</span>`

 if(Bmi < 18.6){
   results.innerHTML = `<span>${Bmi} <br> you are under weight.</span>`
 } 
 if(Bmi >= 18.6 && Bmi <= 24.9){
    results.innerHTML = `<span>${Bmi} <br> you are normal.</span>`
 }
  if (Bmi > 24.9 ){
    results.innerHTML = `<span> ${Bmi} <br> you are overWeight.</span>`
}
}
})