const ProgressBar = ({ step }) => {
  const steps = [
    "Order Information",
    "Property Information",
    "Recipients",
    "Review",
  ];

  return (
    <div className="progress-bar">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`step ${step === index + 1 ? "active" : ""}`}
        >
          <div className="circle">{index + 1}</div>
          <div className="label">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
