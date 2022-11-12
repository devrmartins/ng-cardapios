import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cardapioForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cardapioForm = this.fb.group({
      titulo: ['', [Validators.required]],
      imagem: [''],
      endereco: [''],
      cidade: [''],
      telefone: [''],
      destaques: [false],
      novidades: [false]
    })
    // this.cardapioForm = new FormGroup({
    //   titulo: new FormControl(''),
    //   imagem: new FormControl(''),
    // });
  }

  ngOnInit(): void {
  }

  get titulo() {
    return this.cardapioForm.get('titulo');
  }

  tituloMudou(event: any) {
    this.titulo?.setValue("Teste");
  }

  salvar() {
    console.log(this.cardapioForm.valid);
    console.log(this.cardapioForm.value);
  }

}
