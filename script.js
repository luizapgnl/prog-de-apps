function gerarCartao() {
    // pegar valores dos inputs
    const nome = document.getElementById('inputNome').value;
    const idade = document.getElementById('inputIdade').value;
    const curso = document.getElementById('inputCurso').value;
    const cidade = document.getElementById('inputCidade').value;
    const errorMsg = document.getElementById('error-msg');

    // validação simples
    if (!nome || !idade || !curso || !cidade) {
        errorMsg.style.display = 'block';
        return;
    }

    // Esconder erro se estiver tudo certo
    errorMsg.style.display = 'none';

    // atualizar o cartão visual
    document.getElementById('resNome').innerText = nome;
    document.getElementById('resIdade').innerText = `${idade} anos`;
    document.getElementById('resCurso').innerText = curso;
    document.getElementById('resCidade').innerText = cidade;

    // data automática
    const data = new Date();
    const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    document.getElementById('resData').innerText = `${meses[data.getMonth()]} de ${data.getFullYear()}`;
}