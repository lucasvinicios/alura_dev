import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public iconEditor = '';
  public iconCommunity = '';
  public path = '';

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.router.snapshot.url.map(segment => segment.path).join('/');
    this.iconActivatedCommunity();
    this.iconActivatedEditor();
  }

  iconActivatedEditor()
  {
    if(this.path === 'editor-codigo'){
      this.iconEditor = '../../assets/IconCodeActivated.png'
      this.iconCommunity = '../../assets/CommunityDesactivated.png'
    }
  }

  iconActivatedCommunity()
  {
    if(this.path === 'comunidade'){
      this.iconEditor = '../../assets/IconCodeDesactivated.png'
      this.iconCommunity = '../../assets/CommunityActivated.png'
    }
  }

}
