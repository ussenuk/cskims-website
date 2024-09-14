import React, { useState, useEffect } from 'react';
import './donate.css';

function DonationPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Redirect to the Donorbox page if screen width is mobile-sized
        window.location.href = "https://donorbox.org/send-a-child-to-school-for-just-8-complexe-scolaire-kims";
      }
    };

    // Call the handleResize function once on mount
    handleResize();

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const iframe = document.querySelector('iframe');
    const handleLoad = () => setLoading(false);

    if (iframe) {
      iframe.onload = handleLoad;
    }

    return () => {
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, []);

  return (
    <div className="max-w-8xl mx-auto p-4">
      <div className="title">
        <h1>Support Complexe Scolaire Kims</h1>
        <h1>Soutien à Complexe Scolaire Kims</h1>
      </div>

      <div className="iframe-container">
        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}
        <iframe
          className="donation-iframe"
          src="https://donorbox.org/send-a-child-to-school-for-just-8-complexe-scolaire-kims"
          style={{ display: loading ? 'none' : 'block' }}
        ></iframe>
      </div>
    </div>
  );
}

export default DonationPage;
