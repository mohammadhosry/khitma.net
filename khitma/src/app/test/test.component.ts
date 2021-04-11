import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { JUZ_STATUS, KhitmaGroup, SameTaskKhitmaGroup } from '../entities/entities';
import { map, catchError, take, first } from 'rxjs/operators';

// import * as firestore from "../../../node_modules/firebase";
import { KhitmaGroupService } from '../khitma-group.service';


import * as firebase from 'firebase/app';
import 'firebase/firestore';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private db: AngularFirestore, private groupsApi: KhitmaGroupService) { }

  ngOnInit(): void {
  }

  clicked() {

    // for (let i = 0; i < 30; i++) {

    //   let updatedObj = {};
    //   updatedObj[("ajza." + i)] = {
    //     index: i,
    //     status: JUZ_STATUS.DONE,
    //     owner: "hasan"
    //   };

    //   this.db.doc<KhitmaGroup>('groups/ckc0vQMCPrEq4ydOAyBZ').update(updatedObj);

    // }



    // this.db.doc<SameTaskKhitmaGroup>('groups/JQQVZKetquaDjvtDhFvj').update({ "task": "مهمة جديدة" });


    // *****

    // let updatedObj = {};
    // updatedObj[("members." + "سجود")] = {
    //   name: "سجود",
    //   isTaskDone: false
    // };

    // this.db.doc<KhitmaGroup>('groups/' + "JQQVZKetquaDjvtDhFvj").update(updatedObj);




    // ****
    let updatedObj = {};
    updatedObj["members"] = {};
    updatedObj["members"]["888"] = firebase.default.firestore.FieldValue.delete();

    return this.db.doc<any>('groups/' + "JQQVZKetquaDjvtDhFvj").set(updatedObj, { merge: true });

  }

}
