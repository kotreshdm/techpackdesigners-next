import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInSuccess } from "@/redux/user/userSlice";

function SignIn() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: any) => state.user);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "kkk  kkkk",
    email: "kk@kk.com",
    password: "Test#234",
  });
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields."));
    }
    let url = "/api/sign-in";
    if (isSignUp) {
      url = "/api/sign-up";
    }
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const response = await res.json();

      if (!response.success) {
        dispatch(signInFailure(response.message));
      }
      if (response.success) {
        const token = response.data.token;
        localStorage.setItem("access_token", token);
        dispatch(signInSuccess(response.data.user));
      }
    } catch (error: any) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <p className='text-sm mt-5'>
            You can sign in with your email and password or with Google.
          </p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            {isSignUp ? (
              <div>
                <Label value='Your name' />
                <TextInput
                  type='text'
                  placeholder='User name'
                  id='name'
                  onChange={handleChange}
                  value={formData.name}
                />
              </div>
            ) : null}
            <div>
              <Label value='Your email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <Label value='Your password' />
              <TextInput
                type='password'
                placeholder='Password'
                id='password'
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : isSignUp ? (
                "Sign Up"
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className='flex gap-2 text-sm mt-5'>
            <span>
              {isSignUp ? "Already have account?" : "Don't have an account?"}
            </span>
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className='text-blue-500'>
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {error && (
            <Alert className='mt-5' color='failure'>
              {error}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignIn;
