'use client'

interface Email {
    subject:string,
  }
  
export const EmailLink = ({ subject }:Email) => {
    const mailtoLink = `mailto:bimantoroa089@gmail.com?subject=${encodeURIComponent("Job application for position: " + subject)}`;
  
    return (
      <button className='bg-blue-500 px-5 py-2 rounded-full text-white '>
        <a href={mailtoLink}>
        Apply Now
        </a>
      </button>
    );
  };