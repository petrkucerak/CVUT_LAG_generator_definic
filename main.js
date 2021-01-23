var topics = ['Těleso', 'Lineární prostor', 'Vektor', 'Seznam', 'Linearni kombinace', 'Linearni nezavislost', ' Linearni zavislost', 'Linearni obal', 'Linearni podprostor', 'Mnozina generatoru', 'Baze', 'Dimenze', 'Souradnice', 'Linearni zobrazeni', 'Jadro', 'Image', 'Monomorfismus', 'Epimorfismus', 'Isomorfismus', 'Regularni matice', 'Singularni matice', 'Permutace', 'Symetricka grupa permutaci', 'Determinant ctvercove matice', 'Vlastni hodnota, vektor a podrporstor', 'Charakteristicky polynom', 'Podobnost matic', 'Diagonalni matice', 'Diagonalizovatelna matice', 'Nilpotentni matice a index nilpotence', 'Abstraktni skalarni soucin', 'Positivne definitivni matice', 'Norma vektoru', 'Metrika', 'Ortogonalita (kolmost) vektoru', 'Ortogonalni baze', 'Gramuv determinant', 'Vektorovy soucin', 'Afini podprostor', 'Adjunkovana matice', 'Rozvoj podle...'];

function generateNewTopic() {
    var topic = topics[Math.floor(Math.random() * topics.length)];
    document.getElementById("topic").innerHTML = topic;
}
