import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UsuarioModel } from '../../models/usuarioModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  imports: [RouterModule, CommonModule],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {

  usuario!: UsuarioModel;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute){}

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.usuarioService.BuscarUsuarioPorId(id).subscribe(response => {
      console.log(response.dados)
        this.usuario = response.dados
    })

  }

}
