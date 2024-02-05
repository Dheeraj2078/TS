function map(arr, func) {
    return arr.map(func);
}

function map2(arr){
    return arr.map((n) => {
        return parseInt(n);
    })

}
   
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(["1", "2", "3"], (n) => parseInt(n));
  console.log(parsed);

  const parsed2 = map2(["1", "2", "3"]);
  console.log(parsed2);
  