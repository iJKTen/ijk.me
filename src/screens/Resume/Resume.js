import React from 'react';
import styled from "@emotion/styled/macro";

const ResumeStyled = styled.div`
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;
  }
`

const Article = styled.article`
  @media screen and (min-width: 1000px) {
    width: 65%;
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`

const Aside = styled.aside`
  @media screen and (min-width: 1000px) {
    margin-left: 20px;
    width: 35%;
    & > div {
      margin-top: 0px;
    }
  }
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`

const Experience = styled.div`
  margin: 20px 0px;
`

const Company = styled.span`
  font-weight: bold;
  font-size: 20px;
`

const Location = styled.span`
  font-weight: bold;
  font-size: 18px;
  padding: 0px 8px;
`

const Position = styled.span`
  font-size: 18px;
`

const Duration = styled.div`
  font-size: 14px;
`

const Resume = (props) => {
  return (
    <ResumeStyled>
      <Article>
        <h2>Jai Kirdatt</h2>
        <Experience>
          <p>I have over 15 years of experience building full-stack applications in JavaScript, CSS, ASP.NET, IIS, &amp; SQL Server. For the past 4 years, I have created applications running on Ruby on Rails, NodeJS, ReactJS, PostgreSQL, &amp; DynamoDB.</p>
          <p>I am interested in mentoring junior developers &amp; building full-stack applications running on NodeJS, ReactJS, PostgeSQL, &amp; NOSQL.</p>
        </Experience>
        <h3>Experience</h3>
        <Experience>
          <Company>Synergy Corporate Technologies LTD, </Company>
          <Location>Westport, CT</Location>
          <Position>Senior Software Engineer</Position>
          <Duration>AUG 2016 - Present</Duration>
          <p>Architect and lead developer writing web services in NodeJS accessing data from Azure via Microsoft GraphAPI running on Docker. Jest was used as the testing framework.</p>
          <p>Experience with design and implementation of DevOps and CI/CD tools on Azure.</p>
          <p>Mentoring a team of front-end and full-stack developers in Software design methodologies, software design patterns, and object oriented programming via code reviews and pair programming</p>
          <p>Implemented business workflow approvals running on SharePoint O365 in SharePoint Framework client side web parts in ReactJS. Jest was used as the testing framework.</p>
        </Experience>
        <Experience>
          <Company>Synergy Corporate Technologies LTD, </Company>
          <Location>Westport, CT</Location>
          <Position>Senior Developer</Position>
          <Duration>2010 - 2016</Duration>
          <p>Designed and developed Outlook add-ins in AngularJS to seamlessly process tickets in our internal ticketing system.</p>
          <p>Developed business line responsive asp.net web applications in C#, HTML5, Bootstrap, CSS, and jQuery with MS SQL Server as the database.</p>
          <p>Developed custom SharePoint solutions and implemented business processes in Nintex workflows, Nintex Forms, SharePoint workflows, and InfoPath forms.</p>
        </Experience>
        <Experience>
          <Company>Synergy Corporate Technologies LTD, </Company>
          <Location>Westport, CT</Location>
          <Position>Junior Developer</Position>
          <Duration>2006 - 2010</Duration>
          <p>Developed asp.net websites in a dot net CMS called Kentico.</p>
          <p>Created an in-house employer-employee review system in asp.net and MS SQL Server.</p>
          <p>Advocated and migrated company’s coding standard from VB.NET to C#</p>
        </Experience>
        <Experience>
          <Company>Synergy Corporate Technologies LTD, </Company>
          <Location>Westport, CT</Location>
          <Position>Intern</Position>
          <Duration>2005 - 2006</Duration>
          <p>Assisted in writing windows script to automate networking tasks.</p>
          <p>Front-end development using HTML, CSS, &amp; JavaScript</p>
        </Experience>
        <Experience>
          <Company>University of Bridgeport,</Company>
          <Location>Bridgeport, CT</Location>
          <Position>Teaching Assistant</Position>
          <Duration>2004</Duration>
          <p>Assisted with setting up Java classes and evaluating tests and assisting students with homework.</p>
        </Experience>
        <h3>Education</h3>
        <Experience>
          <Company>University of Bridgeport,</Company>
          <Location>Bridgeport, CT</Location>
          <Position>Master's in Computer Science</Position>
          <Duration>2003 - 2005</Duration>
          <p>Assisted with setting up Java classes and evaluating tests and assisting students with homework.</p>
        </Experience>
        <h3>Projects</h3>
        <Experience>
          <Company>
            <a target="_blank" rel="noopener noreferrer" href="https://ijk.ghost.io">Programming Blog</a>
          </Company>
          <p>A blog where I write about programming topics which range from ReactJS, NodeJS, AWS, &amp; Azure.</p>
        </Experience>
        <Experience>
          <Company>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/iJKTen/trivialfun">Trivial Fun</a>
          </Company>
          <p>Created an MVP trivia web app in Ruby on Rails which would allow bars and restaurants to host their own trivia games and get to know their audience.</p>
        </Experience>
        <Experience>
          <Company>Good Stories</Company>
          <p>Site created in Django with PostgreSQL as the database. Users could add stories like and share them. Discontinued.</p>
        </Experience>
        <Experience>
          <Company>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/iJKTen/iOSSDKArticles">iPhone SDK Articles</a>
          </Company>
          <p>I created a blog dedicated to teaching iOS programming in Objective-C. Discontinued.</p>
        </Experience>
      </Article>
      <Aside>
        <Experience>
          <h3>SKILLS</h3>
          <p>Mentor junior programmers by coaching, code pairing, and code reviews.</p>
          <p>Able to manage and deliver projects under tight deadlines.</p>
          <p>Create quarterly coaching plans for Junior team members and evaluating new technologies.</p>
        </Experience>
        <Experience>
          <h3>Technologies</h3>
          <p>JavaScript, TypeScript, ReactJS, Styled Components, NodeJS, Jest, AngularJS, AWS Lambdas, AWS DynamoDB, .NET Core, C#, Objective-C, Ruby, Python, ASP.NET, VB.NET, PowerShell, HTML &amp; CSS</p>
        </Experience>
        <Experience>
          <h3>AWARDS</h3>
          <p><a target="_blank" rel="noopener noreferrer" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2020-03-25&ci=AWS01350557">AWS Certified Cloud Practitioner.</a></p>
        </Experience>
      </Aside>
    </ResumeStyled>

  )
}

export default Resume;
