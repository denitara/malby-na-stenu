import { Component, Input } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent {
  @Input('title') title: string;

  menuItems = [
    {
      name: "O mně",
      link: "#o-mne",
    },
    {
      name: "Tvorba",
      link: "#tvorba",
    },
    {
      name: "Výstavy",
      link: "#vystavy",
    },
    {
      name: "Ceník",
      link: "#cenik",
    }, 
    {
      name: "Kontakt",
      link: "#kontakt",
    },
  ];
}
