import { Link, Outlet, Route, Routes, useParams, useNavigate } from "react-router-dom";


const contents = [
    { id: 1, title: "HTML", body: "HTML is..." },
    { id: 2, title: "CSS", body: "CSS is..." },
    { id: 3, title: "JAVA", body: "JAVA is..." }
];

function Home() {
    return (
        <>
            <h2>Home</h2>
            home is...
        </>
    );
}

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
    for (let t of contents) {
        list.push(<li><Link to={"/topics/" + t.id}>
            {t.title}</Link> </li>);
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

function Welcom() {
    return (
        <>
            <h2>Welcom!!!</h2>
        </>
    );
}

function MainLayout() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hello React Router</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/topics">Topics</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Outlet /><br></br>
            <button onClick={(e) => {
                navigate("/");
            }}>홈으로</button >
        </>
    );
}

function App1() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Welcom />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/topics" element={<Topics />}>
                        <Route path="/topics/:topicid" element={<Topic />}></Route>
                    </Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App1;