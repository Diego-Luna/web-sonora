let observers = [];
let musica = [];
let stado_musical = 1;

// startup();
set_musica();

const botton = document.querySelector("#on");
const seccion1Click = document.querySelector("#seccion-1");
const seccion2Click = document.querySelector("#seccion-2");
const seccion3Click = document.querySelector("#seccion-3");
const seccion4Click = document.querySelector("#seccion-4");
const seccion5Click = document.querySelector("#seccion-5");

botton.addEventListener("click", function(evento){

  musica[0].volume(0.5);
  musica[1].volume(0);
  musica[2].volume(0);
  musica[3].volume(0);
  musica[4].volume(0);

  musica[0].play();
  musica[1].play();
  musica[2].play();
  musica[3].play();
  musica[4].play();
})

function mousemove(event){
  let size1 = seccion1Click.offsetHeight
  let size2 = seccion2Click.offsetHeight
  let size3 = seccion3Click.offsetHeight
  let size4 = seccion4Click.offsetHeight
  let size5 = seccion5Click.offsetHeight

  if (event.pageY <= size1){
    musica[0].volume(1);
    musica[1].volume(0);
    musica[2].volume(0);
    musica[3].volume(0);
    musica[4].volume(0);
    console.log("cambio de volumen : 1");
  }
  if ( event.pageY > size1 && event.pageY <= (size2 + size1)){
    musica[0].volume(0);
    musica[1].volume(1);
    musica[2].volume(0);
    musica[3].volume(0);
    musica[4].volume(0);
    console.log("cambio de volumen : 2");
  }
  if ( event.pageY > (size2 + size1) && event.pageY <= (size3 + size2 + size1)){
    musica[0].volume(0);
    musica[1].volume(0);
    musica[2].volume(1);
    musica[3].volume(0);
    musica[4].volume(0);
    console.log("cambio de volumen : 3");
  }
  if ( event.pageY > (size3 + size2 + size1) && event.pageY <= (size4 + size3 + size2 + size1)){
    musica[0].volume(0);
    musica[1].volume(0);
    musica[2].volume(0);
    musica[3].volume(1);
    musica[4].volume(0);
    console.log("cambio de volumen : 4");
  }
  if ( event.pageY > (size4 + size3 + size2 + size1) && event.pageY <= (size5 + size4 + size3 + size2 + size1)){
    musica[0].volume(0);
    musica[1].volume(0);
    musica[2].volume(0);
    musica[3].volume(0);
    musica[4].volume(1);
    console.log("cambio de volumen : 5");
  }
  // console.log("pageX: ",event.pageX, 
  // "pageY: ", event.pageY, 
  // "clientX: ", event.clientX, 
  // "clientY:", event.clientY)
}

window.addEventListener('mousemove', mousemove);


// seccion1Click.addEventListener("click", function(evento){

//   musica[0].volume(0.5);
//   musica[1].volume(0);
//   musica[2].volume(0);
//   musica[3].volume(0);
//   musica[4].volume(0);

//   musica[0].play();
// });
// seccion2Click.addEventListener("click", function(evento){

//   musica[0].volume(0);
//   musica[1].volume(0.5);
//   musica[2].volume(0);
//   musica[3].volume(0);
//   musica[4].volume(0);

//   musica[1].play();
// });
// seccion3Click.addEventListener("click", function(evento){

//   musica[0].volume(0);
//   musica[1].volume(0);
//   musica[2].volume(0.5);
//   musica[3].volume(0);
//   musica[4].volume(0);

//   musica[2].play();
// });
// seccion4Click.addEventListener("click", function(evento){

//   musica[0].volume(0);
//   musica[1].volume(0);
//   musica[2].volume(0);
//   musica[3].volume(0.5);
//   musica[4].volume(0);

//   musica[3].play();
// });
// seccion5Click.addEventListener("click", function(evento){

//   musica[0].volume(0);
//   musica[1].volume(0);
//   musica[2].volume(0);
//   musica[3].volume(0);
//   musica[4].volume(0.5);

//   musica[4].play();
// });


// funciones

// function set_musica({volume1 = 0,volume2 = 0,volume3 = 0,volume4 = 0,volume5 = 0}) {
function set_musica() {
  musica[0] = new Howl({
    src: ['./assets/experiencia/1.mp3'],
    autoplay: true,
    volume: 0,
  });
  musica[1] = new Howl({
    src: ['./assets/experiencia/2.mp3'],
    autoplay: true,
    volume: 0,
  });
  musica[2] = new Howl({
    src: ['./assets/experiencia/3.mp3'],
    autoplay: true,
    volume: 0,
  });
  musica[3] = new Howl({
    src: ['./assets/experiencia/4.mp3'],
    autoplay: true,
    volume: 0,
  });
  musica[4] = new Howl({
    src: ['./assets/experiencia/5.mp3'],
    autoplay: true,
    volume: 0,
  });
}
