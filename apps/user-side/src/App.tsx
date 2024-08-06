import {db} from "@repo/db/firebase" 
import { addDoc, collection } from "firebase/firestore";

function App() {
  async function test () {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div>
      <button onClick={() => test()}>yoo test me</button>
    </div>
  )
}

export default App
