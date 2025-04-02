import { Component, } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { UsuarioCriacaoDto } from '../../models/usuarioCriacaoDto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AutenticacaoService } from '../../services/autenticacao.service';

@Component({
  selector: 'app-cadastrar',
  imports: [FormularioComponent],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Usuários"

  constructor(private autenticacaoService : AutenticacaoService,private router: Router, private toastr: ToastrService){}

  criarUsuario(usuario:UsuarioCriacaoDto){
    this.autenticacaoService.RegistrarUsuario(usuario).subscribe(response =>{

      if(response.dados != null){
        this.toastr.success(response.mensagem, 'Sucesso!')
        this.router.navigate(['/'])
      }else{
        this.toastr.error(response.mensagem, 'Erro!')
      }


    })
  }
}
