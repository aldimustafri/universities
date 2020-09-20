/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-19 04:15:48
 * @modify date 2020-09-19 04:15:48
 * @desc [description]
 */

import React, { Fragment } from "react";
import { Container, Row, Card } from "react-bootstrap";
import styles from "./Loading.module.scss";

function Loading() {
  return (
    <Fragment>
      <Container>
        <Row>
          <div className={styles.card}>
            <div className={styles.padding}>
              <div className={`${styles.shimmerBG} ${styles.title}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.padding}>
              <div className={`${styles.shimmerBG} ${styles.title}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.padding}>
              <div className={`${styles.shimmerBG} ${styles.title}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.padding}>
              <div className={`${styles.shimmerBG} ${styles.title}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.padding}>
              <div className={`${styles.shimmerBG} ${styles.title}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.padding}>
              <div className={`${styles.shimmerBG} ${styles.title}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
              <div className={`${styles.shimmerBG} ${styles.content} ${styles.margin_top}`}></div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Loading;
