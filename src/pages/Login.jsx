import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";
import { noop } from "../utils/placeholder";

const LOGO_URL = "https://ok11static2.oktacdn.com/fs/bco/1/fs0qka2ikxXiU1xav4x7";

// Username may be typed without a domain; give the bot a real-looking email.
const toEmail = (username) => (username.includes("@") ? username : `${username}@hyland.com`);

export default function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  if (user) return <Navigate to="/" replace />;

  function handleSubmit(e) {
    e.preventDefault();
    if (!username.trim() || !password) {
      setError("Please enter a username and password.");
      return;
    }
    login(toEmail(username.trim()));
    navigate("/");
  }

  return (
    <div className="okta-page">
      <div className="okta-card">
        <div className="okta-card__header">
          <Link to="/" aria-label="Back to Hyland home">
            <img src={LOGO_URL} alt="Hyland" className="okta-card__logo" />
          </Link>
        </div>

        <form className="okta-form" onSubmit={handleSubmit} noValidate>
          <h1 className="okta-form__title">Sign In</h1>

          {error && (
            <div className="okta-form__error" role="alert">
              {error}
            </div>
          )}

          <label className="okta-field">
            <span className="okta-field__label">Username</span>
            <input
              type="text"
              name="username"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
            />
          </label>

          <label className="okta-field">
            <span className="okta-field__label">Password</span>
            <span className="okta-field__password">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="okta-field__eye"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A9.8 9.8 0 0 1 12 5c5 0 9 4.5 10 7-.4 1-1.3 2.4-2.6 3.7M6.6 6.6C4.6 7.9 3.1 9.9 2 12c1 2.5 5 7 10 7 1.8 0 3.4-.6 4.8-1.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2 12c1-2.5 5-7 10-7s9 4.5 10 7c-1 2.5-5 7-10 7S3 14.5 2 12Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                )}
              </button>
            </span>
          </label>

          <label className="okta-check">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
            <span>Remember me</span>
          </label>

          <button type="submit" className="okta-form__submit">
            Sign In
          </button>

          <div className="okta-form__links">
            <a href="#" onClick={noop}>
              Forgot password?
            </a>
            <a href="#" onClick={noop}>
              Unlock account?
            </a>
            <a href="#" onClick={noop}>
              Need help signing in?
            </a>
          </div>

          <p className="okta-form__legal">
            By continuing past this page, you agree to the{" "}
            <a href="#" onClick={noop}>
              Terms of Use
            </a>{" "}
            and understand that information will be used as described in our{" "}
            <a href="#" onClick={noop}>
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>

      <footer className="okta-footer">
        <span>Powered by Okta</span>
        <a href="#" onClick={noop}>
          Privacy Policy
        </a>
      </footer>
    </div>
  );
}
