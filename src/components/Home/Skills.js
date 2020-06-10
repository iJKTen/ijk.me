import React from 'react';
import styled from "@emotion/styled/macro";
import Skill from './Skill';

const SkillsStyled = styled.section`
  margin: 0px 40px 0px 80px;
  display: flex;
  flex-flow: row wrap;
`

const Skills = () => {
  const skillsObj = [
    {
      className: 'violet',
      heading: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Ruby', 'C#', 'Swift']
    },
    {
      className: 'orange',
      heading: 'Frameworks & Languages',
      skills: ['ReactJS', 'Emotion', 'Ruby on Rails', '.NET', '.NET Core', 'Jest']
    },
    {
      className: 'indigo',
      heading: 'Tools & Environment',
      skills: ['NodeJS', 'Git / GitHub', 'AWS', 'Azure', 'VS Code']
    },
    {
      className: 'red',
      heading: 'Databases',
      skills: ['PostgreSQL', 'MS SQL Server', 'DynamoDB', 'NoSQL']
    },
    {
      className: 'green',
      heading: 'Awards',
      skills: [
        {
          title: 'AWS Certified Cloud Practioner',
          href: '//www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2020-03-25&ci=AWS01350557'
        }
      ]
    }
  ];

  return (
    <SkillsStyled>
      {skillsObj.map((skill, index) => {
        return (
          <Skill
            key={index}
            skill={skill} />
        )
      })}
    </SkillsStyled>
  )
}

export default Skills;
