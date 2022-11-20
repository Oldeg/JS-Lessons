import axios from "axios";


console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661
axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
    console.log(res.data)
})
axios.post("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    body: JSON.stringify({
        title: 'Star Wars',
        body: 'Film',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => console.log(response.data.body))
axios.put("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => {
    console.log(response.data.body)
})

axios.delete("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE'
})

// just a plug
export default ()=>{};
