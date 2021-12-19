import React from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
  const { id } = useParams();
  return (
    <div>
      <h1>About Page - ID: {id}</h1>
    </div>
  );
}
