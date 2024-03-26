import { Outlet } from "react-router-dom";
import Header from "../Header";
import "./Layout.css";

export default function Layout() {
    return (
        <section className="page">
            <Header/>
            <Outlet/>
        </section>
    );
}
