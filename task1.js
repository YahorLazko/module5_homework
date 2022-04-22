let num = +prompt("Введите число");
if(typeof(num) !== 'number'){
    console.log("Упс, кажется, вы ошиблись");
}
else{
    if(isNaN(num)){
        console.log("NaN");
    }
    else{
        if(num % 2 == 0){
            console.log("число четное");
        }
        else{
            console.log("число нечетное");
        };
    };
};


//нет необходимости проверять тип данных, так как унарный плюс делает переменную числом, без него будет строка через prompt