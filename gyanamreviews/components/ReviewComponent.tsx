import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  rating: number;
  title: string;
  text: string;
  date: string;
}

export default function ReviewCard({ name, role, rating, title, text, date }: ReviewCardProps) {
  return (
    <article className="p-8 bg-white rounded-2xl shadow-lg border-t-4 border-t-orange-500 hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'fill-orange-500 text-orange-500' : 'fill-gray-200 text-gray-200'}`} 
          />
        ))}
      </div>
      <h3 className="font-extrabold text-black text-xl mb-3 leading-snug">{title}</h3>
      <p className="text-gray-700 mb-8 flex-grow leading-relaxed text-base">{text}</p>
      
      <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
        <div>
          <p className="font-black text-black">{name}</p>
          <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mt-1">{role}</p>
        </div>
        <time dateTime={date} className="text-sm font-medium text-gray-400">
          {new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </time>
      </div>
    </article>
  );
}