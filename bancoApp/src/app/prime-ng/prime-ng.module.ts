import { NgModule } from '@angular/core';

//PrimeNg
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  imports:[
  ],
  exports:[
    CardModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    TabMenuModule,
    InputTextareaModule,
    ProgressSpinnerModule
  ]
})
export class PrimeNgModule { }
