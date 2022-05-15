import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-navbar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ml-1">
                <h1 className='text-5xl text-green-700'>Dashboard</h1>
                <Outlet></Outlet>



            </div>
            <div class="drawer-side shadow-2xl">
                <label for="dashboard-navbar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to='/dashboard'>Sidebar Item 1</Link></li>
                    <li><Link to='/dashboard/reviews'>Sidebar Item 2</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;