import React from 'react'

const FooterBottom = () => {
  return (
    <div className="w-full py-10">
        <p className="text-center text-gray-500 text-base">
           © {new Date().getFullYear()}. Esraa Alaa. All Rights Reserved.
        </p>
    </div>
  );
}

export default FooterBottom