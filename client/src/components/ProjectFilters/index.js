import React, { useState, useEffect } from 'react';
import './style.css';

const ProjectFilters = ({ backgroundColor }) => {
  const [activeTab, setActiveTab] = useState('all');
  const tabs = ['all', 'react.js', 'relational', 'non-relational'];

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    console.log(`from proj-filters ${backgroundColor}`);
  }, [backgroundColor]);

  return (
    <div className="filter-wrapper">
      {tabs.map((value) => {
        switch (backgroundColor) {
          case '#7BDCB5' && activeTab === value:
            <div
              className="filter-tab teal"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case ('#7BDCB5' && activeTab !== value):
            <div
              className="filter-tab teal"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#00D084' && activeTab === value:
            <div
              className="filter-tab green"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#00D084' && activeTab !== value:
            <div
              className="filter-tab green"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#8ED1FC' && activeTab === value:
            <div
              className="filter-tab light-blue"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#8ED1FC' && activeTab !== value:
            <div
              className="filter-tab light-blue"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#0693E3' && activeTab === value:
            <div
              className="filter-tab blue"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#0693E3' && activeTab !== value:
            <div
              className="filter-tab blue"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#ABB8C3' && activeTab === value:
            <div
              className="filter-tab gray"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#ABB8C3' && activeTab !== value:
            <div
              className="filter-tab gray"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#EB144C' && activeTab === value:
            <div
              className="filter-tab red"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#EB144C' && activeTab !== value:
            <div className="filter-tab red" onClick={() => setActiveTab(value)}>
              {value}
            </div>;
            break;
          case '#F78DA7' && activeTab === value:
            <div
              className="filter-tab pink"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#F78DA7' && activeTab !== value:
            <div
              className="filter-tab pink"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#9900EF' && activeTab === value:
            <div
              className="filter-tab indigo"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#9900EF' && activeTab !== value:
            <div
              className="filter-tab indigo"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#05F725' && activeTab === value:
            <div
              className="filter-tab lime"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#05F725' && activeTab !== value:
            <div
              className="filter-tab lime"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#FCB900' && activeTab === value:
            <div
              className="filter-tab orange"
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
          case '#FCB900' && activeTab !== value:
            <div
              className="filter-tab orange"
              onClick={() => setActiveTab(value)}
            >
              {value}
            </div>;
            break;
        }
      })}

      {/* {activeTab === 'all' ? 
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
      } */}
    </div>
  );
};

export default ProjectFilters;
