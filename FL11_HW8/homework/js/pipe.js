function addOne(x) {
    return x + 1;
  }
  
  function pipe() {
    let args = [...arguments];
    let val = args.shift();
    
    return args.reduce((val, argsFunc) => {
      return argsFunc(val)
    }, val)
  }
  
  pipe(1, addOne, addOne, addOne, addOne)