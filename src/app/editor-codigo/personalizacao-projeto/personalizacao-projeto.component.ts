import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-personalizacao-projeto',
  templateUrl: './personalizacao-projeto.component.html',
  styleUrls: ['./personalizacao-projeto.component.css']
})
export class PersonalizacaoProjetoComponent implements OnInit {

  @Output() colorBorder = new EventEmitter<string>();

  selectedOption = 'Typescript';
  selectedOptionColor: string = '#6BD1FF';

  optionsLanguage: string[] = ['Typescript', 'Python', 'Java', 'C#', 'C++', 'C', 'PHP'];

  constructor() { }

  onSelected(option: string): void {
    this.selectedOption = option;
  }

  onColorChange(event: any): void {
    this.selectedOptionColor = event.target.value;
    this.colorBorder.emit(this.selectedOptionColor)
  }

  ngOnInit(): void {
  }
}
