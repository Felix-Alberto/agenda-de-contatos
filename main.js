const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }
  
  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }
const form = document.getElementById('form-atividades');
linhas = ''
form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato')
    const inputNumeroTelefone = document.getElementById('numero-telefone')

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>'

    linhas += linha
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas;

    inputNomeContato.value = ''
    inputNumeroTelefone.value = ''

});