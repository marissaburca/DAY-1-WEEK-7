class User{
    constructor(_firstName, _lastName,_age,_location){
        this.firstName= _firstName
        this.lastName= _lastName
        this.age=_age
        this.location=_location
    }
    comparison(number){
        if(this.age > number.age) {return `${this.firstName} è più grande di ${number.firstName}`}
        else {return `${number.firstName} è più grande di ${this.firstName}`}
    }
}

const x = new User('Marissa', 'Burca', 25,'Italia')
const y = new User('Michal', 'Hubac', 26, 'Czechia')
console.log(x.comparation(y))


/* form degli animali */

/* vado a prendere elementi in funzione di id che gli ho dato */

const firstI= document.getElementById('first')
const secondI= document.getElementById('second')
const thirdI= document.getElementById('third')
const fourthI= document.getElementById('fourth')


/* creo una classe che generi automaticamente gli oggetti */
class Pets{
    constructor(_petName,_ownerName,_species,_breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    /* creo funzione che analizzi i nomi */
    sameOwner(owner1, owner2){
        if(owner1 === owner2){
            return console.log(true)}
            else { return console.log(false)}
        }
    }

    /* faccio si che appaia in HTML lista di dati inseriti */
const renderList =function(){
    const ownersList = document.getElementById('files')
    ownersList.innerHTML = '' /* svuoto prima rdi riempire */
    inputs.forEach((input) =>{ /* per ogni lista inserito genero li in html */
        const newInp = document.createElement('li')
        newInp.innerText= `Your pet is named ${input.petName}, you are ${input.ownerName}, your pet belongs to the species of ${input.species} and to the followiong breed : ${input.breed}`
         ownersList.appendChild(newInp) /* appendo a documento */
    })
} 

const inputs =[] /*  genero array vuoto per raccolta dati */

const myForm = document.querySelector('form')
myForm.addEventListener('submit', function(e){
    e.preventDefault() /* prendo il form e tolgo l'event listener originale */

const newContact = new Pets(  /* creo oggetto con con valori presi da form */
    firstI.value,
    secondI.value,
    thirdI.value,
    fourthI.value)
    
    console.log('Contatto creato', newContact) /* in console vei risultato */
    inputs.push(newContact) /* faccio push dell'oggetto nell' array */
    if(inputs.length === 2){
        Pets.sameOwner(inputs[0].ownerName, inputs[1].ownerName)
     }

    firstI.value= ''
    secondI.value= ''
    thirdI.value= ''
    fourthI.value = ''


    renderList()
})