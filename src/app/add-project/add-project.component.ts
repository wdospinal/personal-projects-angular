import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Project } from '../model/project';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent {

  public project: Project = { name: 'Default', url: 'default.com', likes: 0 };
  items: FirebaseListObservable<any[]>;

  constructor(public dialogRef: MdDialogRef<AddProjectComponent>) {

  }
  addElement() {
    console.log(this.project);
    this.items.push(this.project);
  }
}
