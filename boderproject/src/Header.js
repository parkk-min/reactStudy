export default function Header(props) {
    // 되도록이면 부모 컴포넌트에 props를 전달하는 방식으로 한다. 
    // 예를들면 <h1>글 목록</h1> 대신 <h1>{props.title}</h1> 방식으로 전달
    return (
        <>
            <h1>{props.title}</h1> 
        </>
    );

}