// import React from 'react'
import Title from './Title'
import { BookUserIcon } from 'lucide-react'

const Testimonial = () => {

    const cardsData = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            handle: '@martin_dev',
            review: 'ResumeAI made structural customization absolute breeze. My application score jumped directly past internal screening.'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Avery Johnson',
            handle: '@averywrites',
            review: 'The live keyword suggestions are pure magic! Landed interview sequences with two corporate agencies in under 6 days.'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            handle: '@jordan_design',
            review: 'Beautiful templates ready for enterprise systems. Clean layout export structural parses instantly without bugs.'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Sarah Amara',
            handle: '@sarah_codes',
            review: 'Incredibly minimal and functional interface framework setup. Highly recommended for modern product roles.'
        },
    ];

    const CreateCard = ({ card }) => (
        <div className="p-5 rounded-2xl mx-3 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 w-76 shrink-0 flex flex-col justify-between">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <img className="size-10 rounded-full object-cover border border-slate-100" src={card.image} alt={card.name} />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-1">
                            <p className="text-sm font-bold text-slate-800 leading-none">{card.name}</p>
                            <svg className="fill-blue-500 shrink-0" width="12" height="12" viewBox="0 0 12 12">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                            </svg>
                        </div>
                        <span className="text-xs text-slate-400 mt-0.5">{card.handle}</span>
                    </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">"{card.review}"</p>
            </div>
        </div>
    );

  return (
    <div className="w-full py-10 bg-slate-50/40 border-y border-slate-100">
        <div id='testimonials' className='flex flex-col items-center my-6 scroll-mt-12'>
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/50 rounded-full px-4 py-1.5 uppercase tracking-wider">
                <BookUserIcon className="size-3.5 text-emerald-600"/>
                <span>Testimonials</span>
            </div>
            <Title title="Don't just take our words" description="Hear what our users say about us. We're always looking for ways to improve."/>
        </div>
        
        {/* Marquee Track 1 */}
        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mt-8">
            <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-[#fafbfc] to-transparent"></div>
            <div className="marquee-inner flex transform-gpu min-w-[200%] py-3">
                {[...cardsData, ...cardsData].map((card, index) => (
                    <CreateCard key={index} card={card} />
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-[#fafbfc] to-transparent"></div>
        </div>

        {/* Marquee Track 2 (Reverse) */}
        <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative mt-4">
            <div className="absolute left-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-[#fafbfc] to-transparent"></div>
            <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-3">
                {[...cardsData, ...cardsData].map((card, index) => (
                    <CreateCard key={index} card={card} />
                ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-[#fafbfc] to-transparent"></div>
        </div>

        <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .marquee-inner {
                animation: marqueeScroll 30s linear infinite;
            }
            .marquee-inner:hover {
                animation-play-state: paused;
            }
            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
    </div>
  )
}

export default Testimonial