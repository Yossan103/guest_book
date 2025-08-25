import { useState } from "react";

function ClickDiary() {
    const [label, setLabel] = useState("これまでのきろく");

    const handleClick = () => {
        setLabel("みんなの記録を見てみましょう！");
    };

    retun (
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
    );
}

export default ClickDiary;

function ClickCreate() {
    const [label, setLabel] = useState("きろくを残す");

    const handleClick = () => {
        setLabel("さぁきろくを残しましょう！");
    };

    retun (
        <div>
            <button onClick={handleClick}>{label}</button>
        </div>
    );
}

export default ClickCreate;
