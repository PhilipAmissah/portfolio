export default function AuthorCard() {
  return (
    <div className="mt-16 p-6 rounded-lg border border-gray-200 dark:border-gray-700 
                    bg-white dark:bg-gray-900 shadow-sm 
                    max-w-md mx-auto text-center">
      
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700" />

        <div>
          <h3 className="text-lg font-semibold dark:text-white">
            Philip Amissah
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Writer • Storyteller • Cultural Archivist
          </p>
        </div>
      </div>

      <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
        Philip Amissah writes reflective stories rooted in Ghanaian culture,
        legacy, and the timeless lessons passed from one generation to the next.
      </p>
    </div>
  );
}
