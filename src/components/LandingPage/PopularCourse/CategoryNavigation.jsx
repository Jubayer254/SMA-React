import React from 'react'
import TabItem from './TabItem'

const CategoryNavigation = ({ tabItems }) => {
    return (
        <ul className="nav nav-pills nav-pills-bg-soft justify-content-sm-center mb-4 px-3" id="course-pills-tab" role="tablist">
            {
                tabItems.map((tab) => (
                    <TabItem
                        id={tab.id}
                        target={tab.target}
                        label={tab.label}
                        active={tab.active}
                    >

                    </TabItem>))
            }
        </ul>

    )
}

export default CategoryNavigation
