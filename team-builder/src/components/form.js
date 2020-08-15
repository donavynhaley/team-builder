import React, { useState, useEffect } from "react";
const Form = (props) => {
  const { currentMembers, setCurrentMembers } = props;
  const [member, setMember] = useState({ name: "", email: "", role: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentMembers([...currentMembers, member]);
    setMember({ name: "", email: "", role: "" });
  };
  const handleChange = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={(event) => handleChange(event)}
          size="50"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={member.email}
          onChange={(event) => handleChange(event)}
          size="50"
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={member.role}
          onChange={(event) => handleChange(event)}
          size="50"
        />
      </label>
      <button>Submit!</button>
    </form>
  );
};
export default Form;
