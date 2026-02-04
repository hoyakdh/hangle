import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function Categories() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].categories;

    const baseCategories = [
        { id: 'airport', color: 'bg-blue-500' },
        { id: 'taxi', color: 'bg-yellow-500' },
        { id: 'bus', color: 'bg-green-500' },
        { id: 'subway', color: 'bg-orange-500' },
        { id: 'restaurant', color: 'bg-red-500' },
        { id: 'hotel', color: 'bg-indigo-500' },
        { id: 'tourist', color: 'bg-purple-500' },
        { id: 'daily', color: 'bg-pink-500' },
        { id: 'emergency', color: 'bg-red-600' },
        { id: 'hospital', color: 'bg-emerald-500' },
    ];

    // Merge base config with translations
    const categories = baseCategories.map(cat => ({
        ...cat,
        ...t.items[cat.id as keyof typeof t.items]
    }));

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.title}</h2>
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
