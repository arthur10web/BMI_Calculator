function calculate(){
    let weight =parseInt(document.getElementById('weight').value)

    document.getElementById('weight-value').textContent = weight +'kg'

    let height =parseInt(document.getElementById('height').value)

    document.getElementById('height-value').textContent = height +'cm'

    let bmi;
    bmi = (weight/(Math.pow((height/100),2))).toFixed(2)
    console.log(bmi)

    const result =document.getElementById('result_value');
    result.textContent =bmi

    if(bmi<18.5){
        result.style.color = '#b6e552'
    }
    else if(bmi>=18.5 && bmi <24.9){
        result.style.color = '#2ed26a'
    }
    else{
        result.style.color = '#cf4f4f'
    }
}
calculate()