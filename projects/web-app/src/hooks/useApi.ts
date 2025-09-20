import { useState, useEffect } from 'react'
import apiService from '../services/api.service'

interface UseApiOptions {
  autoCheck?: boolean
  checkInterval?: number
}

export const useApi = (options: UseApiOptions = {}) => {
  const { autoCheck = true, checkInterval = 30000 } = options
  const [isConnected, setIsConnected] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const checkConnection = async () => {
    setIsChecking(true)
    try {
      const connected = await apiService.checkConnection()
      setIsConnected(connected)
      return connected
    } catch (error) {
      setIsConnected(false)
      return false
    } finally {
      setIsChecking(false)
    }
  }

  useEffect(() => {
    if (autoCheck) {
      checkConnection()

      const interval = setInterval(checkConnection, checkInterval)
      return () => clearInterval(interval)
    }
  }, [autoCheck, checkInterval])

  return {
    isConnected,
    isChecking,
    checkConnection,
    // Utility to get API base URL
    apiBaseUrl: apiService['api']?.defaults?.baseURL || 'http://localhost:8000/api'
  }
}