import React from 'react';
import Sidebar from './sidebar';
import TopBar from './topbar';

class DashboardLayout extends React.Component{
    render () {
        return (
            <React.Fragment>
                <Sidebar />

                <div className="main-content">
                    <TopBar />
                    
                </div>
            </React.Fragment>
        )
    }
}

export default DashboardLayout;