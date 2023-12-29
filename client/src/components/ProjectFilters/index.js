import React, { useState, useEffect } from 'react';
import './style.css';

const ProjectFilters = ({ backgroundColor }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [tabStyle, setTabStyle] = useState('orange');
  // const tabs = ['all', 'react.js', 'relational', 'non-relational'];

  const handleClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    switch (backgroundColor) {
      case '#7BDCB5':
        setTabStyle('teal');
        break;
      case '#00D084':
        setTabStyle('green');
        break;
      case '#8ED1FC':
        setTabStyle('light-blue');
        break;
      case '#0693E3':
        setTabStyle('blue');
        break;
      case '#ABB8C3':
        setTabStyle('gray');
        break;
      case '#EB144C':
        setTabStyle('red');
        break;
      case '#F78DA7':
        setTabStyle('pink');
        break;
      case '#9900EF':
        setTabStyle('indigo');
        break;
      case '#05F725':
        setTabStyle('lime');
        break;
      default:
        setTabStyle('orange');
        break;
    }
    console.log(`from proj-filters ${backgroundColor}`);
  }, [backgroundColor]);

  return (
    <div className="filter-wrapper">
      {/* {tabs.map((value) => {
        {
          activeTab === value ? (
            <div
              className={`filter-tab ${tabStyle}`}
              style={{ 'background-color': backgroundColor }}
              onClick={() => setActiveTab('all')}
            >
              {value}
            </div>
          ) : (
            <div
              className={`filter-tab ${tabStyle}`}
              onClick={() => setActiveTab('all')}
            >
              {value}
            </div>
          );
        }
      })} */}

      {activeTab === 'all' ? (
        <div
          className={`filter-tab ${tabStyle}`}
          style={{ 'background-color': backgroundColor }}
          onClick={() => setActiveTab('all')}
        ><span style={{ 'color': 'white' }}>all</span>
        </div>
      ) : (
        <div
          className={`filter-tab ${tabStyle}`}
          onClick={() => setActiveTab('all')}
        >
          all
        </div>
      )}
      {activeTab === 'react.js' ? (
        <div
          className={`filter-tab ${tabStyle}`}
          style={{ 'background-color': backgroundColor }}
          onClick={() => setActiveTab('react.js')}
        >
          <span style={{ 'color': 'white' }}>react.js</span>
        </div>
      ) : (
        <div
          className={`filter-tab ${tabStyle}`}
          onClick={() => setActiveTab('react.js')}
        >
          react.js
        </div>
      )}
      {activeTab === 'relational' ? (
        <div
          className={`filter-tab ${tabStyle}`}
          style={{ 'background-color': backgroundColor }}
          onClick={() => setActiveTab('relational')}
        >
          <span style={{ 'color': 'white' }}>relational</span>
        </div>
      ) : (
        <div
          className={`filter-tab ${tabStyle}`}
          onClick={() => setActiveTab('relational')}
        >
          relational
        </div>
      )}
      {activeTab === 'non-relational' ? (
        <div
          className={`filter-tab ${tabStyle}`}
          style={{ 'background-color': backgroundColor }}
          onClick={() => setActiveTab('non-relational')}
        >
          <span style={{ 'color': 'white' }}>non-relational</span>
        </div>
      ) : (
        <div
          className={`filter-tab ${tabStyle}`}
          onClick={() => setActiveTab('non-relational')}
        >
          non-relational
        </div>
      )}
    </div>
  );
};

export default ProjectFilters;
