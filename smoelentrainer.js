var pictures = [{
  name: "Bruno Varela",
  picture: "img/BrunoVarela.jpg"
  },
  {
  name: "Daley Blind",
  picture: "img/DaleyBlind.jpg"
  },
  {
  name: "David Neres",
  picture: "img/DavidNeres.jpg"
  },
  {
  name: "Dušan Tadić",
  picture: "img/DušanTadić.jpg"
  },
  {
  name: "Hassane Bandé",
  picture: "img/HassaneBandé.jpg"
  },
  {
  name: "Issam el Maach",
  picture: "img/IssamelMaach.jpg"
  },
  {
  name: "Lassina Traoré",
  picture: "img/LassinaTraore.jpg"
  },
  {
  name: "Nicolás Tagliafico",
  picture: "img/NicolásTagliafico.jpg"
  },
  {
  name: "Nkol Ngok",
  picture: "img/NkolNgok.jpg"
  },
  {
  name: "Noussair Mazraoui",
  picture: "img/NoussairMazraoui.jpg"
  },
  {
  name: "Perr Schuurs",
  picture: "img/PerrSchuurs.jpg"
  },
  {
  name: "Stan van Bladeren",
  picture: "img/StanvanBladeren.jpg"
  }

];
var selectedimg;
var selectedName;
const buttons = document.querySelectorAll('.button');
buttons.forEach(element => {
    console.log(element.id);
    element.onclick = function() {
      selectedimg = document.getElementById(element.id);
      console.log(selectedimg);
      checkClicked();
    };

});
const buttons1 = document.querySelectorAll('.button-1');
buttons1.forEach(element => {
  console.log("jo mensen");
    console.log(element.id);
    element.onclick = function() {
      selectedName = document.getElementById(element.id);
      console.log(selectedName);
      checkClicked();
    };

});


function checkClicked(){
  if (selectedimg != undefined || selectedimg != "" || selectedName != undefined || selectedName != "") {
  console.log(selectedimg, selectedName);
  console.log("slebba");
  }
}

const name = document.querySelectorAll('.button-1');
name.forEach(element => {
    console.log(element.id);
    element.onclick = function() { compare(element.id); };
});



var numbers = [0,1,2,3,4,5,6,7,8,9,10,11];
var checkName;
var checkImg;

for (var i = 0; i < pictures.length; i++) {
  var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(randomNum);
  var numbercheck = numbers.indexOf(randomNum);
  numbers.splice(numbercheck,1);
  document.getElementById('img-'+i).src = pictures[randomNum].picture;
};

// function checkMatch() {
// // loop door colors
//  selectedimg.forEach(selectedimg => {
//
// // loop door colors van personen
//   pictures.forEach(pictures => {
//
//  // zoek in elke voorkeurs kleuren van de persoon of de kleur overeenkomt met de kleuren waar ik door heen loop
//     pictures.selectedimg.find(findColor => {
//     console.log(selectedimg)
//     console.log(findColor)
//     console.log(selectedimg == findColor)
//     })
//
//   })
// })
// };

// //get id of clicked item img
// document.querySelectorAll('button').forEach(function(el){
//   el.addEventListener('click', function() {
//     console.log(this.id);
//   });
// });
// //get id of clicked item button
// document.querySelectorAll('button-1').forEach(function(el){
//   el.addEventListener('click', function() {
//     console.log(this.id);
//   });
// });



function compare(id){
  console.log(id);
  var compairecheck;

  // if (name != undefind && buttons != undefind){}

}
