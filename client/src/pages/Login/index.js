import BannerLogin from "../../components/BannerLogin";
import FormLogin from "../../components/FormLogin";
import "./Login.css"

export default function Login() {

    return (
        <section className="login-page">
            <BannerLogin/>
            <FormLogin/>
        </section>
    );
}