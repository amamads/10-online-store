import { useState, useRef } from 'react';

export default function useInput(placeholder, initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const inputEl = useRef();

    const bind = {
        value,
        placeholder,
        ref: inputEl,
        onChange: e => setValue(e.target.value),
    }

    return { value, setValue, bind, inputEl };
}