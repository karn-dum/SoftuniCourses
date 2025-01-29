// JavaScript code for the above approach 
  
function printSpiral(matrix) { 
    let result = []; 
    let top = 0; 
    let bottom = matrix.length - 1; 
    let left = 0; 
    let right = matrix[0].length - 1; 
  
    // Loop while the elements  
    // are within the boundaries. 
    while (top <= bottom 
        && left <= right) { 
        // Print top row 
        for (let i = left; 
            i <= right; i++) { 
            result.push(matrix[top][i]); 
        } 
        // Move the top boundary down. 
        top++; 
  
        // Print right column 
        for (let i = top; 
            i <= bottom; i++) { 
            result.push(matrix[i][right]); 
        } 
        // Move the right boundary to the left. 
        right--; 
  
        // Check if there are more rows 
        if (top <= bottom) { 
            // Print bottom row 
            for (let i = right; 
                i >= left; i--) { 
                result.push(matrix[bottom][i]); 
            } 
            // Move the bottom boundary up. 
            bottom--; 
        } 
  
        // Check if there are more columns 
        if (left <= right) { 
            // Print left column 
            for (let i = bottom; 
                i >= top; i--) { 
                result.push(matrix[i][left]); 
            } 
            // Move the left boundary to the right. 
            left++; 
        } 
    } 
  
    // Print the result 
    console.log(result.join(' ')); 
} 
  
// Example 
const matrix = [ 
    [1, 2, 3, 4], 
    [5, 6, 7, 8], 
    [9, 10, 11, 12], 
    [13, 14, 15, 16] 
]; 
printSpiral(matrix);
// Output
// 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
