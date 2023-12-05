import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor-codigo',
  templateUrl: './editor-codigo.component.html',
  styleUrls: ['./editor-codigo.component.css']
})
export class EditorCodigoComponent implements OnInit {

  @Input() colorBorder: string = '#6BD1FF';

  constructor() {
  }

  ngOnInit(): void {
  }
}
