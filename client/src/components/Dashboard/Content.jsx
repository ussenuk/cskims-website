import React from 'react'
import ContentHeader from './ContentHeader'
import "./content.css";
import Card from './Card'
import TeacherList from './TeacherList';

const Content = () => {
  return (
    <div className='content'>
      <ContentHeader/>
      <Card />
      <p> WELCOME TO OUR SCHOOL MANAGEMENT DASHBOARD</p>
    </div>
  )
}

export default Content
