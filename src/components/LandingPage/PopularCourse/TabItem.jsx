// TabItem.js
const TabItem = ({ id, target, label, active,  }) => {
    return (
        <li className="nav-item me-2 me-sm-5">
            <button 
                className={`nav-link mb-2 mb-md-0 ${active ? 'active' : ''}`} 
                id={id} 
                data-bs-toggle="pill"
                data-bs-target={`#${target}`} 
                type="button" 
                role="tab"
                aria-controls={target} 
                aria-selected={active}
            >
                {label}
            </button>
        </li>
    )
}

export default TabItem