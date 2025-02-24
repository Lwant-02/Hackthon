import React from "react";
import { useBookingStore } from "../../store/useBookingStore";

export const Hole = ({ holeNumber }) => {
  const { hole, setHole } = useBookingStore();
  const handleCheckboxChange = () => {
    if (hole === holeNumber) {
      setHole(null);
    } else {
      setHole(holeNumber);
    }
  };
  console.log(hole);

  return (
    <fieldset className="fieldset p-3 bg-[#2B2B2B] border border-base-300 rounded-box w-full">
      <label className="fieldset-label text-primary-color text-sm font-semibold">
        <input
          type="checkbox"
          className="checkbox checkbox-success checkbox-sm"
          name="checkbox"
          checked={hole === holeNumber} // Checked if it's the selected hole
          onChange={handleCheckboxChange} // Handle checkbox change
          disabled={hole && hole !== holeNumber}
        />
        {holeNumber} Holes
      </label>
    </fieldset>
  );
};
