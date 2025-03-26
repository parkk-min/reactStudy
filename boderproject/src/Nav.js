import "./testStyle.css"
export default function Nav(props) { //{navList=[{id, title, mode}], onChangeMode={(mode)=>{..}}
    const navArr = [];
    for (let m of props.navList) {
        const item = <a key={m.id} href="/" style={{ marginRight: '10px' }} onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(m.mode);
        }}>{m.title}</a>
        navArr.push(item);
    }
    return (
        <div className="navClass">
            {navArr}
            {/* <a href="/" id="write" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode("write");
            }}>글쓰기</a>
            <a href="/" id="list" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode("list");
            }}>목록으로</a> */}
        </div>

    );
}
// &nbsp;&nbsp; = 글 띄우기