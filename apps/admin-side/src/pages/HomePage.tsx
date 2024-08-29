import { db } from "@repo/db/firebase";
import { AppBar } from "@repo/ui/appbar";
import HomePagebody from "@repo/ui/homepage/homepagebody";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
    async function test() {
      try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    return (
      <div className="h-screen">
        <AppBar
          isAdmin={true}
          login={() => {
            navigate("/login");
          }}
          home={() => {
            navigate("/");
          }}
        />
        <div className="h-full">
            <HomePagebody />
        </div>
        
      </div>
    );
  }

  export default HomePage;