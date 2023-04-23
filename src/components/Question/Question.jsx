import React from "react";
import { BsTrash3 } from "react-icons/bs";

export default function Question({ question, onUpdate, onDelete }) {
    const { questionItem1, questionItem2 } = question;
    const handleDelete = () => onDelete(question);
    return (
        <li>
            <div>{questionItem1}</div>
            <div>{questionItem2}</div>
            <button onClick={handleDelete}>
                <BsTrash3 />
            </button>
        </li>
    );
}
