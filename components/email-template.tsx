import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ firstName, email, message }: EmailTemplateProps) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }}
  >
    <h1
      style={{
        color: "#333333",
        fontSize: "24px",
        marginBottom: "20px",
        paddingBottom: "10px",
        borderBottom: "2px solid #f0f0f0",
      }}
    >
      New Contact Form Submission
    </h1>

    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "15px",
        borderRadius: "6px",
        marginBottom: "20px",
      }}
    >
      <p
        style={{
          margin: "0 0 10px 0",
          color: "#555555",
          fontSize: "16px",
        }}
      >
        <strong>From:</strong> {firstName} ({email})
      </p>
    </div>

    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "15px",
        borderRadius: "6px",
      }}
    >
      <p
        style={{
          margin: "0 0 10px 0",
          color: "#555555",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Message:
      </p>
      <p
        style={{
          margin: "0",
          color: "#333333",
          fontSize: "16px",
          lineHeight: "1.5",
          whiteSpace: "pre-wrap",
        }}
      >
        {message}
      </p>
    </div>
  </div>
);
