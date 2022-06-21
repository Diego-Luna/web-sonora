import { Component, HostListener, OnInit } from '@angular/core';
import { Howl } from 'howler'

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  music_on:boolean = false

  musica1 = new Howl({
    src: ['./assets/experiencia/1.mp3'],
    loop: true,
    volume: 0,
  });
  musica2 = new Howl({
    src: ['./assets/experiencia/2.mp3'],
    loop: true,
    volume: 0,
  });
  musica3 = new Howl({
    src: ['./assets/experiencia/3.mp3'],
    loop: true,
    volume: 0,
  });
  musica4 = new Howl({
    src: ['./assets/experiencia/4.mp3'],
    loop: true,
    volume: 0,
  });
  musica5 = new Howl({
    src: ['./assets/experiencia/5.mp3'],
    loop: true,
    volume: 0,
  });

  seccion1Click:any
  seccion2Click:any
  seccion3Click:any
  seccion4Click:any
  seccion5Click:any

  constructor() {
  }

  ngOnInit(): void {
    this.seccion1Click = document.querySelector<HTMLElement>("#seccion-1")
    this.seccion2Click = document.querySelector<HTMLElement>("#seccion-2")
    this.seccion3Click = document.querySelector<HTMLElement>("#seccion-3")
    this.seccion4Click = document.querySelector<HTMLElement>("#seccion-4")
    this.seccion5Click = document.querySelector<HTMLElement>("#seccion-5")
  }

  play(){

    if (this.music_on === false){
      this.musica1.volume(1);
      this.musica2.volume(0);
      this.musica3.volume(0);
      this.musica4.volume(0);
      this.musica5.volume(0);

      this.musica1.play();
      this.musica2.play();
      this.musica3.play();
      this.musica4.play();
      this.musica5.play();
    }else{
      this.musica1.volume(0);
      this.musica2.volume(0);
      this.musica3.volume(0);
      this.musica4.volume(0);
      this.musica5.volume(0);
    }

    // console.log("Click + " + this.music_on);
    this.music_on = !this.music_on;
  }

  mousemove(event:any){
    let size1 = this.seccion1Click.offsetHeight;
    let size2 = this.seccion2Click.offsetHeight;
    let size3 = this.seccion3Click.offsetHeight;
    let size4 = this.seccion4Click.offsetHeight;
    let size5 = this.seccion5Click.offsetHeight;

    if (event.pageY <= size1 && this.music_on == true){
      this.musica1.volume(1);
      this.musica2.volume(0);
      this.musica3.volume(0);
      this.musica4.volume(0);
      this.musica5.volume(0);
      // console.log("cambio de volumen : 1");
    }
    if ( event.pageY > size1 && event.pageY <= (size2 + size1) && this.music_on == true){
      this.musica1.volume(0);
      this.musica2.volume(1);
      this.musica3.volume(0);
      this.musica4.volume(0);
      this.musica5.volume(0);
      // console.log("cambio de volumen : 2");
    }
    if ( event.pageY > (size2 + size1) && event.pageY <= (size3 + size2 + size1) && this.music_on == true){
      this.musica1.volume(0);
      this.musica2.volume(0);
      this.musica3.volume(1);
      this.musica4.volume(0);
      this.musica5.volume(0);
      // console.log("cambio de volumen : 3");
    }
    if ( event.pageY > (size3 + size2 + size1) && event.pageY <= (size4 + size3 + size2 + size1) && this.music_on == true){
      this.musica1.volume(0);
      this.musica2.volume(0);
      this.musica3.volume(0);
      this.musica4.volume(1);
      this.musica5.volume(0);
      // console.log("cambio de volumen : 4");
    }
    if ( event.pageY > (size4 + size3 + size2 + size1) && event.pageY <= (size5 + size4 + size3 + size2 + size1) && this.music_on == true){
      this.musica1.volume(0);
      this.musica2.volume(0);
      this.musica3.volume(0);
      this.musica4.volume(0);
      this.musica5.volume(1);
      // console.log("cambio de volumen : 5");
    }
  }

  @HostListener('document:mousemove', ['$event']) documentClickEvent($event: MouseEvent) {
    this.mousemove($event)
  }
}
