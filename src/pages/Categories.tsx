import { Link } from 'react-router-dom';

export default function Categories() {
    const categories = [
        { id: 'airport', name: 'Airport (공항)', description: 'Check-in, Passport, Gate', color: 'bg-blue-500' },
        { id: 'taxi', name: 'Taxi (택시)', description: 'Destination, Fare, Directions', color: 'bg-yellow-500' },
        { id: 'bus', name: 'Bus (버스)', description: 'Bus stop, Route, Fees', color: 'bg-green-500' },
        { id: 'subway', name: 'Subway (지하철)', description: 'Station, Transfer, Exit', color: 'bg-orange-500' },
        { id: 'restaurant', name: 'Restaurant (식당)', description: 'Ordering, Menu, Payment', color: 'bg-red-500' },
        { id: 'hotel', name: 'Hotel (호텔)', description: 'Check-in, Service, Room', color: 'bg-indigo-500' },
        { id: 'tourist', name: 'Tourist Info (관광안내소)', description: 'Map, Guide, Tickets', color: 'bg-purple-500' },
        { id: 'daily', name: 'Daily Life (일상)', description: 'Greetings, Basic Questions', color: 'bg-pink-500' },
    ];

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Choose a Category</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {categories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/learn/${cat.id}`}
                        className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                    >
                        <div className={`h-2 ${cat.color}`} />
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 mt-2">{cat.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
