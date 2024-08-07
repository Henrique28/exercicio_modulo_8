const formContato = document.getElementById('form-contato');
const nomeContatos = [];
const celularContatos = [];


formContato.addEventListener('submit', function (e) {
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha() {
    const campoNome = document.getElementById('nome-contato');
    const campoCelular = document.getElementById('celular-contato');
    const tabelaContatos = document.querySelector('tbody');

    if (celularContatos.includes(campoCelular.value)) {
        alert(`O número ${campoCelular.value} já existe`)
    }else{
        nomeContatos.push(campoNome.value);
        celularContatos.push(campoCelular.value);

        let linha = '<tr>';
        linha += `<td>${campoNome.value}</td>`;
        linha += `<td><a href="tel:${campoCelular.value}">${campoCelular.value}</a></td>`;
        linha += `<tr>`;

        tabelaContatos.insertAdjacentHTML('beforebegin', linha);

        campoNome.value = '';
        campoCelular.value = '';
    }
}