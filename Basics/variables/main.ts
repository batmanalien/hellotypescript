function doSomething (){
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //var means that i is scoped within the nearest function
    //if change to let, i is only available within the for loop
    console.log('Finally: ' + i);
}

doSomething();