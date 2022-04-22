let X;
if (typeof(X)==='number'){
    console.log(`тип переменной ${X} число`);
}
else{
    if(typeof(X)==='string'){
        console.log(`тип переменной ${X} строка`);
    }
    else{
        if(typeof(X)==='boolean'){
            console.log(`тип переменной ${X} логический тип`);
        }
        else{
            console.log(`Тип ${X} не определён`);
            //console.log(`Тип ${X} ${typeof(X)}`);
        }
    };
};