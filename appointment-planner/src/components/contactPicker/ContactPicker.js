import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option selected value="">No Contact Selected</option>
      {contacts.map((contact) => {
        return <option value={contact}>{contact}</option>
      })}
    </select>
  );
};
