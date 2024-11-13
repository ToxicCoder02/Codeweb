import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const HealthSafetyForm: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Stage 3: Health and Safety</h2>
      <label>Health Declaration</label>
      <input
        type="checkbox"
        checked={formData.healthDeclaration}
        onChange={(e) => setFormData({ ...formData, healthDeclaration: e.target.checked })}
      />
      <label>Emergency Contact Information</label>
      <input
        type="text"
        value={formData.emergencyContact}
        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
        required
      />
      <label>Any Medical Conditions</label>
      <textarea
        value={formData.medicalConditions}
        onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
      />
    </div>
  );
};

export default HealthSafetyForm;
