/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-19 01:02:54
 * @modify date 2020-09-19 01:02:54
 * @desc [description]
 */

import React, { Fragment } from "react";
import { Container, Image, Row } from "react-bootstrap";
import styles from "./Universities.module.scss";

function Universities({ data, dataSearch }) {
  return (
    <Fragment>
      <Container>
        <Row>
          {dataSearch.length == 1 ? (
            <>
              {dataSearch.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.padding}>
                    <div className={`${styles.title}`}>
                      <Image src="/school.svg" className={styles.image} /> <span />
                      {item.name}
                    </div>
                    <div className={`${styles.content} ${styles.margin_top}`}>
                      <Image src="/flag.svg" className={styles.image} /> <span />
                      {item.country}
                    </div>
                    <div className={`${styles.content} ${styles.margin_top}`}>
                      {" "}
                      <Image src="/web.svg" className={styles.image} /> <span />
                      {item.web_pages}
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.padding}>
                    <div className={`${styles.title}`}>
                      <Image src="/school.svg" className={styles.image} /> <span />
                      {item.name}
                    </div>
                    <div className={`${styles.content} ${styles.margin_top}`}>
                      <Image src="/flag.svg" className={styles.image} /> <span />
                      {item.country}
                    </div>
                    <div className={`${styles.content} ${styles.margin_top}`}>
                      <Image src="/web.svg" className={styles.image} /> <span />
                      {item.web_pages}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </Row>
      </Container>
    </Fragment>
  );
}

export default Universities;
