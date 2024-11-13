import React from 'react';

type Props = {
  currentStage: number;
  setStage: (stage: number) => void;
  totalStages: number;
};

const NavigationButtons: React.FC<Props> = ({ currentStage, setStage, totalStages }) => (
  <div>
    {currentStage > 1 && (
      <button onClick={() => setStage(currentStage - 1)}>Back</button>
    )}
    {currentStage < totalStages && (
      <button onClick={() => setStage(currentStage + 1)}>Next</button>
    )}
    {currentStage === totalStages && <button type="submit">Submit</button>}
  </div>
);

export default NavigationButtons;
