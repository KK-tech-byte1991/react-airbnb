import React, { Fragment } from 'react';
import { useState } from 'react';
import { Airbnb } from '../Assets/images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';

import Modal from 'react-bootstrap/Modal';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './styles.css';
import Col from 'react-bootstrap/Col';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Navbar expand="lg" className="bg-body">
      <Container>
        <Navbar.Brand href="#home">
          <Airbnb />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex justify-content-center">
            <Button
              variant="outlined-secondary"
              style={{
                fontSize: '15px',
                borderRadius: '25px',
                fontWeight: '600',
              }}
            >
              Anywhere | Any week | Add guest
            </Button>
          </Navbar.Text>
          </Navbar.Collapse>
        

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="d-flex">
            <IconButton
              style={{
                fontSize: '15px',
                borderRadius: '25px',
                fontWeight: '600',
              }}
            >
              Airbnb your home
            </IconButton>
            <IconButton>
              <LanguageIcon />
            </IconButton>
            <Dropdown>
              <Dropdown.Toggle
                className="dropdown-togglew"
                variant="outer-secondary"
                style={{
                  color: 'grey',
                  borderRadius: '20px',
                  borderColor: 'grey',
                  padding: '5px 5px 5px 12px',
                }}
              >
                <MenuIcon />
                <AccountCircleIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-menu-lg-end">
                <Dropdown.Item href="#/action-1">
                  <span style={{ fontWeight: '600' }}>Sign up</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Log in</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">
                  Airbnb your home
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HomePage;
