/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-18 19:41:39
 * @modify date 2020-09-21 03:34:45
 * @desc [description]
 */

import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Nav, Navbar, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import Axios from "axios";

function index({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");
  const [dataSearch, setDataSearch] = useState([]);

  const handleChange = useCallback((event) => {
    const searchInput = event.target.value;
    setSearchInput(searchInput);
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const url = "http://universities.hipolabs.com/search";
    try {
      const result = await Axios.get(url, {
        params: { name: `${searchInput}` },
      });
      setDataSearch(result.data);
      onSearch(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link href="/">
            <p style={{ color: "azure" }}>List Universities</p>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link href="/newsletter">
                <p style={{ color: "azure" }}> NewsLetter</p>
              </Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <Form inline onSubmit={handleSubmit}>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={handleChange}
                value={searchInput}
              />

              <Button type="submit" variant="outline-info">
                Search
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}

export default index;
