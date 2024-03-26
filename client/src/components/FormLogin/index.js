import { useState } from 'react';
import FormField from '../FormField';
import './FormLogin.css'
import { useNavigate } from 'react-router-dom';

export default function FormLogin() {
    const [user, setUser] = useState({
        "name":"",
        "password":""
    })

    let navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const onSave = (value, key) => {
        user[key] = value;
    }

    const onConfirm = () => {
        if(user.name === "" || user.password === "") {
            setMessage("Campos não preenchidos devidamente!")
            setError(true);
        }
        else {
            let pass = "1234";
            let name = "Gui";

            if(user.name === name && user.password === pass) {
                navigate("/");
            }
            else {
                setMessage("Senha Incorreta!");
                setError(true);
            }
        }
    }

    return (
        <div className='form-login'>
            <div className='container'>
                <h2>Login</h2>
                <div className={(error)? "error-msg active" : "error-msg"}><p>{message}</p></div>
                <div className='field-area'>
                    <FormField label="Nome: " placeholder="Digite seu nome" valueChanged={e => onSave(e, "name")}/>
                    <FormField type={"password"} label="Senha: " placeholder="Digite sua senha" valueChanged={e => onSave(e, "password")}/>
                    <button className='btn-enter' onClick={onConfirm}>Entrar</button>
                </div>
            </div>
        </div>
    );
}