/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-20 22:58:14
 * @modify date 2020-09-20 22:58:14
 * @desc [description]
 */

import React, { Fragment, useState } from "react";
import Header from "../components/Header";
import Newsletter from "../components/Body/Newsletter";
import Head from "next/head";

function newsletter() {
  return (
    <Fragment>
      <Head>
        <title>Universities - Newsletter</title>
      </Head>
      <Header />
      <Newsletter />
    </Fragment>
  );
}

export default newsletter;
