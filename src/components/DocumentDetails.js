import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const DocumentDetails = () => {
  const { id } = useParams();
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/documents/${id}');
        setDocument(data);
      } catch (error) {
        console.error('Error fetching document details:', error);
      }
    };
    fetchDocument();
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{document.title}</h1>
      <p>{document.content}</p>
    </div>
  );
};

export default DocumentDetails;