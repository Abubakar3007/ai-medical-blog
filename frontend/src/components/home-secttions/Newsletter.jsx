import React from 'react'

const Newsletter = () => {
    return (
        <section className="bg-blue-50 py-[30px] px-6 my-[30px]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                    Stay Informed With Trusted Health Tips
                </h2>
                <p className="mb-8 text-sm text-gray-600">
                    Subscribe to our newsletter and receive weekly articles, expert insights, and the latest updates on health and wellness—straight to your inbox.
                </p>

                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                        <button
                            type="submit"
                            className="px-6 py-3 mx-auto text-sm w-fit block bg-[#409C37] text-white font-medium rounded-full transition"
                        >
                            Subscribe
                        </button>
                </form>

                <p className="mt-4 text-sm text-gray-500">
                    📬 No spam. Unsubscribe anytime.
                </p>
            </div>
        </section>
    )
}

export default Newsletter