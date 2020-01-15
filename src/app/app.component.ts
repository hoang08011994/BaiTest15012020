import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  show = false;
  shouldShow() {
    this.show = true;
    alert('show 10 squares');
  }
  reload(){
    location.reload();
  }
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;
  value6 = 0;
  show1() {
    this.value1++;
    if (this.value1 === 1) {
      document.getElementById("hinh1").style.background = "red";
    }
    else if (this.value1 === 2) {
      document.getElementById("hinh1").style.background = "blue";
    }
    else if (this.value1 === 3) {
      document.getElementById("hinh1").style.background = "green";
    }
  }
  show2() {
    this.value2++;
    if (this.value2 === 1) {
      document.getElementById("hinh2").style.background = "red";
    }
    else if (this.value2 === 2) {
      document.getElementById("hinh2").style.background = "blue";
    }
    else if (this.value2 === 3) {
      document.getElementById("hinh2").style.background = "green";
    }
  }
  show3() {
    this.value3++;
    if (this.value3 === 1) {
      document.getElementById("hinh3").style.background = "red";
    }
    else if (this.value3 === 2) {
      document.getElementById("hinh3").style.background = "blue";
    }
    else if (this.value3 === 3) {
      document.getElementById("hinh3").style.background = "green";
    }
  }
  show4() {
    this.value4++;
    if (this.value4 === 1) {
      document.getElementById("hinh4").style.background = "red";
    }
    else if (this.value4 === 2) {
      document.getElementById("hinh4").style.background = "blue";
    }
    else if (this.value4 === 3) {
      document.getElementById("hinh4").style.background = "green";
    }
  }
  show5() {
    this.value5++;
    if (this.value5 === 1) {
      document.getElementById("hinh5").style.background = "red";
    }
    else if (this.value5 === 2) {
      document.getElementById("hinh5").style.background = "blue";
    }
    else if (this.value5 === 3) {
      document.getElementById("hinh5").style.background = "green";
    }
  }
  show6() {
    this.value6++;
    if (this.value6 === 1) {
      document.getElementById("hinh6").style.background = "red";
    }
    else if (this.value6 === 2) {
      document.getElementById("hinh6").style.background = "blue";
    }
    else if (this.value6 === 3) {
      document.getElementById("hinh6").style.background = "green";
    }
  }
}
