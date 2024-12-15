import React, { useState } from 'react';
import {
    Heart,
    Star,
    Users,
    Zap,
    ArrowRight,
    Play,
    Camera,
    ChevronRight
} from 'lucide-react';

const ExplorePage = () => {
    const [activeStory, setActiveStory] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Influencer Stories Data
    const storiesData = [
        {
            id: 1,
            influencer: 'Emma Style',
            profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            storyImage: 'https://media.istockphoto.com/id/1488453249/photo/make-up-table.jpg?s=612x612&w=0&k=20&c=2R92ilTXNRhQw6DDLpkBL3v-R2nk0QtBF3X9iA4LEQM=',
            duration: '24h'
        },
        {
            id: 2,
            influencer: ' Max',
            profileImage: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            storyImage: 'https://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp',
            duration: '12h'
        },
        {
            id: 3,
            influencer: 'Beauty Pro',
            profileImage: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            storyImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuaN9_j_w3K95lUx-8lJaxt_L191ZlqlQaBQ&s',
            duration: '36h'
        }
    ];

    // Influencer Products Data
    const influencerProducts = [
        {
            id: 1,
            influencer: 'Emma Style',
            profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            product: 'Luxury Skincare Set',
            productImage: 'https://media.istockphoto.com/id/1488453249/photo/make-up-table.jpg?s=612x612&w=0&k=20&c=2R92ilTXNRhQw6DDLpkBL3v-R2nk0QtBF3X9iA4LEQM=',
            price: 'Rs 229.99'
        },
        {
            id: 2,
            influencer: ' Max',
            profileImage: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            product: 'Smart  Starter Kit',
            productImage: 'https://www.shutterstock.com/image-photo/collection-white-skincare-products-on-260nw-2476242249.jpg',
            price: 'Rs 599.99'
        },
        {
            id:32,
            influencer: ' Max',
            profileImage: 'https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg',
            product: 'Smart  Starter Kit',
            productImage: 'https://www.shutterstock.com/image-photo/collection-white-skincare-products-on-260nw-2476242249.jpg',
            price: 'Rs 599.99'
        }
    ];

    // Gallery Images
    const galleryImages = [
        'https://www.shutterstock.com/image-photo/collection-white-skincare-products-on-260nw-2476242249.jpg',
        'https://media.istockphoto.com/id/1488453249/photo/make-up-table.jpg?s=612x612&w=0&k=20&c=2R92ilTXNRhQw6DDLpkBL3v-R2nk0QtBF3X9iA4LEQM=',
        'https://welpix.com/wp-content/uploads/2024/06/A-guide-to-skincare-product-photography.webp',
        'https://i.pinimg.com/736x/c0/bd/fc/c0bdfc76b7a93c4c02585ab77e616a3f.jpg'
    ];

    // Video Data
    const videoData = [
        {
            id: 1,
            title: 'Summer Beauty Routine',
            thumbnail: 'https://media.istockphoto.com/id/1488453249/photo/make-up-table.jpg?s=612x612&w=0&k=20&c=2R92ilTXNRhQw6DDLpkBL3v-R2nk0QtBF3X9iA4LEQM=',
            influencer: 'Emma Style',
            duration: '12:45'
        },
        {
            id: 2,
            title: 'Product Review',
            thumbnail: 'https://i.pinimg.com/736x/c0/bd/fc/c0bdfc76b7a93c4c02585ab77e616a3f.jpg',
            influencer: 'Tech Max',
            duration: '15:20'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-md p-4 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">Explore</h1>
                <div className="flex space-x-4">
                    <Heart className="w-6 h-6 text-white hover:text-red-500 transition-colors cursor-pointer" />
                    <Users className="w-6 h-6 text-white hover:text-blue-500 transition-colors cursor-pointer" />
                </div>
            </header>

            <div className="container mx-auto px-4 py-6 space-y-8">
                {/* Influencer Stories Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                            Influencer Stories
                        </h2>
                        <Camera className="w-6 h-6 text-white hover:text-pink-500 transition-colors" />
                    </div>
                    <div className="flex space-x-4 overflow-x-auto pb-4">
                        {storiesData.map((story) => (
                            <div
                                key={story.id}
                                className="flex-shrink-0 w-36 cursor-pointer group"
                                onClick={() => setActiveStory(story)}
                            >
                                <div className="relative">
                                    <img
                                        src={story.storyImage}
                                        alt={story.influencer}
                                        className="w-36 h-48 rounded-xl object-cover border-4 border-transparent group-hover:border-pink-500 transition-all"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2 rounded-b-xl">
                                        <div className="flex items-center">
                                            <img
                                                src={story.profileImage}
                                                alt={story.influencer}
                                                className="w-8 h-8 rounded-full mr-2 border-2 border-white"
                                            />
                                            <span className="text-sm">{story.influencer}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Products by Influencers Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                            Products by Influencers
                        </h2>
                        <Zap className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {influencerProducts.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 flex items-center space-x-6 transform transition-all hover:scale-105 hover:shadow-2xl"
                            >
                                <img
                                    src={item.productImage}
                                    alt={item.product}
                                    className="w-32 h-32 rounded-xl object-cover"
                                />
                                <div>
                                    <div className="flex items-center mb-2">
                                        <img
                                            src={item.profileImage}
                                            alt={item.influencer}
                                            className="w-10 h-10 rounded-full mr-3 border-2 border-pink-500"
                                        />
                                        <h3 className="font-bold text-xl">{item.influencer}</h3>
                                    </div>
                                    <p className="text-lg font-semibold mb-2">{item.product}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-yellow-400">{item.price}</span>
                                        <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 transition-colors" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                            Gallery
                        </h2>
                        <ArrowRight className="w-6 h-6 text-white hover:text-pink-500 transition-colors" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <div 
                                key={index} 
                                className="relative group overflow-hidden rounded-xl"
                            >
                                <img 
                                    src={image} 
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Section */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-400">
                            Video Highlights
                        </h2>
                        <Play className="w-6 h-6 text-white hover:text-pink-500 transition-colors" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {videoData.map((video) => (
                            <div
                                key={video.id}
                                className="relative group rounded-xl overflow-hidden"
                                onClick={() => setSelectedVideo(video)}
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Play className="w-16 h-16 text-white bg-pink-500/50 rounded-full p-4" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                                    <h3 className="text-xl font-bold">{video.title}</h3>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-sm">{video.influencer}</span>
                                        <span className="text-sm bg-pink-500 px-2 py-1 rounded-full">{video.duration}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ExplorePage;