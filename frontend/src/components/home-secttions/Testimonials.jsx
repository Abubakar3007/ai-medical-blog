import React from 'react'

const Testimonials = () => {
  return (
    <section className="mt-16 bg-white">
      <div className="mx-auto text-center max-w-[90%] w-full">
        <h2 className="mb-4 text-4xl font-bold text-gray-800">What Our Readers Say</h2>
        <p className="mb-12 text-lg text-gray-600">
          Trusted by thousands of readers worldwide. Here’s what some of them have to say:
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-md">
            <p className="mb-4 italic text-gray-700 text-md grow">
              “MedInsight Blog has become my go-to resource for understanding health conditions. Everything is written in a way I can actually understand.”
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <img src="https://i.pravatar.cc/100?img=12" alt="User avatar" className="w-12 h-12 rounded-full" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Priya Sharma</h4>
                <span className="text-sm text-gray-500">Hyderabad, India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-md">
            <p className="mb-4 italic text-gray-700 text-md grow">
              “As a medical student, I find the content both insightful and reliable. The expert-backed articles really help reinforce what I’m learning.”
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <img src="https://i.pravatar.cc/100?img=5" alt="User avatar" className="w-12 h-12 rounded-full" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Ravi Kulkarni</h4>
                <span className="text-sm text-gray-500">Pune, India</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-md">
            <p className="mb-4 italic text-gray-700 text-md grow">
              “I love the weekly health tips I receive via email. They’re practical, short, and super helpful. Highly recommended for busy parents.”
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <img src="https://i.pravatar.cc/100?img=3" alt="User avatar" className="w-12 h-12 rounded-full" />
              <div className="text-left">
                <h4 className="font-semibold text-gray-800">Fatima Noor</h4>
                <span className="text-sm text-gray-500">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Testimonials