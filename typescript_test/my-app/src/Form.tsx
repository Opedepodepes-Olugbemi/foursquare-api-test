// src/Form.tsx
import React from "react";
import { useForm } from "./hooks/useForm";

const ContactForm: React.FC = () => {
    const handleSubmit = async () => {
        // Handle form submission (e.g., send data to an API)
        console.log("Form submitted!");
    };

    const { values, onChange, onSubmit } = useForm(handleSubmit, {
        // Initialize form fields (e.g., email, password)
        query1: "",
        query2: "",
    });

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                name="query1"
                placeholder="Email"
                value={values.query1}
                onChange={onChange}
            />
            <input
                type="password" {/* Use type="password" for sensitive data */}
                name="query2"
                placeholder="Password"
                value={values.query2}
                onChange={onChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
