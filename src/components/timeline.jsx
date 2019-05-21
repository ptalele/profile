import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Principal Engineer - Discover</a> <span>2010-present</span></h2>
                        <p>Working at Discover Financial Services as a Lead Principal Engineer of the Web platform team.
                            My major part of the work has been into the field of creating sustainable and scalable Web platform products which enables value streams at discover to do rapid business feature development.
                            Worked on Automated pipeline for continuous integration and delivery using Github,  Gradle, Jenkins, Nexus IQ, Sonarqube and Artifactory.
                            Architect, design and development of the commercial banking flagship product and associated software. Expand the scope, scale, performance, and reliability of these products.
                            I am also exploring the role of container technology like Docker and container-orchestration technologies like K8s, AWS and Open-shift.
                            Swarm to create industry standard cloud native products.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Lead Consultant – Capgemini Consulting services</a> <span>2005-2010</span></h2>
                        <p>Worked at Capgemini Consulting services as a Lead Consultant of eBusiness team. Managed delivery for HSBC credit card acquisition
                        products.
                        Followed Rational Unified Process for the complete life cycle of the project.
                        Interacted with the business users for requirement gathering and was responsible for the Analysis, Design and Development of the Intranet Application.
                        Project estimations/Risk & dependency analysis and schedule Preparations.
                        Developed Interactive GUI Screens using JSPs, XML, and XSL.
                        Implemented Presentation Layer Framework (MVC, Spring) and using XML, XSL and XML parsers.
                        Used the following Spring Components: IOC, Dependency Injections, Aspect Oriented programming.
                        Developed the Teamsite Templates and Skins for Website pages.
                        Implemented the following J2EE Patterns: Front Controller, Session Façade, Data Access Object, Business Delegate and View Helper.
                        Involved in the performance analysis using Jprofiler and WAS Profiling.
                        Developed the asynchronous emailing solution for the User notifications.
                        Involved in Production support, Tealeaf and Topaz monitoring and configuration.
                        Implemented unit testing using JUnit framework and integrated it with Maven 2.0 build scripts for invocation during build time.
                        Developed the reusable Batch components for Share prices and Market data.
                        implemented Configuration for executing PMD/FindBug/check styles rules.
                        Developed the Reusable SSO Authentication components for LDAP/DB/XML Authentication.
                        Involved in ISO 9001 Audit preparation and Re-certification.</p>
                      </div>
                    </div>
                  </article>
                    <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                        <div className="timeline-entry-inner">
                            <div className="timeline-icon color-4">
                                <i className="icon-pen2" />
                            </div>
                            <div className="timeline-label">
                                <h2><a href="#">Software Analyst – Arus Inc.</a> <span>2004-2005</span></h2>
                                <p>Worked as Web programmer for developing a loyalty feature for merchants.
                                Developed a payment gateway interface for credit, void, return card payments.
                                Developed build scripts for build and deployment to application server.
                                Helped analyzing production incidents and provide resolutions.
                                Conducted program Increment planning workshop with business stake holders.</p>
                            </div>
                        </div>
                    </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2><a href="#">Education - Pune University, India</a> <span>2000-2004</span></h2>
                        <p>I have completed graduation from Pune University in Information Technology with honors.
                        Gained a through knowledge in principle of Object oriented programming, Data structures and algorithms, Distributed networking, Relational database & Software Engineering methodologies.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
