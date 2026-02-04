import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function Terms() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].terms;

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in py-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t.backToHome}
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{t.lastUpdated} {new Date().toLocaleDateString()}</p>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.agreement.title}</h2>
                    <p>
                        {t.agreement.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.license.title}</h2>
                    <p>
                        {t.license.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.disclaimer.title}</h2>
                    <p>
                        {t.disclaimer.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.limitations.title}</h2>
                    <p>
                        {t.limitations.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.accuracy.title}</h2>
                    <p>
                        {t.accuracy.content}
                    </p>
                </section>
            </div>
        </div>
    );
}
