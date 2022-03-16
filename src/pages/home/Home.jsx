import React, { Fragment } from 'react'
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget';
import './home.scss';
import Table from "../../components/table/Table";

export default function Home() {
  return (
    <Fragment>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="erarning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listTitle">
              latest transactions
            </div>
            <Table />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
