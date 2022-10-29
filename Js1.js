// ამის საშუალებით რეალურად ავირჩევთ ჩვენ რომ მოვახდინოთ
// დომ მანიპულაცია ყველა ჭიქაზე ამიტომაც ოლლს ვუმატებთ
const smallCups = document.querySelectorAll(`.cup-small`)
// აქ კი უკვე ვწერთ  რამდენი ლიტრი წყალი უნდა შეგახსენოთ
// ანუ დიდ ჭიქაში remained -ის ზემოთ რაც იწერება მას 
const listers = document.getElementById(`liters`);
// აქ უკვე ვაკეთებთ პროცენტებზე მანიპულაციას
const persentages = document.getElementById(`percentage`);
// და ეს უკვე არის რეალურად ლიტრებზე მანიპულაცია
const remained = document.getElementById(`remained`);

updateBigCup()





// რეალურად ამის საშუალებით ჩვენ შევქმენით მსგავსი რამ რომ
// როცა დავაწვებით ამ 8 მოცემულ ჭიქას, რეალურად დაკონსოლდება
// ინდექსები (0, 2, 6, 7) და ასე შემდეგ
smallCups.forEach((cup, idx) =>{
  cup.addEventListener(`click`, () => highlightCups(idx))
})

function highlightCups(idx){
if(smallCups[idx].classList.contains('full') 
&& !smallCups[idx].nextElementSibling.classList.contains('full')){
    idx--;
}


  smallCups.forEach((cup, idx2)=>{
     if(idx2 <= idx){
         cup.classList.add('full');
     }else{
       cup.classList.remove('full')
     }
  })
  updateBigCup()
}
function updateBigCup(){
  // აქ უკვე რაოდენობას ვარკვევთ თუ რამდენია ჭიქებზე დაჭერით :) 
   const fullCups = document.querySelectorAll(`.cup-small.full`).length;
   const totalCups = smallCups.length;
   console.log(totalCups);

   if(fullCups === 0 ){
    // რეალურად ამის საშუალებით ვწერთ რომ თუ ჭიქების რაოდენობა იქნება 0 მაშინ საერთოდ არ გამოჩნდეს ჩვენი მოცემული პროცენტი
    persentages.style.visibility = 'hidden';
    persentages.style.height = 0;
   }else{
    // ანუ სხვა შემთხვევაში თუ ავირჩევთ რამოდენიმე ჭიქას მაშინ გამოჩნდეს ჩვენი მოცემული  პროცენტები ტო :) 
    persentages.style.visibility = 'visible';
    persentages.style.height = `${fullCups / totalCups * 330}px`; //ანუ სიმაღლე იყოს ფაქტიურად 8 / 8 და გამრავლებული ჭიქის სიმაღლეზე
    persentages.innerText = `${fullCups / totalCups * 100} %`  //ხოლო პროცენტები თითოეული ჭიქის  ავსებაზე გამოჩნდებას
    // ფაქტ 8 / 8 და გამრავლებული 100ზე  და მივაწერთ პროცენტს და რეალურად ერთი ჭიქა იქნება 12.5 % :დ მპუა
   } 

   if(fullCups === totalCups){
        remained.style.visibility = "hidden"
        remained.style.height = 0; 
   }else{
      remained.style.visibility = "visible";
      listers.innerText = `${2 - (250 * fullCups / 1000)}ლ`
   }

}


