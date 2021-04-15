function traveling(input) {
    let destination = input[0];
    let minSum = Number(input[1]);
    let savings = 0;
    let index = 1;
   
    while (destination !== "End") {
      index++;
      while (savings < minSum) {
        savings += Number(input[index]);
        index++;
      }
      console.log(`Going to ${destination}!`);
      destination = input[index++];
      minSum = Number(input[index]);
      savings = 0;
    }
  
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"])
