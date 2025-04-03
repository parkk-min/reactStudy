import { Route, Routes, Link } from "react-router-dom";

const contents = [
  { id: 1, title: "Html", body: "Html is..." },
  { id: 2, title: "Css", body: "Css is..." },
  { id: 3, title: "Java", body: "Java is..." },
];

function Home() {
  return (
    <>
      <h2>Home</h2> Home is...
    </>
  );
}

function Topics() {
  return (
    <>
      <h2>Topics</h2> Topics is...
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2> Contact is...
    </>
  );
}

function App() {
  return (
    <>
    <h1>React Router Dom example</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      <li><Link to="/contact">Contact</Link></li>

    </ul>
      <Routes>
        <Route path="/"><Home/></Route>
        <Route path="/topics"><Topics/></Route>
        <Route path="/contact"><Contact/></Route>
      </Routes>
    </>
  );
}

export default App;
