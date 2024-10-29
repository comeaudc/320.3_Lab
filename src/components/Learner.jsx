import Score from './Score';

function Learner({ bio, name, scores }) {
  let scoreList = scores.map((el) => {
    return <Score score={el} />;
  });
  return (
    <>
      <h1>{name}</h1>
      <p>{bio}</p>
      {scoreList}
    </>
  );
}

export default Learner;
