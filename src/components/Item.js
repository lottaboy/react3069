
import React from 'react';

const Item = () => {
    const riddles = [
        {
            id: 1,
            description: "Что можно увидеть с закрытыми глазами?",
            options: ["Сон", "Луну", "Солнце", "Туман"],
            correct: 0
        },
        {
            id: 2,
            description: "Что имеет зубы, но не может кусаться?",
            options: ["Пила", "Ключ", "Замок", "Кот"],
            correct: 0
        },
        {
            id: 3,
            description: "Что всегда приходит, но никогда не уходит?",
            options: ["Завтра", "Вчера", "Сегодня", "Полдень"],
            correct: 0
        },
        {
            id: 4,
            description: "Что можно поймать, но нельзя бросить?",
            options: ["Мяч", "Рыбу", "Холод", "Камень"],
            correct: 2
        },
        {
            id: 5,
            description: "Что идет вверх и вниз, но не двигается?",
            options: ["Лестница", "Эскалатор", "Лифт", "Гора"],
            correct: 0
        },
        {
            id: 6,
            description: "Что принадлежит тебе, но другие люди используют его больше, чем ты?",
            options: ["Твое имя", "Твой дом", "Твоя машина", "Твой телефон"],
            correct: 0
        }
    ];

    return (
        <div>
            {riddles.map((riddle) => (
                <div key={riddle.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                    <h3>{riddle.description}</h3>
                    <ul>
                        {riddle.options.map((option, index) => (
                            <li key={index}>{option}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Item;