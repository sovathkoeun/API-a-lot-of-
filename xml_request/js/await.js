
const method = "GET";
const syncs = true;
const ajax = new XMLHttpRequest();
ajax.open(method,url,syncs);
ajax.onload = () => {
    const data = JSON.parse(ajax.response);
    const result = document.querySelector('table');
    data.forEach(element => {
        const {id,name,username} = element;
        if( id != 4 && id != 5  && id != 6 && id != 10){
            result.innerHTML +=`
                 <tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${username}</td>
                 </tr>
            `;
        }
       
    
    })

}
ajax.send();