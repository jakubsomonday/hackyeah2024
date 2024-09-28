// src/components/Timeline.tsx
import React from 'react';

type TimelineItem = {
    title: string;
    date: string; // Date in "MMMM YYYY" format
    content: string; // Content to display
    icon: string; // FontAwesome icon class
};

type TimelineProps = {
    items: TimelineItem[];
};

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <div className="timeline">
            <div className="fixed-grid has-2-cols">
                <div className="grid is-row-gap-0">
                    {items.map((item, index) => (
                        <>
                            <div className="cell">
                                <div className="timeline-content">
                                    <p>{item.title}</p>
                                </div>
                            </div>
                            <div className="cell">
                                <div className="level">
                                    <p className="has-text-grey">{item.date}</p>
                                    <span className={`icon has-text-info`}>
                                        <i className={`fas ${item.icon}`}></i>
                                    </span>
                                </div>

                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;

