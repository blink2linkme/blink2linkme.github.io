// app/admin/layout.tsx

"use client"; // Ensure this is a client component

import React from 'react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h2>Admin Layout</h2>
            {children}
        </div>
    );
};

export default AdminLayout;
