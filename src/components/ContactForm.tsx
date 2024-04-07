"use client";
import { Alert, Button } from "flowbite-react";
import React, { useState } from "react";
import { FloatingLabel } from "flowbite-react";
import { toast } from "react-toastify";
const ContactForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({ name: "kk" });
  const [publishError, setPublishError] = useState("");
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
      console.log(res);
      if (res.ok) {
        //toast.success("Contact created succesfullys!");
      } else {
        // toast.error("Oops! Something is wrong.");
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
            color={errors.name ? "error" : "success"}
            required
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              setErrors({ ...errors, name: "" });
            }}
          />
          <FloatingLabel
            variant='outlined'
            label='Email:'
            id='email'
            type='email'
            color={true ? "success" : "error"}
            required
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
