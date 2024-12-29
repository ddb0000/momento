"use client";
import React, { useState } from 'react';

const tasks = [
  { id: '#94834', title: 'Implement Authentication System for User Login' },
  { id: '#94835', title: 'Set Up Database Schema and Relationships (User, Tasks, etc.)' },
  { id: '#94836', title: 'Build Responsive User Dashboard with React' },
  { id: '#94837', title: 'Integrate Payment Gateway (Stripe/PayPal) for Task Payments' },
  { id: '#94838', title: 'Develop RESTful API for Task Management (Create, Update, Delete)' },
  { id: '#94839', title: 'Implement Lazy Loading for Frontend Performance Optimization' },
  { id: '#94840', title: 'Admin Dashboard: User Management, Roles, and Permissions' },
  { id: '#94841', title: 'Implement Task Completion Workflow with Notifications & Emails' },
  { id: '#94842', title: 'Add Search and Filtering Options for Tasks (Tags, Categories)' },
  { id: '#94843', title: 'Create Dark Mode Option for User Interface' },
  { id: '#94844', title: 'Optimize Task Listing Page for Mobile View' },
  { id: '#94845', title: 'Implement User Profile Page with Editable Fields' },
  { id: '#94846', title: 'Create Real-Time Notification System for Task Updates' },
  { id: '#94847', title: 'Integrate Cloud Storage for File Uploads (S3 or Equivalent)' },
  { id: '#94848', title: 'Add Analytics Dashboard for Task Metrics and User Stats' },
  { id: '#94849', title: 'Build API Rate Limiting for Task Access Control' },
  { id: '#94850', title: 'Add Task Tagging System for Better Categorization' },
  { id: '#94851', title: 'Set Up Continuous Integration/Continuous Deployment (CI/CD)' },
  { id: '#94852', title: 'Implement OAuth Login with Google/GitHub' },
  { id: '#94853', title: 'Build Activity Feed for User Interactions and Task Progress' },
];

const getRandomStatus = () => (Math.random() > 0.5 ? 'Available' : 'Claimed');

export default function Home() {
  const [showRecentActivity, setShowRecentActivity] = useState(false);

  const toggleRecentActivity = () => {
    setShowRecentActivity(!showRecentActivity);
  };

  return (
    <>
<header className="flex justify-between items-center p-4">
  <div className="flex flex-col">
    <h1 className="text-4xl font-bold">momento</h1>
    <p className="ml-10">lightning fast tasks ⚡</p>
  </div>
  <nav>
    <ul className="flex space-x-4">
      <li>
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A9.003 9.003 0 0112 15c2.21 0 4.21.896 5.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</header>


      {/* Minimalistic Button for Mobile */}
      <div className="flex justify-center mt-4 md:hidden">
        <button
          onClick={toggleRecentActivity}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all"
        >
          {showRecentActivity ? 'Show Tasks' : 'Show Recent Activity'}
        </button>
      </div>

      {/* Task Listings or Recent Activity (Mobile Switch) */}
      <div className="flex flex-col md:flex-row p-4 mt-4">
        {/* Mobile View */}
        {showRecentActivity ? (
          <section className="w-full md:w-1/2 p-4 md:block">
            <h2 className="text-xl font-semibold mb-4 opacity-90">📢 Recent Activity</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg shadow-sm">
                <p className="text-lg font-semibold opacity-70">User JohnDoe completed task #94834</p>
                <p className="text-sm opacity-60">2 hours ago</p>
              </div>
              {/* More recent activity items */}
            </div>
          </section>
        ) : (
          <section className="w-full md:w-1/2 p-4 md:block">
            <h2 className="text-xl font-semibold mb-4 opacity-90">🔧 Task Listings</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <a href="#" key={task.id} className="block p-4 border rounded-lg shadow-sm flex justify-between items-center">
                  <span className="text-lg font-semibold opacity-70 hover:opacity-90">{task.id}: {task.title}</span>
                  <span className={`inline-block mt-2 mb-4 px-2 py-1 text-xs text-white rounded-full opacity-80 border border-black ${getRandomStatus() === 'Available' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {getRandomStatus()}
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Desktop View: Always show recent activity */}
        <section className="hidden md:block w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4 opacity-90">📢 Recent Activity</h2>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg shadow-sm">
              <p className="text-lg font-semibold opacity-70">User JohnDoe completed task #94834</p>
              <p className="text-sm opacity-60">2 hours ago</p>
            </div>
            {/* More recent activity items */}
          </div>
        </section>
      </div>
    </>
  );
}
