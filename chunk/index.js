// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // solution 3
  // let chunked = [];
  // let index = 0;
  // while (index < array.length) {
  //   chunked.push(array.slice(index, size + index));
  //   index = index + size;
  // }
  //   return chunked;
  // SOLUTION 2
  // const chunked = [];
  // for (let element of array) {
  //   const last = chunked[chunked.length - 1];
  //   if (!last || last.length === size) {
  //     chunked.push([element]);
  //   } else {
  //     last.push(element);
  //   }
  // }
  // return chunked;
  //SOLUTOIN 1
  //   let arrChunk = [];
  //   let chunk = []; // Declare `chunk` outside the loop
  //   for (let val of array) {
  //     chunk.push(val); // Add the current value to the chunk
  //     if (chunk.length === size) {
  //       // When the chunk reaches the desired size
  //       arrChunk.push(chunk); // Add the chunk to the result array
  //       chunk = []; // Reset the chunk for the next group
  //     }
  //   }
  //   if (chunk.length > 0) {
  //     // Add any remaining elements as the last chunk
  //     arrChunk.push(chunk);
  //   }
  //   return arrChunk;
}

module.exports = chunk;
