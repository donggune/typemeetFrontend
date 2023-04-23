import React, { useState } from "react";

export default function DeleteQuestion(props) {
    const [id, setId] = useState(props.id);

    return <button onClick={props.onDelete(id)}></button>;
}
