import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { onUpdate, onDelete } from './postListSlice';

export default function ReadPost(){
    const {postId} = useParams();
    const item = useSelector((state) => state.postList.postList.find((p) => p.id === Number(postId)));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState(item? item.title:"");
    const [body, setBody] = useState(item? item.body:"");
    const [writer, setWriter] = useState(item? item.writer:"");

    if(!item){
        return;
    }

    return (
        <>
        <form onSubmit={(e) => e.preventDefault()}>
            <p><input type="text" name="title" value={title} onChange={(e)=>{
                setTitle(e.target.value);
            }}></input></p>
            <p><textarea name="body" value={body} rows="20" cols="40" onChange={(e)=>{
                setBody(e.target.value);
            }}></textarea></p>
            <p><input type="text" name="writer" value={writer} onChange={(e)=>{
                setWriter(e.target.value);
            }}></input></p>
            <button onClick={(e)=>{
                dispatch(onUpdate({ id: item.id, title, body, writer }));
                navigate("/");
            }}>수정</button>
            <button onClick={(e)=>{
                dispatch(onDelete({ id: item.id }));
                navigate("/");
            }}>삭제</button>

        </form>
        </>
    );
}