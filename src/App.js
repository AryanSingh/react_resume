import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="resume_parent">
        <section className="resume_header">
            <h4>Aryan</h4>
            <h4>aryan.iitgn@gmail.com</h4>
            <p>github.com/AryanSingh</p>
            <p>Phone Number: 8292935091</p>
        </section>
        <section className="resume_content">
            <div className="work_experience">
                <div className="work_experience_header">
                    <h4>Work Experience</h4>
                </div>
                <div className="experience1">
                    <div className="experience1_header">
                        <h4>Awign</h4>
                    </div>
                    <div className="exeprience1_content">
                        <p>Created from scratch the new responsive webapp of the product using ReactJs</p>
                        <p>Developed the whole UI, implemented the designs to the minutest detail</p>
                        <p>Wrote modular, reusable code and implemented the best ReactJs practices</p>
                        <p>Implemented offline viewing and latest features in the app</p>
                    </div>
                </div>
                <div className="experience2">
                    <div className="experience2_header">
                        <h4>Grexter</h4>
                    </div>
                    <div className="exeprience2_content">
                        <p>Fully reworked the existing website in AngularJS</p>
                        <p>Extended the website with new features, integrated new designs, added stub mode for the website to work without backend</p>
                        <p>Converted the whole website to Angular2</p>
                        <p>Decreased load times, made the website bugfree</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default App;
