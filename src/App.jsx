import { useState } from 'react';
import Learner from './components/Learner';
import learners from './utlitites/data.mjs';

import './App.css';

function App() {
  const [learnerData, setLearnerData] = useState({ learners: learners });

  let learnerList = learnerData.learners.map((el) => {
    return <Learner name={el.name} bio={el.bio} scores={el.scores} />;
  });

  return <>{learnerList}</>;
}

export default App;
