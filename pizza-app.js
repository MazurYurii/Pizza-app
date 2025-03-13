//Callbacks hell

const storeRoom = {
    ingredients: ['грибы', 'салями', 'бекон', 'курица', 'кукуруза', 'томаты', 'ананасы', 'пармезан' ],
    souses: ['белый', 'красный'],
};

let orderFulFilment = (ingredients, sous, production) => {
    setTimeout(() => {
        const missingIngredients = ingredients.filter(ingredient => {
            return !storeRoom.ingredients.includes(ingredient);
        });

        if(missingIngredients.length) {
            console.log(`Извините, у нас сейчас закончиличь следующие продукты: ${missingIngredients.join(', ')}. Попробуйте применить другой сотав продуктов. `);
        } else {
            const ingredientsToAdd = storeRoom.ingredients.filter(ingredient => {
                return ingredient.includes(ingredient);
            });
            console.log(`Приступаем к приготовлению пици используя следующие продукты: ${ingredientsToAdd.join(', ')}. Для основания используем ${sous} соус.`);
            production();
        }
    }, 1000);
}

let preparePizza = () => {
    setTimeout(() => {
        console.log('Приготовление ингредиентов для пици окончено.');

        setTimeout(() => {
            console.log('На основу нанесен соус.');

            setTimeout(() => {
                console.log('Выпекание пици окончено.');

                setTimeout(() => {
                    console.log('Порезали пицу и выдали клиенту. Приятного аппетита!');
                }, 1000);
            }, 3000);
        }, 1000);
    }, 2000);
}

orderFulFilment(['курица', 'бекон', 'томаты', 'пармезан'], 'белый', preparePizza);
