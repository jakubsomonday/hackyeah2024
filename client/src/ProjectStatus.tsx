// src/components/ProjectStatus.tsx
import React from 'react';
import Timeline from './Timeline.tsx';

type ProjectStatusProps = {
  projectName: string;
  progress: number; // Progress percentage (0-100)
  deadline: string; // Deadline date in "YYYY-MM-DD" format
  status: string;
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

const ProjectStatus: React.FC<ProjectStatusProps> = ({ projectName, statusText, status }) => {

  // Function to determine Bulma color class based on the status
  const statusColorClass = (): {} => {
    switch (status) {
      case 'Wszystko ok':
        return 'is-success';
      case 'Potrzebna pomoc!':
        return 'is-danger has-text-white';
      case 'Pracujemy nad tym':
        return 'is-warning';
      default:
        return '';
    }
  };

  return (
    <div className="box">
    <div className="grid">
      <div className="cell">
        <h3 className="title is-4">{projectName}</h3>
        <div className="field">
          <label className="label">Status:</label>
          <span className={`tag is-large ${statusColorClass()}`}>{statusText}</span>
        </div>
      </div>
      <div className="cell"><Timeline items={timelineItems} /></div>

    </div>
    </div>
  );
};

export default ProjectStatus;
