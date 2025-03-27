import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-always-white">404</h1>
        <p className="text-2xl mt-4 text-always-white">Page non trouvée</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
