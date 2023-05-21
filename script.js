document.getElementById('submit-btn').addEventListener('click', function(){
  var weight = document.getElementById(`weight`).value;

  var height = document.getElementById(`height`).value;

  var heightInCm = height / 100
  var BMI = weight / (heightInCm * heightInCm);
  document.getElementById(`result`).innerHTML = BMI;

  switch(true){
    case (BMI < 18 && BMI >= 0):
      document.getElementById(`bmi`).innerHTML = "Under Weight";
      break;
    case (BMI >= 18 && BMI <= 29.9):
      document.getElementById(`bmi`).innerHTML = "Normal";
      break;
    case (BMI >= 30 && BMI <= 34.9):
      document.getElementById(`bmi`).innerHTML = "Over Weight";
      break;
    case (BMI >= 35 && BMI <= 39.9):
      document.getElementById(`bmi`).innerHTML = "Obese";
      break;
    case (BMI >= 40):
      document.getElementById(`bmi`).innerHTML = "Extremely Obese";
      break;
      
      default:
        console.log("invalid");
  }
      
      
})