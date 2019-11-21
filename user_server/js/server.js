const url="https://jsonplaceholder.typicode.com/todos"
fetch(url)
.then((response) => response.json())
.then( (data) =>{
    const server = document.querySelector('#server');
    data.forEach(total => {
        if(total.id <=12){
            server.innerHTML +=`
            <ul class="list-group">
                <li class="list-group-item">${total.id}</li>
                <li class="list-group-item">${total.title}</li>
                <li class="list-group-item">${total.completed}</li>
            </ul>
          `;
        }
    });
})
.catch( () =>console.error("My name is sovath"))
.finally( () => console.warn("I come from preah hear"))