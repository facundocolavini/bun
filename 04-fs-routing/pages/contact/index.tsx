import React from 'react';
import { renderToReadableStream } from 'react-dom/server';

const ContactPage = ({name='Facundo'}) => {
  
  return (
    <div>ContactPage {name}</div>
  )
}


export default ContactPage;