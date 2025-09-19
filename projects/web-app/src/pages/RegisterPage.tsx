import React from 'react'
import { Navigate } from 'react-router-dom'
import RegisterForm from '../components/auth/RegisterForm'
import { useAuth } from '../hooks/useAuth'

const RegisterPage: React.FC = () => {
  const { isAuthenticated } = useAuth()

  // Redirect if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">SkillTree</h1>
          <p className="text-gray-600">Gamified Learning Platform</p>
        </div>

        <RegisterForm />

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Join thousands of learners leveling up their skills.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage