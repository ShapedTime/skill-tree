import React from 'react'
import { Navigate } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm'
import { useAuth } from '../hooks/useAuth'

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useAuth()

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">SkillTree</h1>
          <p className="text-gray-600">Gamified Learning Platform</p>
        </div>

        <LoginForm />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Transform your skill acquisition into an engaging, visual experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage