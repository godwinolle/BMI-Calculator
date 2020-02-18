const form = document.querySelector('.bmi');
const result = document.querySelector('div.result');

const findBMI = (height, weight) =>{
    let kg = weight/2.205;
    let m = (height/39.37)**2;
    return kg/m;
}
let bmiRange = "";

form.addEventListener('submit', e =>{
    e.preventDefault();

    const user = form.name.value;
    const age = form.age.value;
    const height = form.height.value;
    const weight = form.weight.value;

    const bmi = findBMI(height, weight).toFixed(2);

    if(bmi < 18.5){
        bmiRange = "Underweight";
        result.style.backgroundColor = 'yellow';
    }
    else if(bmi > 18.5 && bmi < 25){
        bmiRange = "Normal";
        result.style.backgroundColor = 'green';
    }
    else if(bmi > 25){
        bmiRange = "Overweight";
        result.style.backgroundColor = 'red';
    }
    else if(bmi > 30){
        bmiRange = "Obese";
        result.style.backgroundColor = 'red';
    }

    console.log(`BMI: ${bmi}`);

    result.classList.remove('d-none');
    result.textContent = `Hi ${user}, I see you're ${age} years old! `;
    result.textContent+= `Your Body Mass Index: ${bmi} `;
    result.textContent+= `BMI Range: ${bmiRange}`;
});
