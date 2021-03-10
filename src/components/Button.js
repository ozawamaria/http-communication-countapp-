import React from 'react';

//クリックした際の動作、ボタンの色、ボタンのテキストを親コンポーネントから受け取る
const Button = ({ onClick, color, text }) => {
    return (
        <button onClick = {onClick} className = {`ui ${color} button`}>
            {text}
        </button>
    );
};

export default Button;