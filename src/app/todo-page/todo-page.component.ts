import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})


export class TodoPageComponent {
  tache = [{{name:"Créer une todoApp", complete:false}}]
  onSubmit(form: NgForm){
    this.tache.unshift({
      name: form.controls['task'].value,
      complete: false
    })
  }
}
