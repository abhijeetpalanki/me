import React, { Component } from 'react';

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Full Stack Software Developer at Applab Systems Inc.{' '}
                          <span>2018 - Present</span>
                        </h2>
                        <h2>
                          Project: Dotnet Developer at State of Arkansas
                          <span> | Little Rock, AR</span>
                        </h2>
                        <ul>
                          <li>
                            The key purpose of this project is to implement
                            Single Sign On for various .NET applications using
                            C#, ASP.NET MVC, ADO.NET, Entity Framework, ASP.NET
                            Validation Controls using JavaScript, and SQL
                            Server.
                          </li>
                          <li>
                            Used Cascading Style Sheets (CSS) classes and
                            Bootstrap to maintain the uniformity throughout the
                            application.
                          </li>
                          <li>
                            Implemented stored procedures and User Defined
                            Functions to retrieve the data from the central
                            database using T-SQL and Entity Framework Database
                            First approach resulting in faster results by 30%.
                          </li>
                          <li>
                            Added unit tests to extensively test out the complex
                            logic by providing 90% code coverage using N-Unit
                            Testing.
                          </li>
                          <li>
                            Used Ankh/Tortoise SVN for Source Control including
                            assessment, coding, testing and optimization.
                          </li>
                        </ul>
                        <hr />
                        <h2>
                          Project: Programmer Analyst at Walmart Stores Inc.
                          <span> | Bentonville, AR</span>
                        </h2>
                        <ul>
                          <li>
                            Acted as a liaison between various teams, Business,
                            other scrums and vendors to deliver end-to-end
                            experience.{' '}
                          </li>
                          <li>
                            Familiarity with JavaScript frameworks and libraries
                            that support high quality single page applications
                            using React.js, React-Router, Node.js, and consumed
                            APIs from client side using fetch.
                          </li>
                          <li>
                            Scoped project requirements using Agile & Scrum
                            principles and improved speed of web development by
                            45%.
                          </li>
                          <li>
                            Maintained code branches and versions in TFS/VSTS.
                            Participated in regular meetings with business users
                            and various stakeholders to ensure smooth delivery,
                            unit testing, and UAT.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInRight"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education</h2>
                        <h2>
                          Masters Degree at University of Bridgeport,{' '}
                          <span>Specialization: Computer Science |</span>{' '}
                          <span>2015-2016</span>
                        </h2>
                        <p>
                          I have accomplished my Masters Degree specialized in
                          Computer Science with subjects such as Object Oriented
                          Programming with C#, Advanced Databases, and Data
                          Structures & Algorithms etc.
                        </p>
                        <hr />
                        <h2>
                          Bachelors Degree at SRM University,{' '}
                          <span>Specialization: Computer Engineering |</span>{' '}
                          <span>2011-2015</span>
                        </h2>
                        <p>
                          I have completed my Bachelors Degree specialized in
                          Computer Engineering with major subjects as Network
                          Security, Computer Networks, Wireless Communication,
                          and Digital Image Processing etc.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
