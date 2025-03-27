import "./testStyle.css"
export default function Write(props) {
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const title = e.target.title.value;
            const body = e.target.body.value;
            const writer = e.target.writer.value;
            props.onWrite(title, body, writer);
        }}>
            <input type="text" placeholder="제목입력" name="title"></input><hr></hr>
            <textarea placeholder="내용입력" name="body"></textarea><hr></hr>
            <input type="text" placeholder="작성자 이름" name="writer"></input><hr></hr>
            <input type="submit" value="저장"></input>
        </form >
    );
}