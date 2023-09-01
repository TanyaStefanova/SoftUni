// Решение от файла със задачите:

// function solve() {

//     let canCast = state => ({

//         cast: spell => {
//             console.log(`${state.name} cast ${spell}`);
//             state.mana--;
//         }
//     })

//     let canFight = state => ({
//         fight: () => {
//             console.log(`${state.name} slashes at the foe!`);
//             state.stamina--;
//         }
//     })

//     let mage = name => {

//         let state = {
//             name,
//             health: 100,
//             mana: 100,
//         }

//         return Object.assign(state, canCast(state));
//     };

//     let fighter = name => {

//         let state = {
//             name,
//             health: 100,
//             stamina: 100,
//         }

//         return Object.assign(state, canFight(state));
//     }

//     return { mage, fighter };
// }

// let create = solve();
// const scorcher = create.mage("Scorcher");
// scorcher.cast("fireball")
// scorcher.cast("thunder")
// scorcher.cast("light")

// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight()

// console.log(scorcher2.stamina);
// console.log(scorcher.mana);



// Решение на К.Митев:

// function solve() {

//     let fighter = function (name = '') {

//         [this.name, this.health, this.stamina] = [name, 100, 100];

//         // Еквивалентен запис:
//         this.name = name;
//         this.health = 100;
//         this.stamina = 100;

//         this.fight = () => {
//             this.stamina--;
//             console.log(`${this.name} slashes at the foe!`);
//         }
//     }

//     let mage = function (name = '') {
//         [this.name, this.health, this.mana] = [name, 100, 100];

//         this.cast = (spell) => {
//             this.mana--;
//             console.log(`${this.name} cast ${spell}`);
//         }


//     }

//     return {
//         // Слагаме дифолтна стойност ''
//         fighter: (name = '') => new fighter(name),
//         mage: (name = '') => new mage(name)
//     };
// }

// Трето решение (К.Митев казва, че в джъдж си минава, но в практиката не е хубаво в return да се вкарва чак толкова логика и по-добре да използваме синтаксиса с функциите - неговото решение):
function solve() {

    return {
        fighter: function (name) {
            return {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    this.stamina--;
                    console.log(`${this.name} slashes at the foe!`);
                }
            }
        },
        mage: function (name) {
            return {
                name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    this.mana--;
                    console.log(`${this.name} cast ${spell}`);
                }
            }
        }
    }
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

// Решение на Д.Кръстанов:
// function solve(){
//     let health = 100;
//     let manaOrStamina = 100;

//     const create = {
//         fighter: (name) => {
//             return {
//                 name,
//                 health,
//                 stamina: manaOrStamina,
//                 fight(){
//                     this.stamina--;
//                     console.log(`${this.name} slashes at the foe!`);
//                 }
//             }
//         },
//         mage: (name) => {
//             return{
//                 name,
//                 health,
//                 mana: manaOrStamina,
//                 cast(spell){
//                     this.mana--;
//                     console.log(`${this.name} cast ${spell}`);
//                 }
//             }
//         }
//     }
//     return create;
// }

// Решение на Д.Кръстанов с клас:
//  class Mage{
//     constructor(name, health, mana){
//         this.name = name;
//         this.health = health;
//         this.mana = mana;
//     }

//     cast(spell){
//         this.mana--;
//         console.log(`${this.name} cast ${spell}`);
//     }
//  }
//  class Fighter{
//     constructor(name, health, stamina){
//         this.name = name;
//         this.health = health;
//         this.stamina = stamina;
//     }

//     cast(spell){
//         this.stamina--;
//         console.log(`${this.name} slashes at the foe!`);
//     }
//  }
