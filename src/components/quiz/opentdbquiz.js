import * as React from 'react';

// category: "Entertainment: Video Games"
// correct_answer: "True"
// difficulty: "easy"
// incorrect_answers: ["False"]
// 0: "False"
// question: "&quot;Undertale&quot; is an RPG created by Toby Fox and released in 2015."
// type: "boolean"

export const OpenTdbBooleanItem = (item) => {
  const answers = [...item.incorrect_answers, item.correct_answer];
  const noSpaceCategory = item.category.replace(/\s/g, '');

  return (
    <article>
      <h3 contentEditable='true' dangerouslySetInnerHTML={{ __html: item.question }}></h3>
      {answers.map((answer, key) => {
        const nameKey = `${noSpaceCategory}-${item.difficulty}-${item.correct_answer}[]`;
        return (
          <div key={key}>
            <input type="radio" name={nameKey} value={answer} />
            <label htmlFor={nameKey}>{answer}</label>
          </div>
        );
      })}
    </article>
  )
};

export const OpenTdbMultipleChoiceItem = (item) => {
  const answers = [...item.incorrect_answers, item.correct_answer];
  const noSpaceCategory = item.category.replace(/\s/g, '');

  return (
    <article>
      <h3 contentEditable='true' dangerouslySetInnerHTML={{ __html: item.question }}></h3>
      {answers.map((answer, key) => {
        const nameKey = `${noSpaceCategory}-${item.difficulty}-${item.correct_answer}-${key}`;
        return (
          <div key={key}>
            <input type="checkbox" name={nameKey} value={answer} />
            <label htmlFor={nameKey}>{answer}</label>
          </div>
        );
      })}
    </article>
  )
};

const OpenTdbQuiz = (quiz) => {
  const { type } = quiz;

  switch(type) {
    case 'boolean':
      return <OpenTdbBooleanItem {...quiz} />;
    
    case 'multiple':
      return <OpenTdbMultipleChoiceItem {...quiz} />;

    default:
      return null;
  }
}

export default OpenTdbQuiz;
