export default function AuthorBio() {
  return (
    <div className="text-center mb-8 w-full">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">James Stewart</h1>
      <h2 className="text-xl text-gray-700 mb-1">Creative Director</h2>
      <p className="text-gray-600 mb-4">New York, NY</p>

      <div className="text-sm text-gray-800 mb-6 max-w-md mx-auto">
        <p className="mb-4">TLDR: Creative professional with a passion for design and innovation</p>

        <p className="text-gray-700 leading-relaxed">
          {/* Description will be filled out later as requested */}
          Hi I am juames
        </p>
      </div>

      <button className="bg-black text-white font-medium py-3 px-8 rounded-full w-full max-w-xs shadow-md hover:bg-gray-800 transition-colors">
        Save Contact
      </button>
    </div>
  )
} 