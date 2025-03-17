import React, { useState, useRef } from 'react';
import { Heart, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX, Maximize, Minimize, Calendar, MapPin, Clock } from 'lucide-react';

interface Photo {
  url: string;
  caption?: string;
  type?: 'image' | 'video';
}

interface Memory {
  id: number;
  title: string;
  date: string;
  description: string;
  location?: string;
  photos: Photo[];
}

const memories: Memory[] = [
  {
    "id": 1,
    "title": "Trip to Vishakapatnam - ARAKU",
    "date": "8 March 2024",
    "description": "My trip to Visakhapatnam and Araku with Irfan was an unforgettable experience filled with scenic beaches, lush green valleys, and breathtaking waterfalls. From exploring RK Beach and Kataki waterfalls in Vizag to enjoying the mesmerizing bike ride through Araku’s coffee plantations, every moment was magical and refreshing!",
    "photos": [
      {
        "url": "src/videos/beaches.mp4", 
        "type":"video"
      },
      {
        "url": "src/images/araku.jpg",
        "caption": "RK Beach"
      },
      {
        "url": "src/videos/vishakapatnam.mp4", 
        "type":"video"
      },
      {
        "url": "src/images/1.jpg",
        "caption": "Tribal Museum"
      },
      {
        "url": "src/images/a11.jpg",
        "caption": "Tribal Museum"
      },
      {
        "url": "src/videos/tribal_museun_tour.mp4", 
        "type":"video"
      },
      {
        "url": "src/images/a6.jpg",
        "caption": "Tribal Museum"
      },
      {
        "url": "src/images/a10.jpg",
        "caption": "Beach Sand Art"
      },
      {
        "url": "src/images/4.jpg",
        "caption": "GaliKonda viewpoint"
      },
      {
        "url": "src/images/a9.jpg",
        "caption": "Beach Sand Art"
      },
      {
        "url": "src/images/a1.jpg",
        "caption": "Coffee Plantation"
      },
      {
        "url": "src/images/a8.jpg",
        "caption": "I LOVE VIZAG"
      },
      {
        "url": "src/videos/araku_valley.mp4", 
        "type":"video"
      },
      {
        "url": "src/images/bc1.jpg",
        "caption": "Borra Caves"
      },
      {
        "url": "src/images/bc2.jpg",
        "caption": "Borra Caves"
      },
      {
        "url": "src/images/7.jpg",
        "caption": "Best Friends Ever"
      },
      {
        "url": "src/videos/coffee_plantation.mp4", 
        "type":"video"
      },
      {
        "url": "src/images/a2.jpg",
        "caption": "Vizag View Point Surrounded"
      },
      {
        "url": "src/images/a3.jpg",
        "caption": "Borra Caves View"
      },
      {
        "url": "src/images/a4.jpg",
        "caption": "Borra Caves"
      },
      {
        "url": "src/images/a5.jpg",
        "caption": "Besties"
      },
      {
        "url": "src/videos/borre_caves.mp4", 
        "type":"video"
      }
      
    ]
  },  
  {
    id: 2,
    title: "First Visit to Khammam - Irfan's Sweet Home",
    date: "14 May 2023",
    description: "My first visit to Khammam was a truly heartwarming and memorable experience. From the moment I arrived, I was welcomed with warmth and kindness at Irfan’s sweet home. The hospitality of his family made me feel at home instantly, and every moment spent there was filled with joy and laughter.Spending time with both our families was the highlight of the trip. We shared stories, reminisced about old memories, and created new ones together. The conversations over delicious homemade food, the heartfelt laughter, and the late-night chats strengthened our bond even more.Exploring Khammam with Irfan was another exciting part of the visit. From visiting local spots to enjoying peaceful moments at home, every experience added to the beauty of the trip. The love, care, and warmth I received made this visit truly special, leaving me with cherished memories that I will always hold close to my heart.",
    photos: [
      {
        url: "src/images/lakaram tank.jpg",
        caption: "Lakaram Tank Bund"
      },
      {
        url: "src/images/lt1.jpg",
        caption: "Lakaram Tank Bund"
      },
      {
        url: "src/images/lt2.jpg",
        caption: "Lakaram Tank Bund"
      },
      {
        url: "src/images/biryani.jpg",
        caption: "Biryani Preparation"
      },
      {
        url: "src/images/ep2.jpg",
        caption: "Exploring Near By Places"
      },
      {
        url: "src/images/ep1.jpg",
        caption: "Exploring Near By Places"
      },
      {
        url: "src/images/dinner.jpg",
        caption: "Dinner At Haweli Restaurant"
      },
      // {
      //   url: "src/images/fv1.jpg",
      //   caption: "Visiting Fields Near By"
      // },
      {
        url: "src/images/Icecream.jpg",
        caption: "Enjoying Ice Cream"
      }
    ]
  },
  {
    id: 3,
    title: "Irfan's Visit to Zaheerabad",
    date: "26 July 2024",
    description: "I was Surprised a lot and felt very happy from bottom of my heart. Thanks a Lot Irfan.",
    photos: [
      {
        url: "src/images/z1.jpg",
        caption: "Biryani Preparation"
      },
      {
        url: "src/images/z2.jpg",
        caption: "Exploring Near By Places"
      },
      {
        url: "src/images/z3.jpg",
        caption: "Dinner At Haweli Restaurant"
      },
      {
        url: "src/images/z4.jpg",
        caption: "Visiting Fields Near By"
      },
      {
        url: "src/images/z5.jpg",
        caption: "Enjoying Ice Cream"
      }
    ]
  },
  {
    id: 4,
    title: "My Family Visit To Khammam ",
    date: "18 January 2025",
    description: "Amazing Trip to Khammam with my family on the Occassion of Afreen Didi's Daughter Function. Enjoyed a lot and had a lot of fun with Aleena Mehreen.",
    photos: [
      {
        url: "src/images/f1.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f2.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f9.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f10.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f11.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f6.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f12.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/aleena1.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/aleena2.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f8.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f7.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f4.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f5.jpg",
        caption: "Sweet Moments"
      },
      {
        url: "src/images/f3.jpg",
        caption: "Sweet Moments"
      }
    ]
  }
];

function MediaPlayer({ media, isZoomed, setIsZoomed }: { media: Photo; isZoomed: boolean; setIsZoomed: (zoom: boolean) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    setIsMuted((prevMuted) => {
      if (videoRef.current) {
        videoRef.current.muted = !prevMuted;
      }
      return !prevMuted;
    });
  };  

  if (media.type === 'video') {
    return (
      <div className="relative w-full h-full">
        <video
          ref={videoRef}
          src={media.url}
          className="w-full h-full object-contain"
          onClick={() => setIsZoomed(!isZoomed)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 flex items-center justify-center gap-4 text-white">
          <button onClick={togglePlay} className="hover:text-pink-400 transition-colors">
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button onClick={toggleMute} className="hover:text-pink-400 transition-colors">
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>
        </div>
      </div>
    );
  }

  return (
    <img
      src={media.url}
      alt={media.caption}
      className={`w-full h-full object-contain transition-transform duration-300 cursor-pointer ${
        isZoomed ? 'scale-110' : 'scale-100'
      }`}
      onClick={() => setIsZoomed(!isZoomed)}
    />
  );
}

function App() {
  const [currentMemoryIndex, setCurrentMemoryIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const currentMemory = memories[currentMemoryIndex];
  const totalPhotos = currentMemory.photos.length;

  const nextMemory = () => {
    setCurrentMemoryIndex((prev) => (prev === memories.length - 1 ? 0 : prev + 1));
    setCurrentPhotoIndex(0);
  };

  const prevMemory = () => {
    setCurrentMemoryIndex((prev) => (prev === 0 ? memories.length - 1 : prev - 1));
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 transition-all">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Our Friendship Journey</h1>
          <p className="text-gray-600 italic">A collection of our precious moments together</p>
          <Heart className="mx-auto mt-4 text-pink-500 animate-pulse" size={32} />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative aspect-video rounded-xl overflow-hidden shadow-2xl bg-white transition-all ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''
          }`}>
            <button 
              onClick={prevMemory}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-20"
            >
              <ChevronLeft className="text-gray-800" size={24} />
            </button>
            
            <button 
              onClick={nextMemory}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all z-20"
            >
              <ChevronRight className="text-gray-800" size={24} />
            </button>

            <button 
              onClick={prevPhoto}
              className="absolute left-16 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-lg hover:bg-white transition-all z-20"
            >
              <ChevronLeft className="text-gray-800" size={20} />
            </button>
            
            <button 
              onClick={nextPhoto}
              className="absolute right-16 top-1/2 -translate-y-1/2 bg-white/80 p-1.5 rounded-full shadow-lg hover:bg-white transition-all z-20"
            >
              <ChevronRight className="text-gray-800" size={20} />
            </button>

            <MediaPlayer 
              media={currentMemory.photos[currentPhotoIndex]}
              isZoomed={isZoomed}
              setIsZoomed={setIsZoomed}
            />

            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={toggleFullscreen}
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
              </button>
              <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm flex items-center">
                {currentPhotoIndex + 1} / {totalPhotos}
              </div>
            </div>

            {currentMemory.photos[currentPhotoIndex].caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-center">
                {currentMemory.photos[currentPhotoIndex].caption}
              </div>
            )}
          </div>

          <div className="bg-white rounded-xl p-6 mt-6 shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 flex-grow">
                {currentMemory.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar size={16} />
                <span className="text-sm">{currentMemory.date}</span>
              </div>
            </div>

            {currentMemory.location && (
              <div className="flex items-center gap-2 text-gray-500 mb-3">
                <MapPin size={16} />
                <span className="text-sm">{currentMemory.location}</span>
              </div>
            )}

            <p className="text-gray-700 leading-relaxed">{currentMemory.description}</p>

            <div className="mt-6 grid grid-cols-6 gap-2 overflow-x-auto py-2">
              {currentMemory.photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`relative aspect-square ${
                    index === currentPhotoIndex ? 'ring-2 ring-pink-500' : ''
                  }`}
                >
                  {photo.type === 'video' ? (
                    <div className="relative">
                      <video
                        src={photo.url}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Play className="absolute inset-0 m-auto text-white" size={20} />
                    </div>
                  ) : (
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentMemoryIndex(index);
                  setCurrentPhotoIndex(0);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentMemoryIndex ? 'bg-pink-500 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;