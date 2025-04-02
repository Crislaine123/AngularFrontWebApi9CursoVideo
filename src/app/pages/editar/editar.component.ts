import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuarioModel';
import { CommonModule } from '@angular/common';
import { UsuarioEdicaoDto } from '../../models/usuarioEdicaoDto';
import { response } from 'express';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  imports: [FormularioComponent, CommonModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
    btnAcao = "Editar";
    descTitulo = "Editar Usuários"
    usuario!:UsuarioModel;

    constructor(private usuarioService:UsuarioService,private router: Router ,private route: ActivatedRoute, private toastr: ToastrService){}

    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'))

      this.usuarioService.BuscarUsuarioPorId(id).subscribe(response => {
        this.usuario = response.dados;
      })
    }


    editarUsuario(usuario:UsuarioEdicaoDto){
      debugger;
        this.usuarioService.EditarUsuario(usuario).subscribe(response => {
          if(response.dados != null){
            this.toastr.success(response.mensagem, 'Sucesso!')
            this.router.navigate(['/'])
          }else{
            this.toastr.error(response.mensagem, 'Erro!')
          }
        })
    }

}
