const prompt = require("prompt-sync")();
// declaring variables to be used in functions outside the actual functions to avoid errors.
let basicSalary = parseFloat(prompt('What is your monthly basic salary?'));
let benefits = parseFloat(prompt('Have any  monthly taxable benefits?What is the sum of all of them?'));
const grossPay = basicSalary + benefits;
let taxablePay ;
let payAsYouEarn;
let NHIFContribution;
let nssfContribution;
let pensionablePlan = prompt('Have any pension plans? Enter (yes) if you do and if not enter (no).');
let pensionablePay;
let netSalary;
function calculatePaye(){
  taxablePay = (grossPay - 1080);

  if(taxablePay <= 24000){
     payAsYouEarn = Math.floor((taxablePay) *10/100 -(2400))
    return payAsYouEarn;
  } else if(taxablePay>= 24001 && taxablePay <= 32333){
    payAsYouEarn = Math.floor((taxablePay) * 25/100 -(2400))
    return payAsYouEarn;
  } else if (taxablePay>= 32334 && taxablePay <= 500000){
    payAsYouEarn = Math.floor((taxablePay ) *30/100-(2400) )
    return payAsYouEarn;
  } else if (taxablePay>= 500001 && taxablePay <= 800000){
    payAsYouEarn = Math.floor((taxablePay) *32.5/100-(2400) )
    return payAsYouEarn;
  } else {
    payAsYouEarn = Math.floor((taxablePay) *35/100 -(2400))
    return payAsYouEarn;
  }
}

    function calculateNhif(){if(taxablePay<= 5999){
    nhifContribution = 150;
    return nhifContribution;
  } else if(taxablePay>= 6000 && taxablePay<= 7999){
    nhifContribution = 300;
    return nhifContribution;
  } else if(taxablePay>= 8000 && taxablePay<= 11999){
    nhifContribution = 400;
    return nhifContribution;
} else if(taxablePay>= 12000 && taxablePay<= 14999){
    nhifContribution = 500;
    return nhifContribution;
} else if( taxablePay>= 15000 && taxablePay<= 19999){
    nhifContribution = 600;
    return nhifContribution;
} else if(taxablePay>= 20000 && taxablePay <= 24999){
    nhifContribution = 750;
    return nhifContribution;
} else if (taxablePay>= 25000 && taxablePay <= 29999){
    nhifContribution = 850;
    return nhifContribution;
} else if (taxablePay>= 30000 && taxablePay <= 34999){
    nhifContribution = 900;
    return nhifContribution;
} else if (taxablePay>= 35000 && taxablePay <= 39999){
    nhifContribution = 950;
    return nhifContribution;
} else if (taxablePay>= 40000  && taxablePay <= 44999){
    nhifContribution = 1000;
    return nhifContribution;
} else if(taxablePay>= 45000 && taxablePay <= 49999){
    nhifContribution = 1100;
    return nhifContribution;
} else if(taxablePay>= 50000 && taxablePay <= 59999){
    nhifContribution = 1200;
    return nhifContribution;
} else if(taxablePay>= 60000 && taxablePay <= 69999){
    nhifContribution = 1300;
    return nhifContribution;
} else if ( taxablePay>= 70000 && taxablePay <= 79999){
    nhifContribution = 1400;
    return nhifContribution;
} else if (taxablePay>= 80000 && taxablePay <= 89999){
    nhifContribution = 1500;
    return nhifContribution;
} else if (taxablePay>= 90000 && taxablePay<= 99999){
    nhifContribution = 1600;
    return nhifContribution;
} else {
    nhifContribution = 1700;
    return nhifContribution;
}
}
//calculating nssfContribution using if, else if and else.
function calculateNssf(){
  if(pensionablePlan = 'yes'){
    pensionablePay = prompt('What is your total monthly pensionable pay?')
     nssfContribution = Math.floor((pensionablePay) *6/100)
     return nssfContribution;
  } else if( pensionablePlan ='no'){
    pensionablePay = 0;
     nssfContribution = Math.floor((pensionablePay) *6/100);
     return nssfContribution;
  }else{
    return "error"
  }
}
//calculating netSalary using if, else if and else.
function calculateNetSalary(){
    netSalary = (grossPay - (payAsYouEarn + nhifContribution + nssfContribution));
    alert(`Your net salary is ${netSalary}`)
    return  netSalary = (grossPay - (payAsYouEarn + nhifContribution + nssfContribution));
}
//calling the working functions in order of exeution.
calculatePaye();
calculateNhif();
calculateNssf();
calculateNetSalary();
console.log(calculateNetSalary());