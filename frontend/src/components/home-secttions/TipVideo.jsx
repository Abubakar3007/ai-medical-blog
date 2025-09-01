import React from 'react'

const TipVideo = () => {
    return (
        <section className="py-12 mt-16 bg-gray-100">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="mb-4 text-4xl font-bold text-gray-800">
                    Health Explained Visually
                </h2>
                <p className="text-lg text-gray-600 mb-12 max-w-[60%] mx-auto">
                    Watch expert videos and explore easy-to-understand infographics to learn about symptoms, treatments, and healthy living.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="overflow-hidden transition bg-white shadow rounded-xl hover:shadow-lg">
                        <iframe className="w-full h-56" src="https://www.youtube.com/embed/l5Tw0PGcyN0"
                            title="Medical Video 1" allowFullScreen></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">Understanding Diabetes</h3>
                        </div>
                    </div>

                    <div className="overflow-hidden transition bg-white shadow rounded-xl hover:shadow-lg">
                        <iframe className="w-full h-56" src="https://www.youtube.com/embed/8l4ay5UbxqM"
                            title="Medical Video 2" allowFullScreen></iframe>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">How the Heart Works</h3>
                        </div>
                    </div>

                    <div className="overflow-hidden transition bg-white shadow rounded-xl hover:shadow-lg">
                        <img src="https://cdn.dribbble.com/users/2225764/screenshots/17124032/media/c1c6909186cbbdf5b6e2359b25c24877.png"
                            alt="Infographic 1" className="object-cover w-full h-56" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">COVID-19 Symptoms Timeline</h3>
                        </div>
                    </div>

                    <div className="overflow-hidden transition bg-white shadow rounded-xl hover:shadow-lg">
                        <img src="https://static.vecteezy.com/system/resources/previews/014/379/103/original/infographic-of-common-cold-vs-flu-symptoms-free-vector.jpg"
                            alt="Infographic 2" className="object-cover w-full h-56" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-700">Cold vs Flu Comparison</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default TipVideo