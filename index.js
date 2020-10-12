let res;
let newData;
let sendData;
let row = document.getElementById('table-id');
let name = document.querySelector('#name');
let lastname = document.querySelector('#lastname');
let result = document.querySelector('.result');
let xhr = new XMLHttpRequest();
let add = document.getElementById('add');

add.onclick = function(){
    let form = document.getElementById('form');
    form.style.display = 'block';
    add.style.display = 'none';
   
  }

function sendJSON() {

    if (lastname.value != 0 || name.value != 0) {
       
        let url = "json.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                res = this.responseText;
                result.innerHTML = this.responseText;

                
            }
            }
            
        };
        var data = JSON.stringify({
            "name": name.value,
            "lastname": lastname.value
        });
        xhr.send(data); 
      
    

    const clearInputs = () => {
        name.value = '';
        lastname.value = '';
    };

    clearInputs();
    location.reload();   
}

async function doRowInTable() {

    let response = await fetch('data.json');
    let content = await response.json();

    for (const key in content) {
        row.innerHTML += `   
<tr> 
<td class="name"> ${content[key].name} </td>
<td class="username">${content[key].lastname}</td>
<td><button id="delete"  >удалить</button></td>
</tr>
`
    }
}

doRowInTable()



// function editJSON(newData) {

//     newData = JSON.parse(res).map(Object.values);
//     for (var i = newData.length - 1; i >= 0; i--) {
//         newData[i][0].name = newData[i][0].name + '(' + newData[i][0].name.length + ')';
//         console.log(newData[i][0].name);
//     }
//     let url = "edit.php";
//     xhr.open("POST", url, true);
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             result.innerHTML = this.responseText;
//         }
//     };
//     sendData = JSON.stringify(newData);
//     xhr.send(sendData);



// }