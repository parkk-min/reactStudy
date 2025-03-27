import { useState } from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Write from './Write';
import List from './List';
import Read from './Read';



function App() {
  const [mode, setMode] = useState("List"); //초기값

  const [postList, setPostList] = useState([
    { id: 1, title: "반갑습니다", body: "Hello", writer: "박민규" },
    { id: 2, title: "안녕하세요", body: "Hi", writer: "박민규" },

  ]);

  const navList = [
    { id: 1, title: "글쓰기", mode: "Write" },
    { id: 2, title: "목록으로", mode: "List" },

  ];

  const [readingId, setReadingId] = useState(0);
  const [nextId, setNextId] = useState(postList.length + 1);
  let content = null;

  switch (mode) {
    case "Write":
      content = <Write onWrite={(_title, _body, _writer) => {
        const newWrite = { id: nextId, title: _title, body: _body, writer: _writer };
        const newWriting = [...postList, newWrite];
        setPostList(newWriting);
        setMode("List");
        setNextId(nextId + 1);
      }} />;
      break;

    case "List": //초기값
      content = <List postList={postList} onChangeMode={(id) => {
        setMode("Read")
        setReadingId(Number(id));
      }} />;
      break;

    case "Read":
      const post = postList.find(post => Number(post.id) === readingId)
      content = <Read
        post={post}
        onRead={(title, body, writer) => {
          // 사용자가 수정한 내용을 바탕으로 새로운 post 객체를 만듦
          const updateList = { id: post.id, title, body, writer };
          // postList 배열을 복사 (얕은 복사로 배열 자체만 복사됨)
          const updateList2 = [...postList];
          // 배열을 순회하면서, id가 일치하는 post를 찾아서 수정
          for (let i = 0; i < updateList2.length; i++) {
            if (updateList2[i].id === post.id) {
              // 해당 id의 post를 updateList로 변경
              updateList2[i] = updateList;
              // 첫 번째로 일치하는 항목만 수정하고 종료

            }
          }
          // 수정된 배열을 setPostList로 상태 업데이트
          setPostList(updateList2);
          setMode("List");

        }}

        onDelete={() => {
          const deletedList = postList.filter((f) =>
            f.id !== post.id
          )
          setPostList(deletedList);
          setMode("List");

        }}

      />;
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
