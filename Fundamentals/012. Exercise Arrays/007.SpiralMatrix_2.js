// JavaScript code for the above approach

function printSpiral(r, c) {
    let matrix = [];
    for (let i = 0; i < r; i++) {
    let innerArr = [];
    for (let j = 0; j < c; j++) {
      innerArr.push(0);
    }
    matrix.push(innerArr);
    //console.log(innerArr);    
  }

  let result = [];
  let top = 0;
  let bottom = c - 1;
  let left = 0;
  let right = r - 1;
  let counter = 1;
  // Loop while the elements
  // are within the boundaries.
  while (top <= bottom && left <= right) {
    // Print top row
    for (let i = left; i <= right; i++) {
      matrix[top][i] = counter++;
    }
    // Move the top boundary down.
    top++;

    // Print right column
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = counter++;
    }
    // Move the right boundary to the left.
    right--;

    // Check if there are more rows
    if (top <= bottom) {
      // Print bottom row
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = counter++;
      }
      // Move the bottom boundary up.
      bottom--;
    }

    // Check if there are more columns
    if (left <= right) {
      // Print left column
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = counter++;
      }
      // Move the left boundary to the right.
      left++;
    }
  }
  // Print the result
  for(let i = 0; i < r; i++){
    console.log(matrix[i].join(' '));    
  }
}
printSpiral(3, 3);
