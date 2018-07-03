import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from '../resources/search.service';


@Component({
  selector: 'teste-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

  sub: Subscription;
  valorUrlFinal: string;

  dadosUsuario: Object[];

  

  constructor(private route: ActivatedRoute, private $searchService: SearchService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( valorUrl => {
     this.valorUrlFinal = valorUrl.user;
     this.loaderUser(this.valorUrlFinal);
    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }


  loaderUser(Miojo){
    this.$searchService.getUser(Miojo).subscribe( dadosUsuarioInscricao => {
      this.dadosUsuario = dadosUsuarioInscricao;
    });
  }

}
