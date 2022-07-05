import React, { useState } from "react";

export const AppointmentsPage = (props) => {

  const { appointments, contacts, addAppointment } = props

  const [title, setTitle] = useState('');
  const [contact, setContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
      
      const newAppointnment = {
        title: title,
        contact: contact,
        date: date,
        time: time
      }

      addAppointment(newAppointnment);
      setTitle("");
      setContact("");
      setDate("");
      setTime("");
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <ContactForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
