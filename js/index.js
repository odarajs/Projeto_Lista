          
            var people = [
                {
                    nome:'João Aparecido',
                    tel:'(45) 3577-1010',
                    exp:true
                },
                {
                    nome:'Isac dos santos',
                    tel:'(33) 9 9829-1010',
                    exp:false
                },
                {
                    nome:'Victor Helmes',
                    tel:'(25) 9 9122-1010',
                    exp:true
                },
                {
                    nome:'Marcela oliveira',
                    tel:'(45) 9 9828-2922',
                    exp:false
                },
            ];
            function desenhaTabela() {
    currentLines=[...document.querySelectorAll('table.lista tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    });

    for (person in people)   {
        console.log(person)
        console.log(document.querySelector('table.lista tbody').innerHTML += 
        `<tr class="dinamic-content" style="background-color: ${ ((person % 2 == 0) ? '#4169E1' : '#00BFFF')}">
        <td >
            ${people[person].nome}
            </td>
            <td >
            ${people[person].tel}
            </td>
            <td>
            ${(people[person].exp ? '<span style="color: #FFD700">Sim</span>' : '<span style="color:#363636">Não</span>')}
            </td>
        <td>
                <button onclick="people.splice(${person}, 1);desenhaTabela();">Excluir</button>
            </td>
        </tr>
        `)

        }
      }