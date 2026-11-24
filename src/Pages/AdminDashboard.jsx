
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Users,
  ClipboardList,
  Clock,
  RefreshCw,
  Trash2,
  Search
} from "lucide-react";

import { supabase } from "../lib/supabase";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Check admin access and load enquiries
  useEffect(() => {
    let active = true;

    async function loadDashboard() {
      try {
        const { data: { user }, error: userError } =
          await supabase.auth.getUser();

        if (userError || !user) {
          navigate("/admin", { replace: true });
          return;
        }

        const { data: isAdmin, error: adminError } =
          await supabase.rpc("is_admin");

        if (adminError || !isAdmin) {
          await supabase.auth.signOut();
          navigate("/admin", { replace: true });
          return;
        }

        const { data, error: enquiryError } = await supabase
          .from("enquiries")
          .select("*")
          .order("created_at", { ascending: false });

        if (enquiryError) throw enquiryError;

        if (active) {
          setEnquiries(data || []);
        }
      } catch (err) {
        if (active) setError(err.message);
      } finally {
        if (active) setLoading(false);
      }
    }

    loadDashboard();

    return () => {
      active = false;
    };
  }, [navigate]);

  // Refresh enquiries
  const refreshEnquiries = async () => {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("enquiries")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError(error.message);
    } else {
      setEnquiries(data || []);
    }

    setLoading(false);
  };

  // Update enquiry status
  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from("enquiries")
      .update({
        status,
        updated_at: new Date().toISOString()
      })
      .eq("id", id);

    if (error) {
      alert("Unable to update status: " + error.message);
      return;
    }

    setEnquiries((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  // Delete enquiry
  const deleteEnquiry = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this enquiry?"
    );

    if (!confirmed) return;

    const { error } = await supabase
      .from("enquiries")
      .delete()
      .eq("id", id);

    if (error) {
      alert("Unable to delete enquiry: " + error.message);
      return;
    }

    setEnquiries((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  // Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin", { replace: true });
  };

  const newCount = enquiries.filter(
    (item) => item.status === "NEW"
  ).length;

  const filteredEnquiries = enquiries.filter((item) => {
    const term = search.toLowerCase();

    return [
      item.name,
      item.phone,
      item.email,
      item.product
    ].some((value) =>
      (value || "").toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div className="admin-loading">
        <RefreshCw className="admin-spin" size={28} />
        <p>Loading admin dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">

      {/* SIDEBAR */}
      <aside className="admin-sidebar">

        <div className="admin-sidebar-brand">
          <h2>SSR</h2>
          <span>MARK & PRINT</span>
        </div>

        <div className="admin-sidebar-label">
          MANAGEMENT
        </div>

        <div className="admin-sidebar-link active">
          <ClipboardList size={19} />
          Enquiries
        </div>

        <button
          className="admin-sidebar-logout"
          onClick={handleLogout}
        >
          <LogOut size={19} />
          Logout
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-main">

        <header className="admin-topbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage your customer enquiries</p>
          </div>

          <button
            className="admin-refresh-button"
            onClick={refreshEnquiries}
          >
            <RefreshCw size={17} />
            Refresh
          </button>
        </header>

        {/* STATISTICS */}
        <section className="admin-stats">

          <div className="admin-stat-card">
            <div className="admin-stat-icon blue">
              <ClipboardList size={23} />
            </div>
            <div>
              <p>Total Enquiries</p>
              <h2>{enquiries.length}</h2>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon orange">
              <Clock size={23} />
            </div>
            <div>
              <p>New Enquiries</p>
              <h2>{newCount}</h2>
            </div>
          </div>

          <div className="admin-stat-card">
            <div className="admin-stat-icon green">
              <Users size={23} />
            </div>
            <div>
              <p>Other Enquiries</p>
              <h2>{enquiries.length - newCount}</h2>
            </div>
          </div>

        </section>

        {/* ENQUIRIES TABLE */}
        <section className="admin-enquiries-section">

          <div className="admin-section-heading">
            <div>
              <h2>Customer Enquiries</h2>
              <p>View and manage all customer requests.</p>
            </div>
          </div>

          <div className="admin-search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search name, phone, email or product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {error && (
            <div className="admin-dashboard-error">
              {error}
            </div>
          )}

          <div className="admin-table-wrapper">

            <table className="admin-enquiries-table">

              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Phone</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="admin-empty">
                      No customer enquiries found.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((item) => (

                    <tr key={item.id}>

                      <td>
                        <strong>{item.name}</strong>
                        <small>{item.email || "No email"}</small>
                      </td>

                      <td>{item.phone}</td>

                      <td>{item.product}</td>

                      <td>{item.quantity || "-"}</td>

                      <td>
                        {new Date(item.created_at).toLocaleDateString("en-IN")}
                      </td>

                      <td>
                        <select
                          className="admin-status-select"
                          value={item.status}
                          onChange={(e) =>
                            updateStatus(item.id, e.target.value)
                          }
                        >
                          <option value="NEW">NEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="IN_PROGRESS">IN PROGRESS</option>
                          <option value="CONVERTED">CONVERTED</option>
                          <option value="CLOSED">CLOSED</option>
                        </select>
                      </td>

                      <td>
                        <button
                          className="admin-delete-button"
                          onClick={() => deleteEnquiry(item.id)}
                          title="Delete enquiry"
                        >
                          <Trash2 size={17} />
                        </button>
                      </td>

                    </tr>

                  ))
                )}

              </tbody>

            </table>

          </div>

        </section>

      </main>
    </div>
  );
}

export default AdminDashboard;
