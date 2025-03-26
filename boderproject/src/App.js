import { useState } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Write from './Write';
import List from './List';

function App() {
  const [mode, setMode] = useState("List"); //초기값
  const navList = [
    { id: 1, title: "목록으로", mode: "List" },
    { id: 2, title: "글쓰기", mode: "Write" },
 
  ];

  const [postList, setPostList] = useState([
    { id: 1, title: "반갑습니다", body: "Hello", writer: "박민규" },
    { id: 2, title: "안녕하세요", body: "Hi", writer: "박민규" },

  ]);

  let content = null;
  switch (mode) {
    case "Write":
      content = <Write />;
      break;
    case "List": //초기값
      content = <List postList={postList} />;
      break;
    case "Read":
      break;
  }

  return (
    <>
      <Header title="글 목록"></Header>
      <Nav navList={navList} onChangeMode={(_mode) => {
        setMode(_mode);
      }}></Nav >
      {content}
    </>
  );
}

export default App;
