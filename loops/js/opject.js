// for (let KampongCham of districtOfKampongCham){
//     console.log(KampongCham.id);
//     console.log(KampongCham.en_name);
//     console.log(KampongCham.kh_name);
// }



//foreach
districtOfKampongCham.forEach(element => {
    const table = document.querySelector('table');
    table.innerHTML +=`
        <tr>
            <td>${element.id}</td>
            <td>${element.en_name}</td>
            <td>${element.kh_name}</td>
        </tr>
    `; 
})