let arr = [[1, 2, 3], [4, 5], [6]];

console.log(arr.reduce(function(flat, current) {
  return flat.concat(current);
}, []));

//Not understood, comment everything later to understand.