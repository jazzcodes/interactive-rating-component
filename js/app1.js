
const rate1=document.getElementById('c1');
const rate2=document.getElementById('c2');
const rate3=document.getElementById('c3');
const rate4=document.getElementById('c4');
const rate5=document.getElementById('c5');
const span=document.getElementById('rate');

// console.log('hey');
// const selectedValue=null;

let selectedValue=null;

rate1.addEventListener("click", function()
{
   console.log(rate1.value);
   selectedValue=rate1.value;
   console.log("selected value:", selectedValue);
   console.log(span);
   span.innerText=`${selectedValue}`;
   console.log(span.innerText);
   console.log(span);
   console.log(span.innerHTML);

})
rate2.addEventListener("click", function()
{
   console.log(rate2.value);
   selectedValue=rate2.value;
   console.log("selected value:", selectedValue);
   console.log(span);
   span.innerText=`${selectedValue}`;
   console.log(span.innerText);
 
});

rate3.addEventListener("click", function()
{
   console.log(rate3.value);
    selectedValue=rate3.value;
    console.log("selected value:", selectedValue);


    console.log(span);
    span.innerText=`${selectedValue}`;
    console.log(span.innerText);
});

rate4.addEventListener("click", function()
{
   console.log(rate4.value);
  selectedValue=rate4.value;
  console.log("selected value:", selectedValue);
  console.log(span);
  span.innerText=`${selectedValue}`;
  console.log(span.innerText);
});

rate5.addEventListener("click", function()
{
   console.log(rate5.value);
  selectedValue=rate5.value;
  console.log("selected value:", selectedValue);
  console.log(span);
  span.innerText=`${selectedValue}`;
  console.log(span.innerText);
});

// let finalSelectedValue=selectedValue;
// console.log("final:", finalSelectedValue);



// submitBtn.addEventListener("click", function()
// {
//     let insert=document.querySelector('span');
//     console.log(insert);
// })

// let finalSelectedValue=final;
// console.log(finalSelectedValue);

let container = document.querySelector('.container');
let containerTy = document.querySelector('.container-ty');
let submitBtn=document.querySelector('.submit-btn');
submitBtn.addEventListener("click", function()
{
  container.style.display='none';
  containerTy.style.display='block';
  containerTy.style.display='flex';
});