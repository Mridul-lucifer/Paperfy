import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PaperSolving() {
  const { id } = useParams(); // Extracting the id from URL params
  const [data, setData] = useState(null); // Set initial state to null
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get(`http://localhost:5000/Paper/${id}`);
        setData(response.data); // Assuming the API returns { Paper: ... }
      } catch (e) {
        setError('An error occurred while fetching the data');
        console.error(e);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [id]); // Dependency array to refetch when `id` changes

  // Handle loading, error, and data display
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Paper ID: {id}</h1>
      <div>
        {/* Render data here */}
        {data ? (
          <div>{JSON.stringify(data)}</div> // Render the Paper data as JSON or custom format
        ) : (
          <p>No data found for this paper.</p>
        )}
      </div>
    </div>
  );
}
