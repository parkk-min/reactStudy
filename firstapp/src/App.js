import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import { useState } from 'react';
import Create from "./Create";


function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(0);
  const [topics, setTopics] = useState([
    { id: 1, title: "html1", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." }
  ]);

  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>
  } else if (mode === "READ") {
    let title, body;
    for (let topic of topics) {
      if (topic.id === Number(id)) {
        title = topic.title;
        body = topic.body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article >;
  } else if (mode === "CREATE") {
    content = <Create onCreate={(_title, _body) => {
      let newTopic = { id: topics.length + 1, title: _title, body: _body }
      let newTopics = [...topics, newTopic];
      setTopics(newTopics);
      setId(newTopic.id);
      setMode("READ");

      // newTopics.push(newTopic);
      // for(let t of topics){
      //newTopic.push(t);
      //}
    }
    }></Create >
  }

  return (
    <>
      <Header title="REACT" onChangeMode={() => {
        setMode("WELCOME");
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setId(_id);
        setMode("READ");
      }}></Nav>
      {content}
      <a href="/create" onClick={(e) => {
        e.preventDefault();
        setMode("CREATE");
      }}>Create</a>
    </>
  );
}

export default App;




// function App() {
//   return (
//     <>
//       <Counter />
//       <Counter />
//       <Counter />
//     </>
//   );
// }



// function App() {
//   function handleClick() {
//     alert("버튼을 클릭했습니다!");
//   }
//   return <button onClick={handleClick}>버튼클릭</button>;
// }
// export default App;



// import ControlPanel from "./ControlPanel";
// function App() {
//   return <ControlPanel />;
// };
// export default App;