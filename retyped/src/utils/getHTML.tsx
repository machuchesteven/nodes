import React from "react";
/**
 * This creates a pdf document using tailwind and passes it to be printed for a user
 * @returns a pdf document
 */
const GetHTML: React.FC = () => {
  return (
    <div>
      <div className="container mt-3">
        <h3 className="text-2xl text-center font-semibold">
          Print Styled Receipts
        </h3>
        <hr className="my-2" />
        <button className="alt-btn">The demo button</button>
      </div>
      <p className="text-sm text-center">
        This is a sample receipt page that can be printed using the print
        functionality of the browser.
      </p>
    </div>
  );
};

export default GetHTML;
