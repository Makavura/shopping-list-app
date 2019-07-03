
import { Injectable } from '@angular/core';
import { Item } from './item';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})

export class CrudService {
  itemsRef: AngularFireList<any>;    // Reference to Student data list, its an Observable
  itemRef: AngularFireObject<any>;   // Reference to Student object, its an Observable too

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Student
  AddItem(item: Item) {
    this.itemsRef.push({
      itemName: item.itemName,
      itemPrice: item.itemPrice
    })
  }

  // Fetch Single Student Object
  GetItem(id: string) {
    this.itemRef = this.db.object('items-list/' + id);
    return this.itemRef;
  }

  // Fetch Students List
  GetItemsList() {
    this.itemsRef = this.db.list('items-list');
    return this.itemsRef;
  }

  // Update Student Object
  UpdateItem(item: item) {
    this.itemRef.update({
      itemName: item.itemName,
      itemPrice: item.itemPrice
    })
  }

  // Delete Student Object
  DeleteItem(id: string) { 
    this.itemRef = this.db.object('items-list/' + id);
    this.itemRef.remove();
  }

}
