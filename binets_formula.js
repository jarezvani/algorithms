var binets_formula = {
    fibonacci : function(n){
                    var numerator1 = (1+(5**0.5))/2,
                        numerator2 = (1-(5**0.5))/2,
                        fib;

                    fib = ((numerator1**n)-(numerator2**n))/(5**0.5);

                    return Math.round(fib);
                }
};

//the following should true to the console 3 times:
//spec1 = binets_formula.fibonacci(0)
//console.log(spec1==0)
//
//spec2 = binets_formula.fibonacci(3)
//console.log(spec1==2)
//
//spec3 = binets_formula.fibonacci(6)
//console.log(spec1==8)
