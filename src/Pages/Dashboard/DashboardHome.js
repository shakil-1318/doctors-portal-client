import React from 'react';
import useAuth from '../../hooks/useAuth';

const DashboardHome = () => {
    const { admin } = useAuth();
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Welcome To  {
                admin ? 'Admin Dashboard' : 'User Dashboard'
            }</h1>
        </div>
    );
};

export default DashboardHome;