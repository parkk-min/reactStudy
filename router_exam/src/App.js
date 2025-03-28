import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Routes, useNavigate, useParams } from 'react-router-dom';

function Home() {
  return (
    <>
      <h2>Home</h2>
      Home is...
    </>
  );
}

const contents = [
  { id: 1, title: "Html", body: "Html is..." },
  { id: 2, title: "Css", body: "Css is..." },
  { id: 3, title: "Javascript", body: "Javascript is..." }
];

function Topic() {
  const { topicid } = useParams();
  const topic = contents.find((t) =>
    t.id === Number(topicid));
  return (
    <>
      <h3>{topic.body}</h3>
    </>
  );
}

function Topics() {
  const list = [];
  // contents 배열을 순회하면서, 각 topic에 대해 Link를 만들어줍니다.
  for (let t of contents) {
    list.push(<li><Link to={"/topics/" + t.id} >{t.title}</Link></li >);
  }

  return (
    <>
      <h2>Topics</h2>
      <ul>
        {list}
      </ul>
      <Outlet />
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2>
      Contact is...
    </>
  );
}

function WelCome() {
  return (
    <>
      <h1>Welcome!!</h1>
    </>
  );
}

function MainLayout() {
  const navigate = useNavigate(); //()=>{...} useNavigate = 함수를 리턴해주는 함수이다.
  return (
    <>
      <h1>Hello React Router</h1>
      <ul>
        {/* Link는 페이지를 새로 고침하지 않고 URL을 변경하며, React 애플리케이션 내에서 내비게이션을 구현할 수 있게 해줍니다. */}
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Outlet /><br></br>{/* Outlet은 부모 라우트가 자식 라우트를 렌더링할 수 있도록 하는 역할을 한다. 
      자식 라우트가 해당 위치에 렌더링되도록 "자리"를 예약하는 컴포넌트입니다. */}
      <button onClick={(e) => {
        navigate("/");
      }}>홈으로</button >
    </>
  );
}

function App() {
  return (
    <>
      {/* path는 URL 경로를 지정하는데 사용된다. */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WelCome />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/topics" element={<Topics />}>
            <Route path="/topics/:topicid" element={<Topic />}></Route>
          </Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route >
      </Routes >
    </>
  );
}

export default App;
