export default function List(props) {
    const ListArr = [];
    for (let post of props.postList) {
        const item =
            <div className="listName"><a key={post.id} href="/" onClick={(e) => {
                e.preventDefault();
                props.onChangeMode(post.postList);
            }}>{post.title} (작성자:{post.writer})</a></div>
        ListArr.push(item);
    }

    return (
        <>
            {ListArr}
        </>

    );
}