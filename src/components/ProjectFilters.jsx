const ProjectFilters = ({ activeFilter, setActiveFilter }) => {
  const filters = ['All', 'Frontend', 'Backend', 'Full Stack']
  
  return (
    <div className="flex justify-center gap-4 mb-12">
      {filters.map(filter => (
        <motion.button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeFilter === filter 
              ? 'bg-blue-600 text-white' 
              : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  )
} 