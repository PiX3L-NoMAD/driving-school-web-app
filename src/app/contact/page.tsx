'use client';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='max-w-md mx-auto'>
      <h2 className='text-2xl font-bold'>
        Contact us
      </h2>
      <form className='mt-4'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={form.name}
          onChange={handleChange}
          className='w-full p-2 border rounded mb-2'
        />
        <input
          type='email'
          name='email'
          placeholder='E-mail'
          value={form.email}
          onChange={handleChange}
          className='w-full p-2 border rounded mb-2'
        />
        <textarea
          name='message'
          placeholder='Message'
          value={form.message}
          onChange={handleChange}
          className='w-full p-2 border rounded mb-2'
        />
        <button className='bg-blue-600 text-white px-4 py-2 rounded'>
          Send
        </button>
      </form>
    </div>
  );
}
