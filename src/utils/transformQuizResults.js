const transformQuizResults = (results) => {
  return results.map((result, index) => ({
      ...result,
      id: result.question.split(' ').join('_'),
      questionNumber: index + 1,
    })
  );
};

export default transformQuizResults;
