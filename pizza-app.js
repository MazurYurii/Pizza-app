//Pizza shop

const storeRoom = {
    ingredients: ['грибы', 'салями', 'бекон', 'курица', 'кукуруза', 'томаты', 'ананасы', 'пармезан' ],
    souses: ['белый', 'красный'],
};


let isAllGood = false;
let missingIngredients = [];
let selectedIngredients = [];
let selectedSous = '';

let getOrder = (ingredients, sous) => {
    missingIngredients = ingredients.filter(ingredient => {
        return !storeRoom.ingredients.includes(ingredient);
    });
    isAllGood = !missingIngredients.length;
    selectedIngredients = storeRoom.ingredients.filter(ingredient => {
        return ingredient.includes(ingredient);
    });
    selectedSous = sous;
}


let preparePizza = (time, work) => {
    return new Promise((resolve, reject) => {
        if(isAllGood) {
            setTimeout(() => {
                resolve(work());
            }, time)
            
        } else {
            reject(`Извините, у нас сейчас закончиличь следующие продукты: ${missingIngredients.join(', ')}. Попробуйте применить другой сотав продуктов. `);
        }
    })
}

let prepareOrder = () => {
    console.log(`Приступаем к приготовлению пици используя следующие продукты: ${selectedIngredients.join(', ')}. Для основания используем ${selectedSous} соус.`);
}
let prepareIngredients = () => {
    console.log('Приготовление ингредиентов для пици окончено.');
}
let addSous = () => {
    console.log('На основу нанесен соус.');
}
let bake = () => {
    console.log('Выпекание пици окончено.');
}
let orderCompletion = () => {
    console.log('Порезали пицу и выдали клиенту. Приятного аппетита!');
}


//Async/await
let orderFulFillment = async () => {
    getOrder(['курица', 'бекон', 'томаты', 'пармезан'], 'белый', preparePizza);

    try {
        await preparePizza(1000, prepareOrder);
        await preparePizza(2000, prepareIngredients);
        await preparePizza(1000, addSous);
        await preparePizza(3000, bake);
        await preparePizza(1000, orderCompletion);
    } catch(error) {
        console.log(error);
    } finally {
        console.log('Хорошего Вам дня! Приходите к нам еще))');
    }
}

orderFulFillment();

