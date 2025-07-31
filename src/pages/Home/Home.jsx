import juanPhoto from '../../assets/juan.png';
import { useState, useEffect } from 'react';

function Home() {
  const jobTitles = [
    "Solutions Architect",
    "DevOps Engineer", 
    "Cloud Engineer",
    "Software Engineer",
    "Teacher",
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => 
          prevIndex === jobTitles.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [jobTitles.length]);
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4" style={{ backgroundColor: 'var(--color-bleached-silk)' }}>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* Left Column - Content */}
        <div className="space-y-6 text-center lg:text-left mt-16 lg:mt-0">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ color: 'var(--color-hadopelagic-water)' }}>
            Hi! I'm Juan Ignacio
          </h1>
          
          <h2 
            className={`text-2xl lg:text-3xl font-semibold transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ color: 'var(--color-obscure-olive)' }}
          >
            {jobTitles[currentTitleIndex]}
          </h2>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed">
              Software, Cloud and Data enthusiast with a passion for continuous learning.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Experienced in AWS, Operating Systems, Databases and Networks. Always eager to tackle new challenges and share knowledge with colleagues.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              In my free time I enjoy reading, puzzles, and collaborating in university lectures.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Thanks for visiting! Feel free to reach out with any suggestions or opportunities.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="https://linkedin.com/in/juan-ignacio-giacobbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/juanignaciogiacobbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
            
            <a 
              href="https://medium.com/@juanignaciogiacobbe" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-1v3a2 2 0 01-2 2H4.5a1.5 1.5 0 010-3H11V7z" />
              </svg>
              My Blog
            </a>
          </div>
        </div>
        
        {/* Right Column - Photo */}
        <div className="flex justify-center lg:justify-end">
          <div 
            className="w-80 h-80 lg:w-96 lg:h-96 overflow-hidden rounded-lg shadow-2xl"
            style={{ 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(1, 3, 38, 0.3), 0 0 20px rgba(1, 3, 38, 0.1)'
            }}
          >
            <img 
              src={juanPhoto}
              alt="Juan Ignacio Giacobbe - Developer" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
