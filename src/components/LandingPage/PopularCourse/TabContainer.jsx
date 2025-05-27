// TabContainer.js
import React from 'react';
import TabContent from './TabContent';

const TabContainer = ({ courseTabsData, activeTabId }) => {

    return (
        <div className="tab-content" id="course-pills-tabContent">
            {courseTabsData.map((tab) => (
                <TabContent
                    key={tab.id}
                    id={tab.id}
                    tabId={tab.tabId}
                    courses={tab.courses}
                    isActive={tab.id === activeTabId}
                />
            ))}
        </div>
    );
};

export default TabContainer;