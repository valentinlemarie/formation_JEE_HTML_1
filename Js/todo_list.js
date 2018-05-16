

var liste = [];

function loading(){

}

function addtolist(texte){

  var ul = document.getElementById("todolist");
  var li = document.createElement("li");
  li.onclick = function(){
    li.remove();
  };
  li.appendChild(document.createTextNode(texte));
  ul.appendChild(li);

}

function ajoutListe() {
  var txt = document.getElementById('todotxt').value;
  liste.push(txt);
  addtolist(txt);
}
