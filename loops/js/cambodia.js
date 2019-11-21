// location file
const url ="src/khmer.json";

//request
fetch(url)
.then(function(response){
    return response.json();
})

// get result
.then(function(data){
    data.forEach(item => {
        const table = document.querySelector('table');
        table.innerHTML +=`
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.native_name}</td>
                <td>${item.capital}</td>
                <td>${item.area}</td>
            <tr>
        `;
    });
})

// if cannot request
.catch(function(){
    return console.log("connot request");
})