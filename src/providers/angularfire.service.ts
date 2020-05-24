
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class AngularFireService {
    constructor(public db: AngularFireDatabase) { }

    getAnagrams(word) : AngularFireObject<any[]> {
        return this.db.object('/alphagrams/' + word);
    }

    getHooks(word) : AngularFireObject<any[]> {
        return this.db.object('/hooks/' + word);
    }

}
