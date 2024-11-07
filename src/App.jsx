import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Nav from "./Components/nav/Nav";
import Project from "./Components/Projects/Project";

const App=()=>{
  return(
    <>
    <div className="Header_wrapper">
      <Nav />
      <Header />
    </div>
    <About />
    <Project />
    <Contact />
    </>
  );
}
export default App;