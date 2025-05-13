import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";

export default function MainLayout() {
    const menuList = [
        { id: 1, title: "글쓰기", path: "/write" },
        { id: 2, title: "목록으로", path: "/" },
    ];

    return (
        <>
        <Header title="글목록"></Header>
        <Menu menuList={menuList}></Menu>
        <Outlet/>
        </>
    );
}
