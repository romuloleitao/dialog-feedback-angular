import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  author = "Romulo Leitao";
  footerMessage = "© Copyright 2020. Made by " + this.author + ". All rights reserved.";

  constructor() { }

  ngOnInit(): void {
  }

}
