// Importing the prompt-sync module for synchronous input
const prompt = require("prompt-sync")({ sigint: true });

// Prompting the user to enter their salary and benefits
const basicSalaryStr = prompt("Please enter your basic salary:");
const benefitsStr = prompt("Please enter your benefits:");

//Calculating the Gross Salary
function calculateGrossSalary(){
    const basicSalary = parseFloat(basicSalaryStr);
    const benefits =parseFloat(benefitsStr);
    const grossSalary = basicSalary - benefits;
    console.log(`Gross Salary: ${grossSalary}`)
    return grossSalary;
}

const grossSalary = calculateGrossSalary();

//calculating the PAYE based on th gloss salary
function getPAYE(grossSalary){
    let PAYE;
    if (grossSalary <= 24000){
        PAYE = 0.1 * grossSalary;
    } else if (grossSalary <= 32333){
        PAYE = 0.25 * grossSalary;
    } else if (grossSalary <= 500000){
        PAYE = 0.3 * grossSalary;
    }else if (grossSalary <= 800000){
        PAYE = 0.325 * grossSalary;
    }else if (grossSalary > 800000){
        PAYE = 0.35 * grossSalary;
    }
    return PAYE;
}
const PAYE = getPAYE(grossSalary);

//Calculating NHIF deductions based on the gloss salary
function getNHIFDeductions(grossSalary){
    let NHIFdeduction;
    if (grossSalary <= 5999){
        NHIFdeduction = 150;
    }else if(grossSalary <= 7999){
        NHIFdeduction = 300;
    }else if(grossSalary <= 11999){
        NHIFdeduction = 400;
    }else if(grossSalary <= 14999){
        NHIFdeduction = 500;
    }else if(grossSalary <= 19999){
        NHIFdeduction = 600;
    }else if(grossSalary <= 24999){
        NHIFdeduction = 750;
    }else if(grossSalary <= 29999){
        NHIFdeduction = 850;
    }else if(grossSalary <= 34999){
        NHIFdeduction = 900;
    }else if(grossSalary <= 39999){
        NHIFdeduction = 950;
    }else if(grossSalary <= 44999){
        NHIFdeduction = 1000;
    }else if(grossSalary <= 49999){
        NHIFdeduction = 1100;
    }else if(grossSalary <= 59999){
        NHIFdeduction = 1200;
    }else if(grossSalary <= 69999){
        NHIFdeduction = 1300;
    }else if(grossSalary <= 79999){
        NHIFdeduction = 1400;
    }else if(grossSalary <= 89999){
        NHIFdeduction = 1500;
    }else if(grossSalary <= 99999){
        NHIFdeduction = 1600;
    }else {
        NHIFdeduction = 1700;
    }
    console.log(`NHIFDeduction: ${NHIFdeduction}`)
    return NHIFdeduction;
}

const NHIFdeduction = getNHIFDeductions(grossSalary);

//Calculating the NSSF deductions
function getNSSFDeductions (){
    let NSSFDeductions;
    if (grossSalary <= 18000){
        NSSFDeductions = 420;
    }else {
        NSSFDeductions = 1740;
    }
    console.log(`NSSFDeductions: ${NSSFDeductions}`)
    return NSSFDeductions;
}

const NSSFDeductions = getNSSFDeductions (grossSalary);

//Calculating the net salary
function calculateNetSalary(PAYE,NHIFDeduction,NSSFDeductions){
    const netSalary = grossSalary - PAYE - NHIFDeduction - NSSFDeductions;
    console.log(`Net Salary: ${netSalary}`);
    return netSalary;
}
calculateNetSalary(PAYE, NHIFdeduction,NSSFDeductions);
