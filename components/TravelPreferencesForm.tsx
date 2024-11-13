import React from 'react';

type Props = {
  formData: any;
  setFormData: (data: any) => void;
};

const TravelPreferencesForm: React.FC<Props> = ({ formData, setFormData }) => {
  return (
    <div>
      <h2>Stage 2: Travel Preferences</h2>
      <label>Departure Date</label>
      <input
        type="date"
        value={formData.departureDate}
        onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
        required
      />
      <label>Return Date</label>
      <input
        type="date"
        value={formData.returnDate}
        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
        required
      />
      <label>Accommodation Preference</label>
      <select
        value={formData.accommodation}
        onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
      >
        <option value="Space Hotel">Space Hotel</option>
        <option value="Martian Base">Martian Base</option>
      </select>
      <label>Special Requests</label>
      <textarea
        value={formData.specialRequests}
        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
      />
    </div>
  );
};

export default TravelPreferencesForm;
