import React, { useState } from 'react';
import { useForm } from './hooks/useForm';
import { placeSearch } from './hooks/placeSearch'; // (explained later)

function ContactForm() {
  const [searchResults, setSearchResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

//   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('query1:', values.query1);
    console.log('query2:', values.query2);

    try {
        // setIsLoading(true);
        const results = await placeSearch(values.query1, values.query2);
        setSearchResults(results);
        setErrorMessage(null);
    }   catch (error) {
        console.error(error);
        setErrorMessage(null); // Display error message
    }
    };

  // Implement placeSearch function (explained later)
  

  const { values, onChange, onSubmit } = useForm(handleSubmit, {
    query1: '',
    query2: '',
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="query1" id="query1" value={values.query1} onChange={onChange} placeholder="Search Term" />
        <br />
        <input type="text" name="query2" id="query2" value={values.query2} onChange={onChange} placeholder="Location (Optional)" />
        <button type="submit">Search</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {searchResults && (
        <div>
          <h2>Search Results:</h2>
          {/* Display search results (explained later) */}
        </div>
      )}
    </div>
  );
}

export default ContactForm;

