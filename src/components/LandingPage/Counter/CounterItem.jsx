import React from 'react';

const CounterItem = ({ item }) => {
    return (
        <div className={item.colClasses}>
            <div className={`d-flex justify-content-center align-items-center p-4 rounded-3 ${item.bgClass}`}>
                <span className={`display-6 lh-1 mb-0 ${item.iconClass}`}>
                    <i className={item.icon}></i>
                </span>
                <div className="ms-4 h6 fw-normal">
                    <div className="d-flex">
                        <h5 className="mb-0 fw-bold" style={{ fontSize: "18px" }}>
                            {item.value}
                        </h5>
                    </div>
                    <p className="mb-0" style={{ fontSize: "12px" }}>{item.label}</p>
                </div>
            </div>
        </div>
    );
};

export default CounterItem;