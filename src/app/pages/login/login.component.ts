import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginForm!:FormGroup

  constructor(private autenticacaoService: AutenticacaoService,
     private formBuilder:FormBuilder,
      private router: Router,
      private toartr: ToastrService){}

  
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      })
    }


    login(){

      if(this.loginForm.valid){
          this.autenticacaoService.LoginUsuario(this.loginForm.value).subscribe(response => {
            if(response.dados != null){
              localStorage.setItem('token', response.dados.token)
              this.toartr.success(response.mensagem, 'Sucesso!');
              this.router.navigate(['/']);
            }else{
              this.toartr.error(response.mensagem, 'Error!');
            }
        })
      }else{
        this.loginForm.markAllAsTouched();
      }



     
    }

}
