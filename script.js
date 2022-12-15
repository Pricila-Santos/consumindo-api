async function buscaEndereco (cep) {
    try {
    var consultaCep =  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCepConvertido = await consultaCep.json();
    if (consultaCepConvertido.erro) {
        throw Error ('Cep não existente !')
    }
    var cidade = document.getElementById('cidade');
    var logradouro = document.getElementById('endereco');
    var estado = document.getElementById('estado');

    cidade.value = consultaCepConvertido.localidade;
    logradouro.value = consultaCepConvertido.logradouro;
    estado.value = consultaCepConvertido.uf;

    console.log (consultaCepConvertido);
    return consultaCepConvertido;

    } catch (erro) {
    console.log(erro)
    
    }
}
var cep = document.getElementById('cep');
cep.addEventListener("focusout" ,() => buscaEndereco(cep.value));//focusout, um evento que ocorre quando a pessoa clica na parte de fora.









//var consultaCep = fetch('https://viacep.com.br/ws/01001000/json/')
//.then(resposta => resposta.json())//O corpo da resposta de uma requisição chega em formato de bytes. Desta forma o .json() transforma o corpo e retorna um json formatado. O formato JSON (JavaScript Object Notation) possui basicamente a mesma sintaxe que a de um objeto JS.
//.then (r => {
   // if (r.erro){
        //throw Error ('Esse cep não existe')
    //} else
    //console.log(r)})
//.cath (erro => console.log(erro))
//.finally (mensagem => console.log('Processo concluido !'));

//console.log(consultaCep)