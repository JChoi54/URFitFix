export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-ur">
      <div className="container-fluid">
        <a className="navbar-brand" href="home.html">
          <img
            src="./images/logo.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          UR Fit Fix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href=".">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="checkin">
                Check-In
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="trends">
                Trends
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
