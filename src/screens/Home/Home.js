import React from 'react';
import styled from "@emotion/styled/macro";

const Article = styled.article`
`

const P = styled.p`
`

const UL = styled.ul`
`

const Section = styled.section`
  & > ${Article} {
    margin-bottom: 35px;
  }
`

const H3 = styled.h3`
  margin: 20px 20px 10px 20px;
  & + ${P} {
    margin: 0px 20px 0px 20px;    
  }
  & + ${UL} {
    margin-left: 40px;
  }
`

const Home = (props)=> {
  return (
    <Section>
      <Article>
        <h2>Jai</h2>
        <p>Just a person who loves full stack development!</p>
      </Article>
      <Article>
        <h2>College</h2>
        <p>I have a Masters in Computer Science from University of Bridgeport. At the University, I was a TA helping students with their Java course work.</p>
      </Article>
      <Article>
        <h2>Early Career</h2>
        <p>I started as an intern and was hired full time and started with writing VBScripts performing automations and creating websites in HTML &amp; CSS. </p>
        <p>
          I helped the team migrate the programming language of choice from VB.NET to C# and started
          creating websites in ASP.NET, HTML, JavaScript, &amp; CSS with MS SQL Server as the backend.
        </p>
      </Article>
      <Article>
        <h2>FrontEnd Development</h2>
        <p>I have over 3 years of experience creating applications in React and Angular.js that run as an Outlook add-in. Currently, I am focused on creating front-end applications in React.</p>
        <p>
          I have over 15 years of experience in creating sites with HTML, CSS, bootstrap, JavaScript, jQuery running on ASP.NET and MS SQL Server. 
        </p>
      </Article>
      <Article>
        <h2>Full Stack Experience</h2>
        <p>
          I have over 3 years in building NodeJS web services and I have been building NoSQL databases on AWS DynamoDB. I have experience in working with express and HapiJS.
        </p>
        <p>
          I have been involved in working with MS SQL Server databases including creating SSRS reports and
          I have over 8 years of experience in building web services in .NET and 4 years of experience in dotnet core Web API. 
        </p>
      </Article>
      <Article>
        <h2>Programming Languages</h2>
        <p>
          I have been programming in C#, JavaScript, Python, Ruby, Objective-C, &amp; have a working knowledge of TypeScript.
        </p>
      </Article>
      <Article>
        <h2>SharePoint Experience</h2>
        <p>
          I have been involved with SharePoint since SharePoint 2003 creating SharePoint sites, custom page
          layouts, custom web parts, and solutions.
        </p>
        <p>
          I have over 8 years of experience wth Nintex Forms and nintex workflows running on SharePoint 
          on premise and on cloud &amp; 2 years of experience in creating SharePoint sites with Powell.
        </p>
      </Article>
      <Article>
        <h2>Personal Work</h2>
        <p>
          In my personal time, I like to build applications which helps me to keep up with the ever changing technical landscape. Here are some of the applications I have completed.</p>
          <H3>Punions</H3>
          <P>I am currently working on a multi-player online game called Punions written in NodeJS, ReactJS, &amp; AWS DynamoDB. Follow my progress on <a href='https://twitter.com/iJKTen' target="_blank" rel="noopener noreferrer nofollow">twitter</a> as I work on this app #100DaysOfCode.</P>
          <H3>Trivial</H3>
          <P>I created an MVP <a href='https://github.com/iJKTen/trivialfun' target='_blank' rel="noopener noreferrer nofollow">trivia</a> app which could be used by restaurants and bars to host trivia games.</P>
          <H3>Personal Blog</H3>
          <P>I started a programming <a href="//ijk.ghost.io" target="_blank" rel="noopener noreferrer nofollow">blog</a> documentaing my on-going programming journey.</P>
          <H3>Meetup</H3>
          <P>I co-organize a meetup called <a href="//www.meetup.com/Coding-Literacy/" target="_blank" rel="noopener noreferrer nofollow">Coding Literacy</a> focused on teaching skills required to become a better programmer.</P>
          <H3>Other Work</H3>
          <P>Find other projets I worked on in my <a href='//github.com/ijkten' target="_blank" rel="noopener noreferrer nofollow">GitHub</a></P>
          <H3>Certifications</H3>
          <UL>
            <li>As of March 25 2020 I am an <a href="//www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2020-03-25&ci=AWS01350557" target="_blank" rel="noopener noreferrer nofollow">AWS certified Cloud Practitioner</a></li>
            <li>At one point I had an MCD in asp.net (Exam 70-486)</li>
          </UL> 
      </Article>
    </Section>
  )
}

export default Home;
