import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const PersonalInfoForm: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Stage 1: Personal Information</h2>
      <label>Full Name</label>
      <input
        type="text"
        value={formData.fullName}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        required
      />
      <label>Date of Birth</label>
      <input
        type="date"
        value={formData.dob}
        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
        required
      />
      <label>Nationality</label>
      <input
        type="text"
        value={formData.nationality}
        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
        required
      />
      <label>Email</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />
      <label>Phone</label>
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        required
      />
    </div>
  );
};

export default PersonalInfoForm;
