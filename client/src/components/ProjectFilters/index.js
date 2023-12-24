import React from 'react';
import './style.css';

const ProjectFilters = () => {
  return (
    <div className="filter-wrapper">
      <div className="filter-tab active">all</div>
      <div className="filter-tab">react.js</div>
      <div className="filter-tab">relational</div>
      <div className="filter-tab">non-relational</div>
    </div>
  );
};

export default ProjectFilters;
