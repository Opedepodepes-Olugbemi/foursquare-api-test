// src/Form.tsx
import React from "react";
// import { useForm } from "./hooks/useForm";

function ContactForm() {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Extract form data
        const formData = new FormData(event.currentTarget);
        const data = {
            query1: formData.get("query1"),
            query2: formData.get("query2"),
            // Add more fields if needed
        };

        // Send POST request (replace with your API endpoint)
        async function placeSearch() {
            try {
                const searchParams = new URLSearchParams({
                  query: 'query1',
                  near: 'query2',
                  open_now: 'true',
                  sort: 'DISTANCE'
                });
                const results = await fetch(
                  `https://api.foursquare.com/v3/places/search?${searchParams}`,
                  {
                    method: 'GET',
                    headers: {
                      Accept: 'application/json',
                      Authorization: 'API KEY HERE',
                    }
                  }
                );
                const data = await results.json();
                return data;
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <form action="/process" method="post" onSubmit={handleSubmit}>
            <input type="text" name="query1" id="query1" />
            <br />
            <input type="text" name="query2" id="query2" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ContactForm;
