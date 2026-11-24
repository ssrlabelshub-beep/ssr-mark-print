
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { LockKeyhole, Mail, Eye, EyeOff } from "lucide-react";
import "./AdminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Authenticate admin
      const { error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) {
        throw loginError;
      }

      // Verify that this user is an authorized admin
      const { data: isAdmin, error: adminError } =
        await supabase.rpc("is_admin");

      if (adminError || !isAdmin) {
        await supabase.auth.signOut();
        throw new Error(
          "You are not authorized to access the admin panel."
        );
      }

      navigate("/admin/dashboard", { replace: true });

    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-logo">
          <div className="admin-logo-icon">
            <LockKeyhole size={28} />
          </div>

          <h1>SSR Mark & Print</h1>
          <p>ADMIN PORTAL</p>
        </div>

        <div className="admin-login-heading">
          <h2>Welcome Back</h2>
          <p>Sign in to manage customer enquiries.</p>
        </div>

        <form onSubmit={handleLogin}>

          <label htmlFor="admin-email">
            Email Address
          </label>

          <div className="admin-input-wrapper">
            <Mail size={19} />

            <input
              id="admin-email"
              type="email"
              placeholder="Enter admin email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <label htmlFor="admin-password">
            Password
          </label>

          <div className="admin-input-wrapper">
            <LockKeyhole size={19} />

            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="admin-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          {error && (
            <div className="admin-login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="admin-login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "SIGN IN"}
          </button>

        </form>

        <div className="admin-login-footer">
          Secure Admin Access
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;
