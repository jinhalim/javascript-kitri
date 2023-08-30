const todos = [
    {

        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {

        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {

        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {

        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {

        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {

        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {

        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {

        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {

        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    }];
console.log(todos);
//filtering .. 완료된 todo만 조회
console.log(todos.filter(ele => ele.completed));
//filtering .. 미완료된 홀수 todo만 조회
console.log(todos.filter(ele => !ele.completed && !(ele.id % 2 == 0)));
const result = [];
for (const todo of todos) {
    if (!(todo.completed) && !(todo.id % 2 == 0)) {
        result.push(todo);
    }
}
console.log(result);

console.log(todos.map(todo => {
    return {
        id: todo.id,
        title: todo.title,
        completed: todo.completed ? '완료' : '미완료'
    }
}));
console.log(todos.map(todo => {
    return {
        ...todo,
        completed: todo.completed ? '완료' : '미완료'
    }
}))

//짝수 id todo 조회하여 완료/미완료로 수정 (메소드체인링)
console.log(todos.filter(todo => todo.id % 2 == 0)
    .map(todo => { return { ...todo, completed: todo.completed ? '완료' : '미완료' } }))