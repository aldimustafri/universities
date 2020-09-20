/**
 * @author Aldi Mustafri
 * @email aldimustafri@live.com
 * @create date 2020-09-18 19:12:16
 * @modify date 2020-09-18 19:12:16
 * @desc [description]
 */

import React, { Fragment, useState, useEffect } from "react";
import Loading from "../components/Body/Loading";
import Universities from "../components/Body/universities";
import Header from "../components/Header";
import Axios from "axios";
import Head from "next/head";

function index() {
  const [data, setData] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);

  const searchFunction = (dataSearch) => {
    setDataSearch(dataSearch);
  };

  useEffect(() => {
    const url = "http://universities.hipolabs.com/search";

    const fetchData = async () => {
      SetLoading(true);

      try {
        const result = await Axios.get(url, {
          params: { dataType: "jsonp" },
        });
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
      SetLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Universities - Home</title>
      </Head>
      <Header onSearch={searchFunction} />
      {loading ? <Loading /> : <Universities data={data} dataSearch={dataSearch} />}
    </Fragment>
  );
}

export default index;
