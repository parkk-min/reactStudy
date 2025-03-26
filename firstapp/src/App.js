import Header from "./Header";  // Header 컴포넌트를 import
import Nav from "./Nav";        // Nav 컴포넌트를 import
import Article from "./Article"; // Article 컴포넌트를 import
import { useState } from 'react'; // React에서 상태 관리하는 useState 훅을 import
import Create from "./Create";  // Create 컴포넌트를 import
import Update from "./Update";  // Update 컴포넌트를 import

function App() {
  // 현재 모드를 관리하는 상태 (WELCOME, READ, CREATE, UPDATE 등)
  const [mode, setMode] = useState("WELCOME");
  // 현재 선택된 id를 관리하는 상태 (게시글의 id)
  const [id, setId] = useState(0);
  // 게시글 목록을 관리하는 상태 (각 게시글의 제목과 내용 포함)
  const [topics, setTopics] = useState([
    { id: 1, title: "html1", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "javascript", body: "javascript is..." }
  ]);
  // 새 게시글의 id를 관리하는 상태 (자동으로 증가)
  const [nexId, setNextId] = useState(topics.length + 1);

  // 기본적으로 표시할 콘텐츠 (WELCOME 화면, 게시글 내용 등)
  let content = null;
  let contextControl = null;

  // 'WELCOME' 모드일 때, 환영 메시지를 표시하는 Article 컴포넌트 렌더링
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, Web"></Article>;
  }
  // 'READ' 모드일 때, 선택된 게시글을 읽는 화면을 표시
  else if (mode === "READ") {
    let title, body;
    // topics 배열에서 id에 맞는 게시글을 찾아서 제목과 본문을 가져옴
    for (let topic of topics) {
      if (topic.id === Number(id)) {
        title = topic.title;
        body = topic.body;
        break;
      }
    }
    // 게시글 내용을 화면에 표시
    content = <Article title={title} body={body}></Article>;

    // 'READ' 모드에서 사용할 추가적인 조작 버튼 (수정, 삭제)
    contextControl = (
      <>
        {/* 수정 버튼 클릭 시, UPDATE 모드로 전환 */}
        <li>
          <a href={"/update/" + id} onClick={(e) => {
            e.preventDefault(); // 페이지 새로고침 방지
            setMode("UPDATE");  // 모드를 UPDATE로 변경
          }}>
            Update
          </a>
        </li>
        {/* 삭제 버튼 클릭 시, 해당 게시글 삭제 후 WELCOME 모드로 전환 */}
        <li>
          <button onClick={(e) => {
            // 현재 id에 해당하는 게시글을 삭제
            const filterTopics = topics.filter((t) => t.id !== Number(id));
            setTopics(filterTopics);  // 새로운 배열로 상태 업데이트
            setMode("WELCOME");  // WELCOME 모드로 변경
          }}>
            Delete
          </button>
        </li>
      </>
    );
  }
  // 'CREATE' 모드일 때, 새 게시글을 작성하는 화면을 표시
  else if (mode === "CREATE") {
    content = <Create onCreate={(_title, _body) => {
      // 새 게시글을 생성하여 topics 배열에 추가
      let newTopic = { id: nexId, title: _title, body: _body };
      let newTopics = [...topics, newTopic];  // 기존 배열에 새 항목 추가
      setTopics(newTopics);  // 새로운 배열로 상태 업데이트
      setId(newTopic.id);  // 새 게시글의 id 설정
      setNextId(nexId + 1);  // 다음 게시글 id를 1 증가
      setMode("READ");  // 'READ' 모드로 변경하여 새로 추가한 게시글을 보여줌
    }}></Create>;
  }
  // 'UPDATE' 모드일 때, 선택한 게시글을 수정하는 화면을 표시
  else if (mode === "UPDATE") {
    // id에 해당하는 게시글을 찾아서 수정할 데이터를 가져옴
    let topic = topics.find((t) => t.id === Number(id));
    content = <Update
      title={topic.title}
      body={topic.body}
      onUpdate={(title, body) => {
        // 게시글을 수정하고 새로운 배열로 상태 업데이트
        const updateTopic = { id: Number(id), title, body };
        const updateTopics = [...topics];
        for (let i = 0; i < updateTopics.length; i++) {
          if (updateTopics[i].id === Number(id)) {
            updateTopics[i] = updateTopic;  // 해당 게시글 수정
            break;
          }
        }
        setTopics(updateTopics);  // 새로운 배열로 상태 업데이트
        setMode("READ");  // 'READ' 모드로 변경하여 수정된 게시글을 화면에 표시
      }}></Update>;
  }

  return (
    <>
      {/* Header 컴포넌트 (상단에 표시되는 제목과 모드 변경 버튼) */}
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("WELCOME");  // Header 클릭 시 WELCOME 모드로 변경
        }}
      ></Header>

      {/* Nav 컴포넌트 (게시글 목록을 클릭 시 해당 게시글로 이동) */}
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setId(_id);  // 클릭한 게시글의 id 설정
          setMode("READ");  // 해당 게시글을 읽는 READ 모드로 변경
        }}
      ></Nav>

      {/* 위에서 결정된 content(콘텐츠) 영역을 출력 */}
      {content}

      {/* 'CREATE' 페이지로 이동하는 링크 */}
      <li>
        <a href="/create" onClick={(e) => {
          e.preventDefault(); // 페이지 새로고침 방지
          setMode("CREATE");  // CREATE 모드로 변경하여 게시글 작성 화면으로 이동
        }}>
          Create
        </a>
      </li>

      {/* 게시글 읽기 모드에서만 보이는 수정/삭제 버튼들 */}
      {contextControl}
    </>
  );
}

export default App;
