/*//Déclaratio de la variable switchGreen
switchGreen = document.getElementsByClass('.colorGreen');
//Assignation de la fonction colorTextGreen sur l'évenement switchGreen
switchGreen.addEventListener('click',colorTextGreen);
//Déclaration de la variable switchRed
switchRed = document.getElementsByClass('.colorRed');
//Assignation de la fonction colorTextRed sur l'évenement switchRed
switchRed.addEventListener('click',colorTextRed);
//Déclaration de la variable switchBlue
switchBlue = document.getElementsByClass('.colorBlue');
//Assignation de la fonction colorTextBlue sur l'évenement switchblue
switchBlue.addEventListener('click',colorTextBlue);*/
//Déclaration de la fonction colorTextGreen
function colorTextGreen() {
  //Changement de la couleur du texte
  colorTextGreen = document.getElementById('text').style.color = 'green';
}
//Déclaration de la fonction colorTextRed
function colorTextRed() {
  //Changement de la couleur du texte
  colorTextRed = document.getElementById('text').style.color = 'red';
}
//Déclaration de la fonction colorTextBlue
function colorTextBlue() {
  //Changement de la couleur du texte
  colorTextBlue = document.getElementById('text').style.color = 'blue';
}
