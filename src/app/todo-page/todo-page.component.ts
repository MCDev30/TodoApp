import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})


export class TodoPageComponent {
  
  tache = [{
    name:"Todo App Seyls Africa",
    complete:false
  }]

  onSubmit(form: NgForm){
    this.tache.unshift({
      name: form.controls['task'].value,
      complete: false
    })
    form.reset()
  }

  onDelete(index: number){
    console.log(index)
    this.tache.splice(index,1)
  }

  onCheck(index: number){
    this.tache[index].complete = !this.tache[index].complete
  }
}
