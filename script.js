function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let result = ""; // This will store the final Roman numeral

  for (let i = 0; i < romanNumerals.length; i++) {
    const symbol = romanNumerals[i][0]; // Roman symbol like 'M', 'D', 'C'
    const value = romanNumerals[i][1];  // Numeric value like 1000, 500, 100

    // Keep subtracting value from num and adding symbol to result
    while (num >= value) {
      result += symbol;  // Add symbol to result string
      num -= value;      // Subtract value from num
    }
  }

  return result; // Return the final Roman numeral
}

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));





