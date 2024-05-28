// callback funnction

function myfunc2() {
    console.log("inside my func 2");
}

function myfunc(callback) {
    console.log("hello there i am Rix");
    callback();
}

myfunc(myfunc2);