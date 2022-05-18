const myLife = {
    name: "Maga",
    mood: 2,
    meal: 1,
    energy: 3,
    aggress: 4,
    characteristics: {
    age: 20,
    growthSm: 184,
    growthM: "1.84"
    },
    
    
    sleep: function () {
        if (this.energy < 3) {
            console.log('Я хочу спать')
        } else {
            console.log('Т1ебахиит')
        }
    },
    eat: function () {
        if (this.meal === 0) {
            this.energy--;
            console.log('Со мац велла')
        }
    },
    playing: function () {
        if (this.mood < 4) {
        this.aggress++;
        this.meal--
        console.log('Д1аяккха д1а')
        }
    },
    aggressed: function () {
        if (this.aggress > 3) {
            this.energy++;
            console.log('1ад1елахь, маст йолш вац хьун со')
        }
    },
    getСonclusion: function () {
        console.log (`Имя: ${this.name}, Настроение: ${this.mood}, Еда: ${this.meal}, Энергия: ${this.energy}, Агрессия: ${this.aggress}, Характеристики: ${this.characteristics}`)
    }
}
//проверено, все работает нормально
