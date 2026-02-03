import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in py-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Introduction</h2>
                    <p>
                        Welcome to Hangle. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Data We Collect</h2>
                    <p>
                        We do not collect any personal data from our users. Hangle is a client-side application.
                        Any progress or preferences (such as your name, level, XP, and theme settings) are stored locally on your device
                        using your browser's Local Storage. This data is not transmitted to any external servers.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Cookies</h2>
                    <p>
                        We do not use cookies for tracking purposes. We may use local storage to save your preferences
                        to improve your experience on our site (e.g., remembering your dark mode preference).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4. Third-Party Links</h2>
                    <p>
                        This website may include links to third-party websites, plug-ins, and applications.
                        Clicking on those links or enabling those connections may allow third parties to collect or share data about you.
                        We do not control these third-party websites and are not responsible for their privacy statements.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">5. Changes to This Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us.
                    </p>
                </section>
            </div>
        </div>
    );
}
