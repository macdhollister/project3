import React, { Component } from 'react';
import Signup from "../../components/SignupAndLogin/Signup";
import Footer from "../../components/StaticComps/Footer";
import Navbar from "../../components/StaticComps/Navbar";
import './Homepage.css';

import background from "../../images/background.jpg";

class SignupPage extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url("${background}")`
  }

  render() {
    return (

    <div className="Site">
      <Navbar />
      <Signup />
      <Footer />
    </div>
      
    );
  }
}

export default SignupPage;
