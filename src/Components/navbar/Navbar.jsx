import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer" onClick={() => window.location.reload()}>
      <div className="navbarWrapper">
        <div className="logo">HACKER NEWS</div>
      </div>
    </div>
  );
};

export default Navbar;
