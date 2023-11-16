function adicionarFilme() {
    var filmeFavorito = document.getElementById('filme').value;
    var elementoListarFilmes = document.getElementById('listaFilmes');
    elementoListarFilmes.innerHTML = elementoListarFilmes.innerHTML + '<video controls=' + 'source src=' + filmeFavorito + 'type="video/mp4' + '>';
    document.getElementById('filme').value = '';
}