let listaAlunos =['João', 'Maria', 'José', 'Hurley', 'Kate', 'Sawyer', 'Jack']

for (let index = 0; index < listaAlunos.length; index++) {
   
    if (index == 0) { (console.log)(index +': é zero') }
    else if (index % 2 == 1) { console.log (index +': é ímpar') }
    else { (console.log) (`${index}: é par`) }
}