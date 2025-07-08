import { useState } from "react";
import OrderInformation from "./steps/OrderInformation";
import PropertyInformation from "./steps/PropertyInformation";
import OrderRecipients from "./steps/OrderRecipients";
import OrderReview from "./steps/OrderReview";
import ProgressBar from "./ProgressBar";

const OrderForm = ({ setOrderId, setSubmitted, submitted }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const renderStep = () => {
    switch (step) {
      case 1:
        return <OrderInformation next={nextStep} />;
      case 2:
        return <PropertyInformation next={nextStep} back={prevStep} />;
      case 3:
        return <OrderRecipients next={nextStep} back={prevStep} />;
      case 4:
        return (
          <OrderReview
            back={prevStep}
            setOrderId={setOrderId}
            setSubmitted={setSubmitted}
            submitted={submitted}
          />
        );
      default:
        return <OrderInformation next={nextStep} />;
    }
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <ProgressBar step={step} />
      {renderStep()}
    </div>
  );
};

export default OrderForm;
