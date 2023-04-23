import React, { useState } from "react";

export default function AddQuestion({ onAdd }) {
    const [form, setForm] = useState({ questionItem1: "", questionItem2: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.questionItem1.trim().length === 0 || form.questionItem2.trim().length === 0) {
            return;
        }
        onAdd(form);
        setForm({ questionItem1: "", questionItem2: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input id="questionItem1" name="questionItem1" type="text" value={form.questionItem1} onChange={handleChange} />
            {" VS "}
            <input id="questionItem2" name="questionItem2" type="text" value={form.questionItem2} onChange={handleChange} />
            <button>+</button>
        </form>
    );
}
