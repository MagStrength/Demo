import React from 'react';
import QuestionsItem from './QuestionsItem';
import './questions.scss'

const QuestionsContent = () => {
    const questionData = [
        {
            title: 'Могу ли я купить сертификат в подарок?',
            content: `Чо покайфу то и делайте`
        },
        {
            title: 'Могу ли я поменять сертификат на другой?',
            content: `Чо покайфу то и делайте`
        },
        {
            title: 'Могу ли я купить сертификат в подарок?',
            content: `Чо покайфу то и делайте`
        },
        {
            title: 'Могу ли я купить сертификат в подарок?',
            content: `Чо покайфу то и делайте`
        },
        {
            title: 'Могу ли я купить сертификат в подарок?',
            content: `Чо покайфу то и делайте`
        },
    ];

    return (
        <div className="questions container">
            <h1 className="questions-header">Часто задаваемые вопросы</h1>
            <div className="accordion ">
                {questionData.map(({ title, content }) => (
                    <QuestionsItem title={title} content={content} />
                ))}
            </div>
        </div>
    );
};

export default QuestionsContent;