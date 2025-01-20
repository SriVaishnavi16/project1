import axios from 'axios';
import React, { useState } from 'react';


const DocumentForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const token = user ? user.token : null;
      await axios.post(
        'http://localhost:5000/api/documents',
        { title, content },
        {
          headers: {
            Authorization: 'Bearer ${token}',
          },
        }
      );
      alert('Document created successfully');
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DocumentForm;