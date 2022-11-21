console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
/*const promise = new Promise((resolve,reject) => {
} )
console.log(promise)*/
// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

/*const promise = new Promise((resolve,reject) => {
   let data = 'Promise Data'
   return  resolve(data)
} )
console.log(promise)*/

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
/*const promise = new Promise((resolve,rejected) => {
   let data = 'Promise Error'
   return  rejected(data)
} )
console.log(promise)*/

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

/*const promise = new Promise((resolve,reject) => {
   let data = 'Promise Data'
    setTimeout(() => {
       resolve(data)
   },3000)

} )
promise.then(data => {
    console.log(data)
})*/


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
/*const onSuccess =(data:string) => {
    return data + ' Oleg'
}
const print = (string: string) => {
    console.log(string)
}

const promise = new Promise((resolve) => {
    let data:string = 'My name is'
    setTimeout(() => {
        resolve(data)
    },1000)

} )
promise.then((data) => {
   return onSuccess(data + '')
}).then((data) => {
    print(data)
})*/

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({name: 'Anna'})
    })
})
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({age: 16})
    })
})
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve({city: 'Minsk'})
    })
})


Promise.all([promise1, promise2, promise3]).then((value) => {

    let name = value[0] as { name: string };
    let age = value[1] as { age: number };
    let city = value[2] as { city: string };
    let obj = {...name, ...age, ...city};
    console.log(obj)

})


// just a plug
export default () => {
};