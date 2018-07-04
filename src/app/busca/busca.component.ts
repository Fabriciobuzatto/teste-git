import { Component, OnInit } from '@angular/core';
import { SearchService } from '../resources/search.service';

@Component({
  selector: 'teste-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  usuarios: Object[];
  dadosUsuario: Object[] = [];
  buscaUsuarios: string;
  totalUsuarios:string;


  constructor(private $searchService: SearchService) { 
    
  }

  getUser() {
    this.$searchService.users(this.buscaUsuarios).subscribe( usuariosRetornados => {
      this.usuarios = usuariosRetornados.items.slice(0, 10);
      this.totalUsuarios = usuariosRetornados.total_count;

      console.log(this.usuarios);

      this.usuarios.forEach(element => {
        this.getTotalFollowers(element.login);
      });

    });
  }

  getTotalFollowers(usuariosBuscados):void {
    this.$searchService.getUser(usuariosBuscados).subscribe( dadosUsuarioInscricao => {
      //this.usuarioIsolado = dadosUsuarioInscricao;
      //console.log(dadosUsuarioInscricao);
      this.dadosUsuario.push(dadosUsuarioInscricao);
    });
  }

  goUser(rota) {
    
  }

  ngOnInit() {
  }

}
