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
	picture: "img/DusanTadic.jpg"
	},
	{
	name: "Hassane Bandé",
	picture: "img/HassaneBande.jpg"
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
	picture: "img/NicolasTagliafico.jpg"
	},
	{
	name: "André Onana",
	picture: "img/AndreOnana.jpg"
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
var score = 0;
function makeButtonsClickable(elements) {
	elements.forEach(element => {


			// console.log(element.id);
			element.onclick = function() {
				//check if clicked element is a button or an image
					if (element.id.includes("btn")){
						selectedName = document.getElementById(element.id);
						selectNAME(element.id);
					}
					if (element.id.includes("img") ){
								selectedimg = document.getElementById(element.id);
								selectIMG(element.id);
					}
					if (selectedimg != undefined && selectedName != undefined) {
						checkMatch();
					}
				// console.log(selectedName);
				// checkClicked();
			}
	})
}

const buttons = document.querySelectorAll('.button');
makeButtonsClickable(buttons);
const buttons1 = document.querySelectorAll('.button-1');
makeButtonsClickable(buttons1);





function selectIMG(id){
		//set a border on last selected image and remove all other selected elements
	  const allElements = document.querySelectorAll('selected');
	  allElements.forEach((element) => {
	  		element.classList.remove('selected');
	 	});
		console.log("IMG " + id);

		document.getElementById(selectedimg.id).classList.add("selected");

}

	function selectNAME(id){
			//set a border on last selected name and remove all other selected elements
			const allElements = document.querySelectorAll('selected1');
		  allElements.forEach((element) => {
				  element.classList.remove('selected1');
		  });
			console.log("name " + id);
			document.getElementById(selectedName.id).classList.add("selected1");

	}



	//check if images and name match
	function checkMatch(){
			console.log("reamoved654161");
			var selectedNoMatch;
			// tries++;
			// document.getElementById("triesCounter").innerHTML = tries;
			// resetAnimation();

			// Loops through the array to check if there is a match
			var url = selectedimg.src;

			//removes the base https://localhost part from the image url
			url = url.replace( /^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//, '' );
			console.log('selected'+selectedName.innerHTML, url);
			//loops trough picture array and checks if selected image and name are the same as an index in the array
			for (var i = 0; i < pictures.length; i++) {
				selectedNoMatch = false;
				if(pictures[i].name == selectedName.innerHTML && pictures[i].picture == url){
					console.log("reamoved");
					document.getElementById(selectedName.id).style.opacity = "0";
					document.getElementById(selectedName.id).style.transition = "0.5s";
					document.getElementById(selectedName.id).onclick = null;

					document.getElementById(selectedimg.id).style.opacity = "0";
					document.getElementById(selectedimg.id).style.transition = "0.5s";
					document.getElementById(selectedimg.id).onclick = null;
					selectedName = undefined;
					selectedimg = undefined;
					score++;
					// addCorrectPlayers(selectedNameid);

					//update score counter in HTML
					document.getElementById("scoreCounter").innerHTML = score;
							if(score == pictures.length){
								// gameEnding();
								console.log("######## GAME OVER #########");
							}
					return;
				}
				//check in selected match is true or false
				else if(pictures[i].name != selectedName || pictures[i].picture != selectedimg){
					selectedNoMatch = true;
				}
		}
	}
// function checkClicked(){
//   if (selectedimg != undefined || selectedimg != "" || selectedName != undefined || selectedName != "") {
//       // verglijk slectedName met name selectedimg
//
//   var removeClass = document.getElementsByClassName("selected");
//   console.log(removeClass);
//   for (var i = 0; i < removeClass.length; i++) {
//       removeClass[i].classList.remove("selected");
//   }
//   document.getElementById(selectedName.id).classList.add("selected");
//   document.getElementById(selectedimg.id).classList.add("selected");
//   // console.log("slebba");
//   }
// }
//





// const name = document.querySelectorAll('.button-1');
// name.forEach(element => {
//     console.log(element.id);
//     element.onclick = function() { compare(element.id); };
// });



var numbers = [0,1,2,3,4,5,6,7,8,9,10,11];
var checkName;
var checkImg;

for (var i = 0; i < pictures.length; i++) {
	var randomNum = numbers[Math.floor(Math.random() * numbers.length)];
	// console.log(randomNum);
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



// function compare(id){
//   console.log(id);
//   var compairecheck;
//
//   // if (name != undefind && buttons != undefind){}
//
// }
