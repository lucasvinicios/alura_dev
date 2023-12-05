import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-projeto',
  templateUrl: './editor-projeto.component.html',
  styleUrls: ['./editor-projeto.component.css']
})
export class EditorProjetoComponent implements OnInit {

  @Input() colorBorder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onColorChange(color: string){
    this.colorBorder = color;
  }

}
