import React, { useState } from "react";
import GetHTML from "../utils/getHTML";
import { useReactToPrint } from "react-to-print";

const ReceiptPage: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [mesList, setMesList] = useState<string[]>([]);
  const ref = React.useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    content: () => ref.current,
    onBeforePrint: () => console.log("Before printing ..."),
    onAfterPrint: () => console.log("After printing..."),
    removeAfterPrint: true,
  });
  const handleAddMessage = () => {
    setMesList([...mesList, message]);
    setMessage("");
  };
  return (
    <div className="container mt-3">
      <h3 className="text-2xl text-center font-semibold">
        Print Styled Receipts
      </h3>
      <input
        type="text"
        value={message}
        placeholder="Enter the text"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleAddMessage} className="alt-btn">
        Add
      </button>
      <hr className="my-2" />
      <hr />
      <div ref={ref}>
        <GetHTML messageList={mesList} />
      </div>
      <button className="alt-btn" onClick={handlePrint}>
        Print Receipt
      </button>
    </div>
  );
};

export default ReceiptPage;
