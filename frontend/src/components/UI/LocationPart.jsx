import React from "react";

export const LocationPart = ({ city, country }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>{city}</li>
        <li>{country}</li>
      </ul>
    </div>
  );
};
