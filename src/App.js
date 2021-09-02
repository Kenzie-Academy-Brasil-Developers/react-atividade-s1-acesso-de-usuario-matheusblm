import "./App.css";
import { useState } from "react";
import RestrictedPage from "./Components/RestrictedPage";
import ButtonLogin from "./Components/ButtonLogin";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = "Matheus";
  const update = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={user} />
        <ButtonLogin isLoggedIn={isLoggedIn} update={update}>
          {" "}
        </ButtonLogin>
      </header>
    </div>
  );
}

export default App;
