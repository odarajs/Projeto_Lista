
function testaform(e){
        e.preventDefault();


        for (i in e.target.elements['Tel'].value){
           if ('123456789'.indexOf(e.target.elements['Tel'].value[i]) == -1 ){
                alert('Apenas numeros são Permitido no campo telefone')
                return false
            }
        }

        if(e.target.elements['Tel'].value.length < 11){
            alert('numero invalido')
        }
    var peopleRaw = localStorage.getItem(people)
        if (peopleRaw != null ){
        var people = JSON.parse(peopleRaw)
        }else{
        var people = [];
        }
        if(id){
            people[id]= {
                nome:e.target.elements['nome'].value,
                tel:e.target.elements['Tel'].value,
                xp:(e.target.elements['xp'].value == 'True')
                
             }
         } else{

         
        people.push({
            nome:e.target.elements['nome'].value,
            tel:e.target.elements['Tel'].value,
            xp:(e.target.elements['xp'].value == 'True')
            
         })
        }
        localStorage.setItem('people', JSON.stringify(people));

        document.getElementById('home').click()
}
var urlPrincipal = new URL (window.location.href)
var id = urlPrincipal.searchParams.get('person')
if( id !== null){
    var peopleRaw = localStorage.getItem('people')
    if(peopleRaw != null){
        var people = JSON.parse()
    }else{
        var people = [];
    }
}

document.getElementById('nome').value = people[id].nome
document.getElementById('tel').value = people[id].tel
if (people[id].xp){
    document.getElementsByName('xp_yes').checked = true
}else{
    document.getElementsByName('xp_no').checked = true
}