import React from 'react';

const Nesting = () => {
    return (
        <div>
            <h1 className="page-title">Nesting</h1>
            <div className="app-container">
                <div className="dept-tile">
                    <h3>Cell 1</h3>
                </div>
                <div className="dept-tile">
                    <h3>Cell 2</h3>
                </div>
                <div className="dept-tile">
                    <h3>Cell 3</h3>
                </div>
            </div>
        </div>
    )
}
export default Nesting;