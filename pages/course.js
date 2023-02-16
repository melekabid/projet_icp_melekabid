import React from "react";
import Head from "next/head";
import Script from "next/script";
import {useRouter} from "next/router"
import { NextPage } from "next";

function Course() {
   
        <>
    <Head>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <title>Purple Admin</title>
  {/* plugins:css */}
  <link
    rel="stylesheet"
    href="node_modules/mdi/css/materialdesignicons.min.css"
  />
  <link
    rel="stylesheet"
    href="node_modules/perfect-scrollbar/dist/css/perfect-scrollbar.min.css"
  />
  {/* endinject */}
  {/* plugin css for this page */}
  <link
    rel="stylesheet"
    href="node_modules/jquery-bar-rating/dist/themes/css-stars.css"
  />
  <link
    rel="stylesheet"
    href="node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
  />
  {/* End plugin css for this page */}
  {/* inject:css */}
  <link rel="stylesheet" href="css/style.css" />
  {/* endinject */}
  <link rel="shortcut icon" href="images/favicon.png" />
        </Head>
        <div className="container-scroller">
  {/* partial:partials/_navbar.html */}
  <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a className="navbar-brand brand-logo" href="index.html">
        <img src="images/logo.svg" alt="logo" />
      </a>
      <a className="navbar-brand brand-logo-mini" href="index.html">
        <img src="images/logo-mini.svg" alt="logo" />
      </a>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      <div className="search-field ml-4 d-none d-md-block">
        <form className="d-flex align-items-stretch h-100" action="#">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-transparent border-0"
              placeholder="Search"
            />
            <div className="input-group-btn">
              <button
                type="button"
                className="btn bg-transparent dropdown-toggle px-0"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="mdi mdi-earth" />
              </button>
              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">
                  Today
                </a>
                <a className="dropdown-item" href="#">
                  This week
                </a>
                <a className="dropdown-item" href="#">
                  This month
                </a>
                <div role="separator" className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  Month and older
                </a>
              </div>
            </div>
            <div className="input-group-addon bg-transparent border-0 search-button">
              <button type="submit" className="btn btn-sm bg-transparent px-0">
                <i className="mdi mdi-magnify" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item d-none d-lg-block full-screen-link">
          <a className="nav-link">
            <i className="mdi mdi-fullscreen" id="fullscreen-button" />
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle nav-profile"
            id="profileDropdown"
            href="#"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="images/faces/face1.jpg" alt="image" />
            <span className="d-none d-lg-inline">Daniel Russiel</span>
          </a>
          <div
            className="dropdown-menu navbar-dropdown w-100"
            aria-labelledby="profileDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-cached mr-2 text-success" />
              Activity Log
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-logout mr-2 text-primary" />
              Signout
            </a>
          </div>
        </li>
        <li className="nav-item nav-logout d-none d-lg-block">
          <a className="nav-link" href="#">
            <i className="mdi mdi-power" />
          </a>
        </li>
      </ul>
      <button
        className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="mdi mdi-menu" />
      </button>
    </div>
  </nav>
  {/* partial */}
  <div className="container-fluid page-body-wrapper">
    <div className="row row-offcanvas row-offcanvas-right">
      {/* partial:partials/_sidebar.html */}
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="index.html">
              <span className="menu-title">Dashboard</span>
              <i className="mdi mdi-home menu-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="collapse"
              href="course.html"
              aria-expanded="false"
              aria-controls="ui-basic"
            >
              <span className="menu-title">Course</span>
              <i className="menu-arrow" />
            </a>
            <div className="collapse" id="ui-basic">
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link" href="pages/ui-features/buttons.html">
                    Buttons
                  </a>
                </li>
                <li className="nav-item">
                  {" "}
                  <a
                    className="nav-link"
                    href="pages/ui-features/typography.html"
                  >
                    Typography
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="sidebar-progress">
          <p>Total Sales</p>
          <div className="progress progress-sm">
            <div
              className="progress-bar bg-gradient-success"
              role="progressbar"
              style={{ width: "72%" }}
              aria-valuenow={72}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p>50 Items sold</p>
        </div>
        <div className="sidebar-progress">
          <p>Customer Target</p>
          <div className="progress progress-sm">
            <div
              className="progress-bar bg-gradient-primary"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <p>200 Items sold</p>
        </div>
      </nav>
      {/* partial */}
      <div className="content-wrapper">
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-warning text-white">
              <div className="card-body">
                <h4 className="font-weight-normal mb-3">Weekly participant</h4>
                <h2 className="font-weight-normal mb-5">45633456</h2>
                <p className="card-text">Incresed by 60%</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info text-white">
              <div className="card-body">
                <h4 className="font-weight-normal mb-3"> Weekly Sales</h4>
                <h2 className="font-weight-normal mb-5"> $ 15,00000.00</h2>
                <p className="card-text">Decreased by 10%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title"> Course form</h4>
                <p className="card-description">Course form elements</p>
                <form className="forms-sample">
                  <div className="form-group">
                    <label htmlFor="exampleInputName1"> Course Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName1"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail3">Start Date</label>
                    <input className="form-control" placeholder="dd/mm/yyyy" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail3">end Date</label>
                    <input className="form-control" placeholder="dd/mm/yyyy" />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-control">
                      <option>Category1</option>
                      <option>Category2</option>
                      <option>Category3</option>
                      <option>Category4</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Course Video</label>
                    <input
                      type="file"
                      name="img[]"
                      className="file-upload-default"
                    />
                    <div className="input-group col-xs-12">
                      <input
                        type="text"
                        className="form-control file-upload-info"
                        
                        placeholder="Upload Image"
                      />
                      <span className="input-group-btn">
                        <button
                          className="file-upload-browse btn btn-info"
                          type="button"
                        >
                          Upload
                        </button>
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">Description</label>
                    <textarea
                      className="form-control"
                      id="exampleTextarea1"
                      rows={2}
                      defaultValue={""}
                    />
                  </div>
                  <button type="submit" className="btn btn-success mr-2">
                    Submit
                  </button>
                  <button className="btn btn-light">Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* content-wrapper ends */}
      {/* partial:partials/_footer.html */}
      <footer className="footer">
        <div className="d-sm-flex justify-content-center justify-content-sm-between">
          <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
            Copyright © 2017{" "}
            <a href="" target="_blank">
              Bootstrap Dash
            </a>
            . All rights reserved.
          </span>
          <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
            Hand-crafted &amp; made with{" "}
            <i className="mdi mdi-heart text-danger" />
          </span>
        </div>
      </footer>
      {/* partial */}
    </div>
    {/* row-offcanvas ends */}
  </div>
  {/* page-body-wrapper ends */}
</div>
        <Script src="node_modules/jquery/dist/jquery.min.js"></Script>
  <Script src="node_modules/popper.js/dist/umd/popper.min.js"></Script>
  <Script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></Script>
  <Script src="node_modules/perfect-scrollbar/dist/js/perfect-scrollbar.jquery.min.js"></Script>
 <Script src="node_modules/chart.js/dist/Chart.min.js"></Script>
 <Script src="js/off-canvas.js"></Script>
  <Script src="js/misc.js"></Script>
  <Script src="js/dashboard.js"></Script>
 
      </>
    

     
}
export default Course