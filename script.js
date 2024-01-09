let birthdate= document.getElementById("birthday");
let btn= document.getElementById("button");

btn.addEventListener("click", calculateAge);
let para= document.querySelector("p");


function calculateAge(){
    let currDate= new Date();
    // console.log(currDate);

    let dob= new Date(birthdate.value);
    // console.log(dob);

    let age= currDate.getFullYear() -dob.getFullYear();
    // console.log(age);
    let monthGap= currDate.getMonth() - dob.getMonth();
    if(monthGap<0 || monthGap===0 && currDate.getDate-dob.getDate>0){
        age--;
    }

    para.innerText= `You are ${age} years young`;

}
