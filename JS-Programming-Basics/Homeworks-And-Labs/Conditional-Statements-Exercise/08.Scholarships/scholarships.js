function scholarship(arg1, arg2, arg3) {
    let income = Number(arg1);
    let averageSuccess = Number(arg2);
    let minimumWage = Number(arg3);
    let socialScholarship = minimumWage * 0.35;
    let scholarshipExcellantResults = averageSuccess * 25;
    if (income < minimumWage && averageSuccess > 4.50) {
        socialScholarship = Math.floor(socialScholarship);
    }
  
    if (averageSuccess >= 5.50) {
        scholarshipExcellantResults = Math.floor(scholarshipExcellantResults);
    }
  
    if (socialScholarship > scholarshipExcellantResults) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (scholarshipExcellantResults >= socialScholarship) {
        console.log(`You get a scholarship for excellent results ${scholarshipExcellantResults} BGN`);
    } else {
        console.log('You cannot get a scholarship!');
    }
  
  }
scholarship("300.00", "5.65", "420.00")
