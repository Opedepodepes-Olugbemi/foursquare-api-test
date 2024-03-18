import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FoursquareVenue {
    id: string;
    name: string;
    location: {
      address?: string; 
      city?: string;
    };
  }
  
  interface FoursquareResponse {
    results: FoursquareVenue[];
  }

  const FoursquarePlaces: React.FC = () => {
    const [venues, setVenues] = useState<FoursquareVenue[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchVenues = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get<FoursquareResponse>(
            `https://api.foursquare.com/v3/places/search?near=Ikorodu,Lagos&limit=5`,
            {
              headers: {
                Accept: 'application/json',
                Authorization: 'fsq3MWgFcBJamwcit7YSOP11g4P/fBwxZG+XjE+CLcLDLkI=' // Replace with your Client ID
              },
              params: {
                client_secret: 'Q3DBI0M0HYIAH2OT3TOMUIZP1T3EUACK2BXQM0V42JDJFKQ3' // Replace with your Client Secret
              }
            }
          );
          setVenues(response.data.results);
          setIsLoading(false);
        } catch (error) {
          setError('Error fetching data');
          setIsLoading(false);
        }
      };
  
      fetchVenues();
    }, []);
  
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>
            {venue.name} ({venue.location.address ?? 'Address unavailable'})
          </li>
        ))}
      </ul>
    );
  };
  
  export default FoursquarePlaces;