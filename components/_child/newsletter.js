

export default function newsletter() {
  return (
    <section className="bg-red-50 mt-20">
        <div className="container mx-auto md:px-20 py-16 text-center">
            <h1 className="font-bold text-3xl">
                Subscribe Newsletter
            </h1>

            <div className="py-4">
                <input  type='text' placeholder="Enter your Email..." className="shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" />
            </div>

            <button className="bg-red-500 px-20 py-3 rounded-full text-gray-50 text-xl">
                Subscribe
            </button>
        </div>
    </section>
  )
}
