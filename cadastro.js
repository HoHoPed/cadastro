var nome = "Gabriel"
var idade = 18
var datadoevento = '29/09/2021'
var dataAtual = '21/09/2021'
var quantidade = 4
const participantes = ['Mateus', 'João', 'Julia', 'Jonas']

console.log('Cadastro de Eventos')
console.log('')
console.log("Data atual " +dataAtual)
console.log('')
console.log('A data da Evento é: ' + datadoevento)

if (datadoevento == dataAtual){
    console.log('Não é possivel realizar o cadastro')
    console.log('Consulte a data do evento e tetnte mnovamente!')
}
else{
    console.log('Cadastro erm Andamento!')
}

console.log('Nome do Participante ' + nome+ ', e sua idade é: ' + idade + 'anos')
if (idade >= 18){
    console.log('idade PERMITIDA')
    console.log('Cadastro em andamento!')
}else{
    console.log('Menor de 18 anos, cadastro não permitido!')
}

console.log('')
console.log('lista de participantes')
console.log('' + participantes)
console.log('Quantidade de participantes' + quantidade)
console.log('')
if (quantidade > 100){
    console.log('cadastro não realizado')
    console.log(' quantidade exedeu o limite de 100 pessoas')
}else{
    console.log('cadastro concluido com sucesso')
}
