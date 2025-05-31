import { useState } from "react";
import Container from "./components/Container/Container";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";

function App() {
  // State
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const { good, neutral, bad } = feedback;

  // Derived values
  const totalFeedback = good + neutral + bad;
  const positivePercentage = totalFeedback
    ? Math.round((good / totalFeedback) * 100)
    : 0;

  //Handlers
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  //JSX
  return (
    <Container>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        total={totalFeedback}
      />

      {!totalFeedback ? (
        <Notification />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          positive={positivePercentage}
          total={totalFeedback}
        />
      )}
    </Container>
  );
}

export default App;
