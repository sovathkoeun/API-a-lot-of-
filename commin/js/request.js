const url="https://jsonplaceholder.typicode.com/comments"
fetch(url)
.then( (response) => response.json())
.then( (data) => {
    const list = document.querySelector('#list');
    data.forEach( (item) => {
       if(item.id <=15){
        list.innerHTML += `
        <ul class="list-group">
            <li class="list-group-item active">${item.postId}</li>
            <li class="list-group-item">${item.id}</li>
            <li class="list-group-item">${item.name}</li>
            <li class="list-group-item">${item.email}</li>
            <li class="list-group-item ">${item.body}</li>
        </ul>
        `;
       }
    }); 
})
.catch( () => console.error("I am learn java"))
.finally( () => console.warn("I always go school"))