// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase authentication methods
// import './AdminDashboard.css';
const AdminDashboard = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setCurrentUser(user);
            } else {
                // No user is signed in.
                setCurrentUser(null);
            }
        });

        return unsubscribe; // Cleanup function
    }, []);

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setCurrentUser(null);
            })
            .catch((error) => {
                // An error happened.
                console.error('Sign out error:', error);
            });
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {currentUser ? (
                <>
                    <p>Welcome, {currentUser.email}!</p>
                    <button onClick={handleSignOut}>Sign out</button>
                </>
            ) : (
                <p>Please sign in to access the admin dashboard.</p>
            )}
            <nav>
                <ul>
                    <li>
                        <Link to="/admin/books">Manage Books</Link>
                    </li>
                    <li>
                        <Link to="/admin/users">Manage Users</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">View Orders</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default AdminDashboard;
