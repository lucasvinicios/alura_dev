import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidade',
  templateUrl: './comunidade.component.html',
  styleUrls: ['./comunidade.component.css']
})
export class ComunidadeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  posts = [
    {
      title: 'teste',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      likes: 10,
      comments: 'Lorem Ipsum is...',
      author: 'Harry'
    },
    {
      title: 'teste',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      likes: 10,
      comments: 'Lorem Ipsum is...'
    },
    {
      title: 'teste'
    },
    {
      title: 'teste'
    },
    {
      title: 'teste'
    },
    {
      title: 'teste'
    },
    {
      title: 'teste'
    },
  ]

}
