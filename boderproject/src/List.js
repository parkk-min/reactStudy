import "./testStyle.css"
export default function List(props) {
    const listArr = [];
    // const postLists = props.postList;
    for (let post of props.postList) {
        const item = <div className="listName">
            <a key={post.id} href="/" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode(post.id);
            }}>{post.title} (작성자:{post.writer})</a></div>
        listArr.push(item);
     
    }

    return (
        <>
            {listArr}
        </>
    );
}
// props.postlist.postlist