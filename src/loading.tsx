import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-indicator"></div>
      <h3 className="loading-text">Creating Recipe...</h3>
    </div>
  );
};

export default Loading;
