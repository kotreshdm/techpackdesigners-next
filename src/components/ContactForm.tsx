"use client";
import { Alert, Button } from "flowbite-react";
import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";
const initialState = { name: "", email: "" };
const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [publishSuccess, setPublishSuccess] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/create-contact-data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });
      if (res.ok) {
        setFormData(initialState);
        setPublishSuccess(
          "Your Feedback is Successfully Sent We will Getback to You As Soon As Possible!"
        );
      } else {
        setPublishSuccess("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='grid grid-flow-col justify-stretch space-x-4'>
          <FloatingLabel
            variant='outlined'
            label='Name:'
            id='name'
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <FloatingLabel
            variant='outlined'
            label='Email:'
            id='email'
            type='email'
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <Button type='submit'>Submit</Button>
        {publishSuccess && (
          <Alert className='mt-5 p-5' color='success'>
            {publishSuccess}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
