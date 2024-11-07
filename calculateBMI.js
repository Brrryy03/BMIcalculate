function calculateBMI() {
    
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    
    
    height = height / 100;
    
    
    var bmi = weight / (height * height);
    
    
    var result = document.getElementById("result");
    result.innerHTML = "Your BMI is: " + bmi.toFixed(2);
    
   
    if (bmi < 18.5) 
    {
        result.innerHTML += "<You're underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML += "Your weight is normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML += "You're overweight.";
    } else {
        result.innerHTML += "You're obese.";
    }
}