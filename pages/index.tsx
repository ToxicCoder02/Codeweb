import React, { useState } from 'react';
import PersonalInfoForm from '../components/PersonalInfoForm';
import TravelPreferencesForm from '../components/TravelPreferencesForm';
import HealthSafetyForm from '../components/HealthSafetyForm';
import NavigationButtons from '../components/NavigationButtons';

const initialFormData = {
  fullName: '',
  dob: '',
  nationality: '',
  email: '',
  phone: '',
  departureDate: '',
  returnDate: '',
  accommodation: '',
  specialRequests: '',
  healthDeclaration: false,
  emergencyContact: '',
  medicalConditions: ''
};

const Home = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [stage, setStage] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Application Submitted Successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        {stage === 1 && <PersonalInfoForm formData={formData} setFormData={setFormData} />}
        {stage === 2 && <TravelPreferencesForm formData={formData} setFormData={setFormData} />}
        {stage === 3 && <HealthSafetyForm formData={formData} setFormData={setFormData} />}
        <NavigationButtons currentStage={stage} setStage={setStage} totalStages={3} />
      </form>
    </div>
  );
};

export default Home;
