import React from "react";
import GetHTML from "../utils/getHTML";
import { useReactToPrint } from "react-to-print";

const ReceiptPage: React.FC = () => {
  const ref = React.useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    content: () => ref.current,
    onBeforePrint: () => console.log("Before printing ..."),
    onAfterPrint: () => console.log("After printing..."),
    removeAfterPrint: true,
  });

  return (
    <div className="container mt-3">
      <h3 className="text-2xl text-center font-semibold">
        Print Styled Receipts
      </h3>
      <hr className="my-2" />
      <div ref={ref}>
        <GetHTML />
      </div>
      <button className="alt-btn" onClick={handlePrint}>
        Print Receipt
      </button>
    </div>
  );
};

export default ReceiptPage;
