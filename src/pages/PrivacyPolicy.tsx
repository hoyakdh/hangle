import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { translations } from '../data/translations';

export default function PrivacyPolicy() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].privacy;

    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in py-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> {t.backToHome}
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{t.title}</h1>
            <p className="text-gray-500 text-sm mb-8">{t.lastUpdated} {new Date().toLocaleDateString()}</p>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.intro.title}</h2>
                    <p>
                        {t.intro.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.dataCollection.title}</h2>
                    <p>
                        {t.dataCollection.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.cookies.title}</h2>
                    <p>
                        {t.cookies.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.thirdParty.title}</h2>
                    <p>
                        {t.thirdParty.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.changes.title}</h2>
                    <p>
                        {t.changes.content}
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t.contact.title}</h2>
                    <p>
                        {t.contact.content}
                    </p>
                </section>
            </div>
        </div>
    );
}
