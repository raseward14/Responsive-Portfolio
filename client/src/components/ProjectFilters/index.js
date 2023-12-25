import React, { useState, useEffect } from 'react';
import './style.css';

const ProjectFilters = ({ backgroundColor }) => {
  const [activeTab, setActiveTab] = useState('all');

  const handleClick = (tab) => {
    setActiveTab(tab)
  };

  useEffect(() => {
    console.log(`from proj-filters ${backgroundColor}`);
  }, [backgroundColor]);

  return (
    <div className="filter-wrapper">
      {activeTab === 'all' ? 
      <div
      className="filter-tab"
      style={{'background-color': backgroundColor}}
      onClick={()=> setActiveTab('all')}>all</div>      
      : 
      <div
      className="filter-tab"
      onClick={()=> setActiveTab('all')}>all</div>
      }
      {activeTab === 'react.js' ? 
      <div className="filter-tab"
      style={{'background-color': backgroundColor}}
      onClick={()=> setActiveTab('react.js')}>react.js</div>      
      :       
      <div className="filter-tab"
      onClick={()=> setActiveTab('react.js')}>react.js</div>
      }
      {activeTab === 'relational' ? 
      <div className="filter-tab"
      style={{'background-color': backgroundColor}}
      onClick={()=> setActiveTab('relational')}>relational</div>
      :       
      <div className="filter-tab"
      onClick={()=> setActiveTab('relational')}>relational</div>
      }
      {activeTab === 'non-relational' ? 
      <div className="filter-tab"
      style={{'background-color': backgroundColor}}
      onClick={()=> setActiveTab('non-relational')}>non-relational</div>
      :      
      <div className="filter-tab"
      onClick={()=> setActiveTab('non-relational')}>non-relational</div>
      }
    </div>
  );
};

export default ProjectFilters;
