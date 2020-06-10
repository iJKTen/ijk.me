import React from 'react';
import styled from "@emotion/styled/macro";

const Article = styled.article`
  margin-bottom: 48px;

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
  }

  @media screen and (min-width: 414px) {
    width: 50%;
  }
`

const Skill = (props) => {
  return (
    <Article>
      <h3 className={props.skill.className}>{props.skill.heading}</h3>
      <ul>
        {props.skill.skills.map((skill, index) => {
          if (typeof (skill) === 'string') {
            return <li key={index}>{skill}</li>
          } else {
            return (
              <li key={index}>
                <a
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  href={skill.href}>
                  {skill.title}
                </a>
              </li>
            )
          }
        })}
      </ul>
    </Article>
  )
}

export default Skill;
