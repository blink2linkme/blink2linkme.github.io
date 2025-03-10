import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">

      <div className="floating mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </div>


      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>


      <div className="mt-8 flex space-x-4">
        <a href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Go Home
        </a>
        <a href="#" className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
          Report Issue
        </a>
      </div>


      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Debug Info:</p>
        <p>URL: <span className="text-gray-400">/non-existent-page</span></p>
        <p>Status: <span className="text-red-400">404 Not Found</span></p>
      </div>
    </div>
  )
}