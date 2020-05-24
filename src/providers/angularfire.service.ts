
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

@Injectable()
export class AngularFireService {
    constructor(public db: AngularFireDatabase) { }

    getAnagrams(word) : FirebaseListObservable<any[]> {
        return this.db.object('/alphagrams/' + word);
    }

    getHooks(word) : FirebaseListObservable<any[]> {
        return this.db.object('/hooks/' + word);
    }

}
