import React from "react";
import "./Navbar.css";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <div className="navbar">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Company Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Company: Geeksynergy Technology Pvt Ltd</p>
          <p>Adress: SanjayNagar Bengaluru-56</p>
          <p>Phone: xxxxxxxxx9</p>
          <p>Email: xxxx@gmail.com</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="navbar-left">Movies</div>

      <div className="navbar-right">
        <Link className="p" to="/login">
          Logout
        </Link>

        <p className="navbar-companyInfo p" onClick={handleShow}>
          CompanyInfo
        </p>
      </div>
    </div>
  );
};

export default Navbar;
