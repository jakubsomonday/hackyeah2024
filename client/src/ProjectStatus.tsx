// src/components/ProjectStatus.tsx
import React from 'react';
import Timeline from './Timeline.tsx';

type ProjectStatusProps = {
  projectName: string;
  statusText: string;
  status_color?: string;
};

const timelineItems = [
  {
    title: "Start",
    date: "01.2016",
    content: "Timeline content - Can include any HTML element.",
    icon: "fa-flag-checkered",
  },
  {
    title: "Faza 1",
    date: "02.2016",
    content: "Timeline content - Can include any HTML element.",
    icon: "fa-image",
  },
  {
    title: "Faza 2",
    date: "03.2017",
    content: "Timeline content - Can include any HTML element.",
    icon: "fa-flag",
  },
  {
    title: "Koniec",
    date: "06.2017",
    content: "Timeline content - Can include any HTML element.",
    icon: "fa-flag-checkered",
  },
];

const ProjectStatus: React.FC<ProjectStatusProps> = ({ projectName, statusText, status_color }) => {

  return (
    <div className="box">
    <div className="grid">
      <div className="cell">
        <h3 className="title is-4">{projectName}</h3>
        <div className="field">
          <label className="label">Status:</label>
          <span className={`tag is-large`} style={{ backgroundColor: status_color }}>{statusText}</span>
        </div>
      </div>
      <div className="cell"><Timeline items={timelineItems} /></div>

    </div>
    </div>
  );
};

export default ProjectStatus;
