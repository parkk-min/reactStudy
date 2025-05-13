import { createSlice } from '@reduxjs/toolkit';

const initState = [
    { id: 1, title: "반갑습니다.", body: "첫 번째 게시물", writer: "홍길동" },
    { id: 2, title: "안녕하세요.", body: "두 번째 게시물", writer: "홍길동" },
];

const postListSlice = createSlice({
    name: "postList",
    initialState: {
        postList: initState,
        nextId: initState.length + 1,
    },
    reducers: {
        onSave: (state, action) => {
            state.postList.push({ ...action.payload, id: state.nextId });
            state.nextId++;
        },
        onUpdate: (state, action) => {
            for (let i = 0; i < state.postList.length; i++) {
                if (state.postList[i].id === action.payload.id) {
                    state.postList[i] = action.payload;
                    break;
                }
            }
        },
        onDelete: (state, action) => {
            state.postList = state.postList.filter((post) => post.id !== action.payload.id);
        },
    },
});

export const { onSave, onUpdate, onDelete } = postListSlice.actions;
export default postListSlice;

// -------------------------------------------------------------------
// [noti]
// - ... :  title, body, writer 객체가 풀어서 들어온다?..
// - postList를 밖으로 빼서 변수로 만든 이유: nextId에서 initState.length는 같은 initialState안에 있으면 length를 구하지 못함.
