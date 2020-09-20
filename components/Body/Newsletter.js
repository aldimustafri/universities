/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-21 03:05:51
 * @modify date 2020-09-21 03:05:51
 * @desc [description]
 */

import React, { Fragment, useState } from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";
import styles from "./Newsletter.module.scss";
import { ToastContainer, toast, Zoom } from "react-toastify";
import Router from "next/router";

function Newsletter() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const url = "/api/newsletter";

    try {
      const response = await Axios.post(url, {
        name: name,
        email: email,
        address: address,
      });

      if (response.status === 200) {
        toast.dark("Thanks! your data added :D", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Zoom,
        });
        return Router.reload();
      } else {
        console.log("Ups, Something went wrong :(");
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Fragment>
      <Container>
        <div className={styles.card}>
          <ToastContainer />
          <div className={styles.padding}>
            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    placeholder="Enter Name"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  placeholder="Enter Address"
                  onChange={(event) => setAddress(event.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </Fragment>
  );
}

export default Newsletter;
