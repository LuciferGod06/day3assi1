import React, { useState } from 'react';

// UserProfile component to display user information
const UserProfile = ({ name, email, bio }) => (
  <div>
    <h2>User Profile</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Bio: {bio}</p>
  </div>
);

// EditProfile component to edit user information
const EditProfile = ({ name, email, bio }) => {
  const [formData, setFormData] = useState({ name, email, bio });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Bio:
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </label>
      </form>
    </div>
  );
};

// App component to manage state and toggle between Edit Mode and View Mode
const App = () => {
  const [editMode, setEditMode] = useState(false);

  const toggleMode = () => {
    setEditMode((prevMode) => !prevMode);
  };

  // Sample user data
  const user = {
    name: 'Gourav Prasad',
    email: 'gourav@gmail.com',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  };

  return (
    <div>
      <h1>User Profile Application</h1>
      {editMode ? (
        <EditProfile {...user} />
      ) : (
        <UserProfile {...user} />
      )}
      <button onClick={toggleMode}>
        {editMode ? 'View Mode' : 'Edit Mode'}
      </button>
    </div>
  );
};

export default App;
