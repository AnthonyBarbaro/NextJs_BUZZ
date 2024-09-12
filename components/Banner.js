// components/Banner.js
const Banner = () => {
    return (
        <div
            className="bg-cover bg-center h-96 relative"
            style={{ backgroundImage: "url('/your-banner-image.jpg')" }}
        >
            <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
                <h1 className="text-white text-5xl font-bold">Welcome to Buzz Cannabis</h1>
                <p className="text-white text-xl mt-4">
                    Explore the best cannabis products at your selected store
                </p>
                <button className="mt-6 px-8 py-3 bg-green-600 text-white text-lg rounded-lg hover:bg-green-500 transition-all duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Banner;
