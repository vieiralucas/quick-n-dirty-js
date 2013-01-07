var foo = function() {
    if (true) {
        function bar () {
            console.log("true");
        }
    } else {
        function bar () {
            console.log("false");
        }
    }

    return bar;
};

var fn = foo();
fn(); // wtf?!