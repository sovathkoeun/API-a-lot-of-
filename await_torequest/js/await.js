const url ="https://jsonplaceholder.typicode.com/users";
async function getdata(){
    const response = await fetch(url);
    const data = await response.json();
    const reesult = document.querySelector("table");
    // loop array jsons 
    data.forEach(item => {
        // destructuring
        const {id,name,username,email,phone,website} = item;
        if(id <= 8){
            reesult.innerHTML +=`
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${website}</td>
            </tr>
            `;
        }
    });
}
getdata();