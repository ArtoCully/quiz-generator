import React from 'react';
import { Link } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Box
} from "@chakra-ui/react";

const searchParams = new URLSearchParams();

function QuizSpecifyView() {
  const [formState, setFormState] = React.useState('amount=10');
  const handleOnFormChange = (e) => {
    const key = e.target.name.split('_')[1];
    const value = e.target.value;
    if (searchParams.has(key)) {
      searchParams.set(key, value);
    } else {
      searchParams.append(key, value);
    }
    setFormState(searchParams.toString());
  };

  return (
    <Box as="form" padding="2rem">
      <FormControl marginBottom="1.5rem" id="numberOfQuestions">
        <FormLabel>Select Number Of Questions</FormLabel>
        <Input type="number" name="trivia_amount" id="trivia_amount" min="1" max="50" defaultValue="10" onChange={handleOnFormChange} />
      </FormControl>
      <FormControl marginBottom="1.5rem" id="category">
        <FormLabel>Select Category</FormLabel>
        <Select name="trivia_category" onChange={handleOnFormChange}>
          <option value="any">Any Category</option>
          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals &amp; Theatres</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science &amp; Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
          <option value="32">Entertainment: Cartoon &amp; Animations</option>
        </Select>
      </FormControl>
      <FormControl marginBottom="1.5rem" id="difficulty">
        <FormLabel>Select Difficulty</FormLabel>
        <Select name="trivia_difficulty" onChange={handleOnFormChange}>
          <option value="any">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </FormControl>
      <FormControl marginBottom="1.5rem" id="type">
        <FormLabel>Select Type</FormLabel>
        <Select name="trivia_type" onChange={handleOnFormChange}>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </Select>
      </FormControl>
      <FormControl marginBottom="1.5rem" id="trivia_submit">
        <Link
          to={`/quiz?${formState}`}
        >
          <Button
            variant="outline"
            color="pink"
            size="md"
            height="48px"
            width="200px"
            border="2px"
            borderColor="pink.500"
          >
            Generate Quiz
          </Button>
        </Link>
      </FormControl>
    </Box>
  )
}

export default QuizSpecifyView;
