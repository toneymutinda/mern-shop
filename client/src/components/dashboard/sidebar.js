import React from 'react';
import { Link } from 'react-router-dom';
import TopNav from './topnav';

const Sidebar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidebar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    
                    <Link className="navbar-brand" to="/dashboard">
                        <img src="assets/img/logo.svg" className="navbar-brand-img 
                        mx-auto" alt="..." /> Logo
                    </Link>

                    <div className="navbar-user d-md-none">
                        <div className="dropdown">
                            <a href="#" id="sidebarIcon" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="avatar avatar-sm avatar-online">
                                    <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..." />
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
                                <a href="profile-posts.html" className="dropdown-item">Profile</a>
                                <a href="settings.html" className="dropdown-item">Settings</a>
                                <hr className="dropdown-divider" />
                                <a href="sign-in.html" className="dropdown-item">Logout</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form>
                            <div><input type="search" placeholder="Search" /></div>
                        </form>
                        <ul>
                            <li>
                                <a href="#sidebarDashboards" data-toggle="collapse"> Dashboards </a>
                                <div>
                                    <ul>
                                        <li><a href="index.html"> Default </a></li>
                                        <li><a href="dashboard-alt.html"> Alternative New </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#sidebarPages" data-toggle="collapse"> Pages </a>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="#sidebarProfile" data-toggle="collapse"> Profile </a>
                                            <div>
                                                <ul>
                                                    <li><a href="profile-posts.html"> Posts </a></li>
                                                    <li><a href="profile-groups.html"> Groups </a></li>
                                                    <li><a href="profile-projects.html"> Projects </a></li>
                                                    <li><a href="profile-files.html"> Files </a></li>
                                                    <li><a href="profile-subscribers.html"> Subscribers </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#sidebarProject" data-toggle="collapse"> Project </a>
                                            <div>
                                                <ul>
                                                    <li><a href="project-overview.html"> Overview </a></li>
                                                    <li><a href="project-files.html"> Files </a></li>
                                                    <li><a href="project-reports.html"> Reports </a></li>
                                                    <li><a href="project-new.html"> New project </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#sidebarTeam" data-toggle="collapse"> Team </a>
                                            <div>
                                                <ul>
                                                    <li><a href="team-overview.html"> Overview </a></li>
                                                    <li><a href="team-projects.html"> Projects </a></li>
                                                    <li><a href="team-members.html"> Members </a></li>
                                                    <li><a href="team-new.html"> New team </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="orders.html"> Orders </a></li>
                                        <li><a href="feed.html"> Feed </a></li>
                                        <li><a href="settings.html"> Settings </a></li>
                                        <li><a href="invoice.html"> Invoice </a></li>
                                        <li><a href="pricing.html"> Pricing </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a href="#sidebarAuth" data-toggle="collapse"> Authentication </a>
                                <div>
                                    <ul>
                                        <li>
                                            <a href="#sidebarSignIn" data-toggle="collapse"> Sign in </a>
                                            <div>
                                                <ul>
                                                    <li><a href="sign-in-cover.html"> Cover </a></li>
                                                    <li><a href="sign-in-illustration.html"> Illustration </a></li>
                                                    <li><a href="sign-in.html"> Basic </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#sidebarSignUp" data-toggle="collapse"> Sign up </a>
                                            <div>
                                                <ul>
                                                    <li><a href="sign-up-cover.html"> Cover </a></li>
                                                    <li><a href="sign-up-illustration.html"> Illustration </a></li>
                                                    <li><a href="sign-up.html"> Basic </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#sidebarPassword" data-toggle="collapse"> Password reset </a>
                                            <div>
                                                <ul>
                                                    <li><a href="password-reset-cover.html"> Cover </a></li>
                                                    <li><a href="password-reset-illustration.html"> Illustration </a></li>
                                                    <li><a href="password-reset.html"> Basic </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#sidebarError" data-toggle="collapse"> Error </a>
                                            <div>
                                                <ul>
                                                    <li><a href="error-illustration.html"> Illustration </a></li>
                                                    <li><a href="error.html"> Basic </a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#sidebarModalActivity" data-toggle="modal"> Notifications </a></li>
                        </ul>
                        <hr />
                        <h6>Documentation</h6>
                        <ul>
                            <li><a href="getting-started.html"> Getting started </a></li>
                            <li>
                                <a href="#sidebarComponents" data-toggle="collapse"> Components </a>
                                <div>
                                    <ul>
                                        <li><a href="components.html#alerts"> Alerts </a></li>
                                        <li><a href="components.html#avatars"> Avatars </a></li>
                                        <li><a href="components.html#badges"> Badges </a></li>
                                        <li><a href="components.html#breadcrumb"> Breadcrumb </a></li>
                                        <li><a href="components.html#buttons"> Buttons </a></li>
                                        <li><a href="components.html#button-group"> Button group </a></li>
                                        <li><a href="components.html#cards"> Cards </a></li>
                                        <li><a href="components.html#charts"> Charts </a></li>
                                        <li><a href="components.html#dropdowns"> Dropdowns </a></li>
                                        <li><a href="components.html#forms"> Forms </a></li>
                                        <li><a href="components.html#icons"> Icons </a></li>
                                        <li><a href="components.html#lists"> Lists </a></li>
                                        <li><a href="components.html#modal"> Modal </a></li>
                                        <li><a href="components.html#navs"> Navs </a></li>
                                        <li><a href="components.html#navbarExample"> Navbar </a></li>
                                        <li><a href="components.html#page-headers"> Page headers </a></li>
                                        <li><a href="components.html#pagination"> Pagination </a></li>
                                        <li><a href="components.html#popovers"> Popovers </a></li>
                                        <li><a href="components.html#progress"> Progress </a></li>
                                        <li><a href="components.html#social-posts"> Social post </a></li>
                                        <li><a href="components.html#spinners"> Spinners </a></li>
                                        <li><a href="components.html#tables"> Tables </a></li>
                                        <li><a href="components.html#toasts"> Toasts </a></li>
                                        <li><a href="components.html#tooltips"> Tooltips </a></li>
                                        <li><a href="components.html#typography"> Typography </a></li>
                                        <li><a href="components.html#utilities"> Utilities </a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="changelog.html"> Changelog v1.3.3 </a></li>
                        </ul>
                        <a href="#modalDemo" data-toggle="modal"> Customize </a>
                        <div>
                            <div>
                                <div><img src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." /></div>
                                <div>
                                    <a href="profile-posts.html">Profile</a> <a href="settings.html">Settings</a>
                                    <hr />
                                    <a href="sign-in.html">Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            
        </React.Fragment>
    )
}

export default Sidebar;