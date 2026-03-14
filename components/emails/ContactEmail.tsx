import * as React from 'react';

interface ContactEmailProps {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  phone,
  company,
  message,
}: Readonly<ContactEmailProps>) => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
    <h1 style={{ color: '#1e3a5f', borderBottom: '2px solid #f97316', paddingBottom: '10px' }}>New Contact Form Submission</h1>
    <p style={{ fontSize: '16px', color: '#333' }}>You have received a new message from your website contact form.</p>
    
    <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '8px', marginTop: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      {phone && <p><strong>Phone:</strong> {phone}</p>}
      {company && <p><strong>Company:</strong> {company}</p>}
      <div style={{ marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
        <strong>Message:</strong>
        <p style={{ whiteSpace: 'pre-wrap', color: '#555', fontStyle: 'italic' }}>{message}</p>
      </div>
    </div>
    
    <footer style={{ marginTop: '30px', fontSize: '12px', color: '#888' }}>
      This email was sent via the Skywebix Contact Form.
    </footer>
  </div>
);
