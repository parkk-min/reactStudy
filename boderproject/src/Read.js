import "./testStyle.css"
import { useState } from "react";
export default function Read(props) {
    const [title, setTitle] = useState(props.post.title);
    const [body, setBody] = useState(props.post.body);
    const [writer, setWriter] = useState(props.post.writer);
    return (
        <form>
            <input type="text" name="title" value={title} onChange={(e) => {
                setTitle(e.target.value);
            }}></input><hr></hr>
            <textarea name="body" value={body} onChange={(e) => {
                setBody(e.target.value);
            }}></textarea><hr></hr>
            <input type="text" name="writer" value={writer} onChange={(e) => {
                setWriter(e.target.value);
            }}></input><hr></hr>
            <button onClick={(e) => {
                e.preventDefault();
                props.onRead(title, body, writer);
            }}>수정</button>

            <button onClick={(e) => {
                e.preventDefault();
                props.onDelete();
            }}>삭제</button>
        </form >

    );
}



