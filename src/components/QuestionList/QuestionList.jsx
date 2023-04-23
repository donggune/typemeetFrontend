import React, { useEffect, useState } from "react";
import AddQuestion from "../AddQuestion/AddQuestion";
import { v4 as uuidv4 } from "uuid";
import { call } from "../../service/ApiService";
import DeleteQuestion from "../DeleteQuestion/DeleteQuestion";
import Question from "../Question/Question";

const QuestionList = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        call("/type", "GET", null).then((res) => {
            setQuestions(res.data);
        });
    }, []);

    const handleAdd = (question) => {
        console.log(question);
        call("/type", "POST", question).then((res) => {
            setQuestions(res.data);
        });
    };

    const handleUpdate = (question) => {};

    const handleDelete = (question) => {
        call("/type", "DELETE", question).then((res) => {
            setQuestions(res.data);
        });
    };

    return (
        <section>
            <ul>
                {questions.map((item) => (
                    <Question key={item.id} question={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))}
            </ul>
            <AddQuestion onAdd={handleAdd} />
        </section>
    );
};

export default QuestionList;
