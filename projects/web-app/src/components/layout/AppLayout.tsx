import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useApi } from '../../hooks/useApi'

interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { user, logout, userLevel, userXp } = useAuth()
  const { isConnected } = useApi()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* API Connection Status Banner */}
      {isConnected === false && (
        <div className="bg-red-500 text-white px-4 py-2 text-center text-sm">
          <span className="font-medium">Connection Error:</span> Unable to connect to API server
        </div>
      )}

      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">SkillTree</h1>
              </div>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <a href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Dashboard
                </a>
                <a href="/skill-trees" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Skill Trees
                </a>
                <a href="/progress" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  Progress
                </a>
              </nav>
            </div>

            {/* User Menu */}
            {user && (
              <div className="flex items-center space-x-4">
                {/* XP Display */}
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      Level {userLevel}
                    </div>
                    <div className="text-xs text-gray-500">
                      {userXp} XP
                    </div>
                  </div>
                  <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500"
                      style={{ width: `${(userXp % 100)}%` }}
                    />
                  </div>
                </div>

                {/* User Avatar */}
                <div className="flex items-center space-x-3">
                  {user.avatarUrl ? (
                    <img
                      className="h-8 w-8 rounded-full"
                      src={user.avatarUrl}
                      alt={user.username}
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {user.username.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}

                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-gray-900">
                      {user.firstName || user.username}
                    </div>
                    <div className="text-xs text-gray-500">
                      @{user.username}
                    </div>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    title="Sign out"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2024 SkillTree. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
                Terms
              </a>
              <a href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
                Privacy
              </a>
              <a href="/support" className="text-sm text-gray-500 hover:text-gray-900">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AppLayout