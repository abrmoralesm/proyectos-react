import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import './Banner.css'

export default function SignUpBanner() {
  const [showBanner, setShowBanner] = useState(true);
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar el email al servidor o hacer cualquier otra acción
    console.log(`Email enviado: ${email}`);
    setShowBanner(false);
  };

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <CSSTransition
      in={showBanner}
      timeout={500}
      classNames="banner"
      unmountOnExit
    >
      <div className="banner">
        <button className="close-button" onClick={handleClose}>
          X
        </button>
        <div className="text-container">
          <h3>Sign Up and Save 10%</h3>
          <p>
            Subscribe to our newsletter and bring some culture to your inbox.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <button type="submit" className="sign">Sign up</button>
            <button type="button" onClick={handleClose} className="no">
              No, thanks
            </button>
          </form>
        </div>
      </div>
    </CSSTransition>
  );
}
