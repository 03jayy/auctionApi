import { FaBars, FaTimes } from "react-icons/fa";

function navBar() {
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <a href="/#">Registration</a>
        <a href="/#">Login</a>
        <a href="/#">Home</a>
        <a href="/#">User</a>
        <a href="/#">Home</a>
        <button>
          <faTimes />
        </button>
      </nav>
    </header>
  );
}

export default navBar();
