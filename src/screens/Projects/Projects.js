import React from 'react';
import styled from "@emotion/styled";

const Project = styled.div`
  margin: 30px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: rgba(0,0,0,0.25) 1px 1px 5px;
`

const H1 = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`

const H2 = styled.h2`
  margin-bottom: 12px;
`

const Projects = () => {
  return (
    <article>
      <H1>Projects</H1>
      <p>Here are some of the projects I am working on and have worked on the past. A complete list of projects can be found at my <a href='//github.com/iJKTen' target='_blank' rel='nofollow noopener noreferrer'>GitHub</a></p>
      <Project>
        <H2 className='violet'>Punions</H2>
        <p>Is a multi-player game of puns which will make you cry or laugh.</p>
        <p>This project has a server component written in NodeJS running on AWS as lambdas and it uses DyanamoDB as the data store. The server provides REST API and a web socket endpoint.</p>
        <p>The front end is written React in which uses the REST API to create a game and web sockets are used to broadcast game events to all the all players.</p>
        <p>URL: <a href='//punions.party' title='Punions Party!' target='_blank' rel='noopener noreferrer nofollow'>https://punions.party</a> (coming soon)</p>
        <p>GitHub: Server Code <a href='//github.com/iJKTen/punions-server' title='Punions Server Code' target='_blank' rel='noopener noreferrer nofollow'>https://github.com/iJKTen/punions-server</a></p>
        <p>GitHub: FrontEnd Code <a href='//github.com/iJKTen/punions-client' title='Punions Client Code' target='_blank' rel='noopener noreferrer nofollow'>https://github.com/iJKTen/punions-client</a></p>
      </Project>
      <Project>
        <H2 className='indigo'>React Movie Search</H2>
        <p>A sample movie search search built in React using <a href='//themoviedb.org/' target='_blank' rel='nofollow noreferrer noopener'>themoviedb</a> API. This application uses custom hooks and useReducer to manage stage.</p>
        <p>URL: <a href='//react-movie-search.jaik.me' title='React Movie Search' target='_blank' rel='noopener noreferrer nofollow'>https://react-movie-search.jaik.me</a></p>
        <p>GitHub: <a href='//github.com/iJKTen/react-movie-search' title='React Movie Search Code' target='_blank' rel='noopener noreferrer nofollow'>https://github.com/iJKTen/react-movie-search</a></p>
        <p>
          <img src='/projects/React-Movie-Search.png' alt='React movie search screenshot' title='React movie search screenshot' />
        </p>
      </Project>
      <Project>
        <H2 className='blue'>Trivial</H2>
        <p>Trivial is a Ruby on Rails applications which will help you set up Trivia Games. The application uses PostgreSQL as the database.</p>
        <p>GitHub: <a href='//github.com/iJKTen/trivialfun' title='Trivial Fun' target='_blank' rel='noopener noreferrer nofollow'>https://github.com/iJKTen/trivialfun</a></p>
      </Project>
      <Project>
        <H2 className='green'>JaiK.me</H2>
        <p>My portfolio site created in React. It uses @emotion/styled and @reach/router.</p>
        <p>URL: <a href='//jaik.me' title="Jai's portfolio site" target='_blank' rel='noopener noreferrer nofollow'>https://JaiK.me</a></p>
        <p>GitHub: <a href='//github.com/iJKTen/ijk.me' title="Jai's portfolio site Code" target='_blank' rel='noopener noreferrer nofollow'>https://github.com/iJKTen/ijk.me</a></p>
        <p>
          <img src='/projects/JaiK.png' alt="Jai's portfolio site" title="Jai's portfolio site" />
        </p>
      </Project>
    </article>
  )
}

export default Projects;
