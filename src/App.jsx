import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const token = import.meta.env.VITE_HUGGINGFACE_API_KEY;
  console.log("token:", token);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
