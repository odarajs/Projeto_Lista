var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null ){
  var people = JSON.parse(peopleRaw);
}else{
  var people = [];
}

function desenhaTabela() {
  currentLines = [...document.querySelectorAll("table.lista tbody .dinamic-content")];
  currentLines.forEach((element) => {
    element.remove();
  });

  for (person in people) {
    document.querySelector("table.lista tbody").innerHTML += `
    <tr class="dinamic-content" style="background-color: ${ ((person % 2 == 0) ? "#4169E1" : "#00BFFF") }">
      <td>
        ${people[person].nome}
      </td>
      <td>
        ${people[person].tel}
      </td>
      <td> 
        ${ (people[person].xp ? '<span style="color: #FFD700">Sim</span>' : '<span style="color:#363636">Não</span>') }
      </td>
      <td>
        <button onclick="deleteUser(${person})">Excluir</button>
        <a href="./form/form.html?${person}">Editar</a>
      </td>
    </tr>
    `
  }
}

function deleteUser(p){
  people.splice(p, 1);
  desenhaTabela()
  localStorage.setItem('people', JSON.stringify(people))
}

desenhaTabela();


