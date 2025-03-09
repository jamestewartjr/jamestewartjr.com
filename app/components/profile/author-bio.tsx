const AuthorBio = () => {
  return (
    <div className="text-center mb-8 w-full">
      <h1 className="text-3xl font-bold text-white mb-2">James Stewart Jr</h1>
      <h2 className="text-xl text-gray-300 mb-1">Software Engineer</h2>
      <p className="text-gray-400 mb-4">Charlotte, NC</p>

      <div className="text-sm text-gray-300 mb-6 max-w-md mx-auto">
        <p className="mb-4">Software engineer, dad, and business owner.</p>
        <p className="text-gray-400 leading-relaxed">
          Currently, I spend most of my time with my family and my business.
        </p>
      </div>

      <button className="bg-white text-black font-medium py-3 px-8 rounded-full w-full max-w-xs shadow-md hover:bg-gray-200 transition-colors">
        Save Contact
      </button>
    </div>
  )
}

export default AuthorBio 