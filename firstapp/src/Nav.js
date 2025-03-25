export default function Nav(props) { //{topics : [], onChangeMode : (id) => {alert(id);}}
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li key={t.id}><a id={t.id} href={"/read/" + t.id} onClick={(e) => {
            e.preventDefault();
            props.onChangeMode(e.target.id);
        }}>{t.title}</a></li>);
    }
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}
