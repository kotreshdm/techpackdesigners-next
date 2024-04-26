"use client";
import { Alert, Button } from "flowbite-react";
import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";
const initialState = {
  name: "",
  email: "",
  subject: "",
  country: "",
  telephone: "",
  comment: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState(initialState);
  const [publishSuccess, setPublishSuccess] = useState("");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("res  subnmit");
    try {
      const res = await fetch("/api/create-contact-data", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("res..............", res);

      if (res.ok) {
        setFormData(initialState);
        setPublishSuccess(
          "Your Feedback is Successfully Sent We will Getback to You As Soon As Possible!"
        );
        setTimeout(() => {
          setPublishSuccess("");
        }, 10000);
      } else {
        setPublishSuccess("Oops! Something is wrong.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto'>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
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
          <FloatingLabel
            variant='outlined'
            label='Subject:'
            id='subject'
            type='text'
            required
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
          <FloatingLabel
            variant='outlined'
            label='Country:'
            id='country'
            type='text'
            required
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
          <FloatingLabel
            variant='outlined'
            label='Telephone:'
            id='telephone'
            type='text'
            required
            value={formData.telephone}
            onChange={(e) =>
              setFormData({ ...formData, telephone: e.target.value })
            }
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6'>
          <FloatingLabel
            variant='outlined'
            label='Comments:'
            id='comments'
            type='text'
            required
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
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
