//Callbacks hell

const storeRoom = {
    ingredients: ['грибы', 'салями', 'бекон', 'курица', 'кукуруза', 'томаты', 'ананасы', 'пармезан' ],
    souses: ['белый', 'красный'],
};

// let orderFulFilment = (ingredients, sous, production) => {
//     setTimeout(() => {
//         const missingIngredients = ingredients.filter(ingredient => {
//             return !storeRoom.ingredients.includes(ingredient);
//         });

//         if(missingIngredients.length) {
//             console.log(`Извините, у нас сейчас закончиличь следующие продукты: ${missingIngredients.join(', ')}. Попробуйте применить другой сотав продуктов. `);
//         } else {
//             const ingredientsToAdd = storeRoom.ingredients.filter(ingredient => {
//                 return ingredient.includes(ingredient);
//             });
//             console.log(`Приступаем к приготовлению пици используя следующие продукты: ${ingredientsToAdd.join(', ')}. Для основания используем ${sous} соус.`);
//             production();
//         }
//     }, 1000);
// }

// let preparePizza = () => {
//     setTimeout(() => {
//         console.log('Приготовление ингредиентов для пици окончено.');

//         setTimeout(() => {
//             console.log('На основу нанесен соус.');

//             setTimeout(() => {
//                 console.log('Выпекание пици окончено.');

//                 setTimeout(() => {
//                     console.log('Порезали пицу и выдали клиенту. Приятного аппетита!');
//                 }, 1000);
//             }, 3000);
//         }, 1000);
//     }, 2000);
// }

// orderFulFilment(['курица', 'бекон', 'томаты', 'пармезан'], 'белый', preparePizza);

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

getOrder(['курица', 'бекон', 'томаты', 'пармезан'], 'белый', preparePizza);

preparePizza(1000, prepareOrder)
.then(() => {
    return preparePizza(2000, prepareIngredients);
})
.then(() => {
    return preparePizza(1000, addSous);
})
.then(() => {
    return preparePizza(3000, bake);
})
.then(() => {
    return preparePizza(1000, orderCompletion);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('Хорошего Вам дня! Приходите к нам еще))');
})

