import { useState } from 'react';
import './FormField.css';

export default function FormField({ type, placeholder, label, valueChanged }) {
    const [value, setValue] = useState('');

    const onValueChange = (e) => {
        valueChanged(e.target.value);
        setValue(e.target.value);
    }

    return (
        <div className='form-field'>
            <label>{label}</label>
            <input type={(type === "")? "text" : type} placeholder={placeholder} value={value} onChange={e => onValueChange(e)} />
        </div>
    );
}