export async function placeSearch(query1: string, query2: string): Promise<any> {
    const apiKey = 'YOUR_FOURSQUARE_ACCESS_Tfsq3MWgFcBJamwcit7YSOP11g4P/fBwxZG+XjE+CLcLDLkI=OKEN'; // Replace with your token
    const searchParams = new URLSearchParams({
      query: query1,
      near: query2 || '', // Include location if provided
      open_now: 'true',
      sort: 'DISTANCE',
    });
  
    const response = await fetch(`https://api.foursquare.com/v3/places/search?${searchParams}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
    });
  
    if (!response.ok) {
      throw new Error('API request failed'); // Handle API errors
    }
  
    const data = await response.json();
    return data;
  }