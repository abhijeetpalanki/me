import React, { Component } from 'react';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="home"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li
                style={{
                  backgroundImage: 'url(images/img_bg.jpg)',
                  backgroundPosition: 'top center',
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hi! <br />
                            I'm Abhijeet
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://docs.google.com/document/d/1wcKwxZ0AIZ48snptFJgb4QTfRjH7BNf_Gb-06B7yBlk/edit?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View CV
                              <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: 'url(images/img_bg.jpg)',
                  backgroundPosition: 'top center',
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            I love building
                            <br /> THINGS !!
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/abhijeetpalanki"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Projects <i className="icon-briefcase3" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                style={{
                  backgroundImage: 'url(images/img_bg.jpg)',
                  backgroundPosition: 'top center',
                }}
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>
                            You can follow <br />
                            me on ...{' '}
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://www.linkedin.com/in/abhijeetpalanki/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View Profile <i className="icon-linkedin2" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
