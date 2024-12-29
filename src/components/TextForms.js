import React, { useState } from 'react';

export default function TextForms(props) {
  const [text, setText] = useState('');
  const [sentenceCountResult, setSentenceCountResult] = useState(0);
  const [alert, setAlert] = useState(null);
  const [alertOpacity, setAlertOpacity] = useState(1); // Added to control opacity

  // Function to count sentences in the text
  function sentenceCount(text) {
    const sentences = text.match(/[^.!?]+[.!?]/g);
    return sentences ? sentences.length : 0;
  }

  // Function to display alert messages with smooth dismissal
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setAlertOpacity(1); // Reset opacity to fully visible
    setTimeout(() => {
      setAlertOpacity(0); // Start fade-out by setting opacity to 0
      setTimeout(() => setAlert(null), 500); // Remove alert after fade-out duration (500ms)
    }, 3000); // Show alert for 3 seconds before fading
  };

  // Function to copy text to clipboard
  function copyText(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        showAlert("Text copied to clipboard!", "success");
      })
      .catch(() => {
        showAlert("Failed to copy text.", "danger");
      });
  }

  // Convert text to uppercase
  const handleTOup = () => {
    if (text.trim() === '') {
      showAlert("Please enter something before converting to uppercase!", "warning");
      return;
    }
    setText(text.toUpperCase());
  };

  // Convert text to lowercase
  const handleTOdown = () => {
    if (text.trim() === '') {
      showAlert("Please enter something before converting to lowercase!", "warning");
      return;
    }
    setText(text.toLowerCase());
  };

  // Clear the text
  const handleTOclear = () => {
    if (text.trim() === '') {
      showAlert("Nothing to clear!", "warning");
      return;
    }
    setText('');
    setSentenceCountResult(0);
  };

  // Reverse the text
  const handleReverseText = () => {
    if (text.trim() === '') {
      showAlert("Please enter something before reversing the text!", "warning");
      return;
    }
    setText(text.split('').reverse().join(''));
  };

  // Handle copy button click
  const handleCopy = () => {
    if (text.trim() === '') {
      showAlert("Nothing to copy!", "warning");
      return;
    }
    copyText(text);
  };

  // Handle sentence count button click
  const handleSentenceCount = () => {
    if (text.trim() === '') {
      showAlert("Please enter something to count sentences!", "warning");
      return;
    }
    const count = sentenceCount(text);
    setSentenceCountResult(count);
  };

  // Update text state when typing
  const handleChange = (event) => {
    setText(event.target.value);
  };

  // Calculate word count and reading time
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const readTime = (wordCount * 0.008).toFixed(2); // Assuming 1 minute per 125 words

  // Define styles based on props.mode
  const styles = {
    backgroundColor: props.mode === 'dark' ? '#282828' : props.mode === 'green' ? '#e8f5e9' : props.mode === 'blue' ? '#e3f2fd' : 'white',
    color: props.mode === 'dark' ? 'white' : props.mode === 'green' ? '#2e7d32' : props.mode === 'blue' ? '#0d47a1' : 'black'
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        {alert && (
          <div
            className={`alert alert-${alert.type} alert-dismissible`}
            style={{
              opacity: alertOpacity,
              transition: "opacity 0.75s ease-in-out", // Smooth opacity transition
              position: 'fixed', // Ensure alert doesn't shift layout
              top: '50px', // Position the alert at the top
              right: '10px', // Align it to the top right
              zIndex: 1000, // Ensure it's above other content
              width: 'auto',
            }}
          >
            {alert.message}
          </div>
        )}
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter the text"
            value={text}
            onChange={handleChange}
            id="mybox"
            rows="8"
            style={styles} // Apply dynamic styles
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleTOup}>{props.but}</button>
        <button className="btn btn-danger mx-2 my-1" onClick={handleTOdown}>{props.but1}</button>
        <button className="btn btn-warning mx-2 my-1" onClick={handleTOclear}>{props.but2}</button>
        <button className="btn btn-success mx-2 my-1" onClick={handleSentenceCount}>Count Sentences</button>
        <button className="btn btn-info mx-2 my-1" onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
      </div>

      <div className="container my-3">
        <h1>YOUR TEXT SUMMARY:</h1>
        <p>{wordCount} words and {text.length} characters.</p>
        <p>{readTime} minutes read.</p>
        <h2>PREVIEW</h2>
        <p>{text.length > 0 ? text : "Enter text to preview"}</p>
        <p>{sentenceCountResult} sentences.</p>
      </div>
    </>
  );
}
