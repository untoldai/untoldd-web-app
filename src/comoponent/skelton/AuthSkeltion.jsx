import React from 'react'

const AuthSkeltion = () => {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-gray-700 mb-4">Authentication in Progress</h1>
        <p class="text-gray-600 text-center mb-6">Please hold on while we verify your credentials. This process typically takes just a few moments.</p>
        <div class="flex items-center justify-center">
            <svg class="animate-spin h-10 w-10 text-blue-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v2a6 6 0 00-6 6h-2z"></path>
            </svg>
            <span class="text-gray-500">Checking authentication...</span>
        </div>
        <p class="text-gray-500 text-center mt-4">If you experience any issues, please contact support.</p>
    </div>
</div>
  )
}

export default AuthSkeltion