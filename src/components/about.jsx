import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>

                      <p>
                        I'm a Full Stack Software Developer with experience in
                        various technologies such as Angular, React, .NET and
                        Microsoft SQL Server. I love exploring new technologies,
                        one of my recent project includes a COVID-19 Tracker
                        Application, designed and developed using React.js,
                        Axios and Bootstrap. You can check it out{' '}
                        <a
                          href="https://abhijeetpalanki-covid-19-tracker.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          here
                        </a>
                        .
                      </p>
                      <p>
                        I acquired project and time management skills, as well
                        as the ability to communicate with team members and
                        clients while effectively meeting milestones and
                        deadlines. I have worked on a multitude of web based
                        projects for a range of clients providing Web Design and
                        Development (C#, .NET Framework, MVC, Entity Framework,
                        SQL Server Web API, HTML, CSS, JS, jQuery, React.js,
                        Angular, Bootstrap, Responsive Layouts). During my
                        Masters Degree, I studied Computer Science, and
                        therefore have a keen understanding of web development,
                        object oriented programming and user experience design
                        which I put to good use on every project I work on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-6 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Front-End Development </h3>
                    <p>
                      I have experience building websites using JavaScript,
                      React.js, Angular, Bootstrap, HTML, and CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Back-End Development</h3>
                    <p>
                      As coming from the CS background, I have good grasp over
                      fundamental concepts of OOP using C#, and ASP.NET MVC, Web
                      API, EF and MS SQL.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
