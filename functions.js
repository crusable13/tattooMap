
/// 1, 1, 2, 3, 5, 8, 13, 21
// fib(0) = 1
// fib(1) = 1
// fib(2) = fib(1) + fib(0) -> fib(2) = 1 + 1
// fib(x) = fib(x-1) + fib(x-2)




function fib(x) {
	if (x < 0) {
		throw "negative numbers are not falid fib numbers";
	}
	if (x === 0) {
		return 1;
	}
	if (x === 1) {
		return	1;
	}
	return fib(x-1) + fib(x-2);
}

fibDict = {
	0:1, 
	1:1
};

function memoizeFib(x) {
	if (x < 0) {
		throw "negative numbers are not falid fib numbers";
	}
	if (fibDict[x]) {
		return	fibDict[x]
	} else {
		fibDict[x] = memoizeFib(x-1) + memoizeFib(x-2);
		return fibDict[x];
	}
}


