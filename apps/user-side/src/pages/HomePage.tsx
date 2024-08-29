import { AppBar } from "@repo/ui/appbar";
import HomePagebody from "@repo/ui/homepage/homepagebody";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
   
    return (
      <div className="h-screen">
        <AppBar
          isAdmin={false}
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