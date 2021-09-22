// const numbers = [1, 2, 3, 4, 5, 6, 7, -1, -2];
// function SummPositive( numbers ) {
//     var negatives = [];
//     var sum = 0;
  
//     for(var i = 0; i < numbers.length; i++) {
//       if(numbers[i] > 0) {
//         negatives.push(numbers[i]);
//       }else{
//         sum += numbers[i];
//       }
//     }
  
//     console.log(negatives);
  
//     return sum;
//   }
  
//   var sum_result = SummPositive( [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10,-52 ] );
  
//   console.log(sum_result);

var numbers = [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10,-52 ];

  function sumPositive(numbers) {
      var positive = [];
      for(var i = 0; i < numbers.length; i++) {
          if(numbers[i] > 0) {
              positive.push(numbers[i]);
          }
      }
      return positive;
  }

  console.log(sumPositive(numbers));