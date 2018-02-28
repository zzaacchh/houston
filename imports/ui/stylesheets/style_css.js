import React, { Component } from 'react';

export default class style_css extends Component {
  render() {
    return (
      <style dangerouslySetInnerHTML={{__html: `
        .houston .navbar > .navbar-inner > .container {
          margin-top: 0px;
        }
        .houston .navbar > .navbar-inner > .container {
          margin-top: 0px;
        }

        .houston > .container {
          margin-top: 50px;
          padding: 10px;
          overflow-x: auto;
          /*border: 1px solid #eee;*/
        }

        .houston textarea {
          width: 100%;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        .houston #collection-page-header-actions > button {
          margin-left: 5px;
        }

        .houston {
          visibility: visible;
        }

        .houston .houston-collection {
          overflow: hidden;
        }

        .houston .action-cell {
          text-align: right;
        }
        .houston .custom-houston-action {
          margin-right: 5px;
        }

        .houston #houston-report-bug {
          float: left;
        }

        .houston .houston-form {
          max-width: 330px;
          margin-top: 100px;
        }

        .houston-form > form {
          margin: 0 auto;
          padding: 15px;
        }

        .houston-form .form-heading,
        .houston-form .form-control {
          position: relative;
          height: auto;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          padding: 10px;
          font-size: 16px;
        }

        .houston-form .form-heading {
          font-size: 20px;
        }

        .houston-sign-in-form .form-heading {
          padding-top: 0;
          margin-top: 0;
        }

        .houston-form .form-control:focus {
          z-index: 2;
        }

        .houston-form input {
          border-radius: 0px;
        }

        .houston-form input:first-of-type {
          margin-bottom: -2px;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .houston-form input:last-of-type {
          margin-bottom: 20px;
          border-bottom-right-radius: 8px;
          border-bottom-left-radius: 8px;
        }

        .houston-form .role-box {
          float: left;
          margin-right: 20px;
        }

        .houston-form .role-box label {
          font-weight: normal !important;
        }

        .fa:before {
          padding: 7px;
        }

        .brand > small {
          color: #ddd;
          font-size: 14px;
        }

        /* Sidebar */
        /* Hide for mobile, show later in CSS file */
        .sidebar {
          display: none;
        }

        @media (min-width: 768px) {
          .sidebar {
            position: fixed;
            top: 51px;
            bottom: 0;
            left: 0;
            z-index: 1000;
            display: block;
            padding: 20px;
            overflow-x: hidden;
            overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
            background-color: #f5f5f5;
            border-right: 1px solid #eee;
          }
        }

        /* Sidebar navigation */
        .houston .nav-sidebar {
          margin-right: -21px; /* 20px padding + 1px border */
          margin-bottom: 20px;
          margin-left: -20px;
        }

        .houston .nav-sidebar > li > a {
          padding-right: 20px;
          padding-left: 20px;
        }

        .houston .nav-sidebar > .active > a,
        .houston .nav-sidebar > .active > a:hover,
        .houston .nav-sidebar > .active > a:focus {
          color: #fff;
          background-color: #428bca;
        }

        /*
         * Main content
         */
        .houston .main {
          padding-top: 60px;
        }

        @media (min-width: 768px) {
          .houston .main {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        .houston .main .page-header {
          margin-top: 0;
        }

        /*
         * Document view
         */
        #flash-message {
          position: fixed;
          text-align: center;
          z-index: 1000;
          width: 100%;
          bottom: -80px;
          padding: 20px;
          left: 0;
          transition: bottom .3s ease;
          -moz-transition: bottom .3s ease;
          -webkit-transition: bottom .3s ease;
        }
        #flash-message.up {
          bottom: 0;
        }
        #houston-doc-actions {
          margin-bottom: 80px;
        }
      `}} />
    );
  }
}
