import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule
  ],
  declarations: [SigninComponent]
})
export class HomeModule { }
