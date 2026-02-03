import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in py-8">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-indigo-600 transition-colors mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 space-y-6">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">1. Agreement to Terms</h2>
                    <p>
                        By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                        If you do not agree with these terms, you are prohibited from using or accessing this site.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on Hangle's website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">3. Disclaimer</h2>
                    <p>
                        The materials on Hangle's website are provided on an 'as is' basis. Hangle makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">4. Limitations</h2>
                    <p>
                        In no event shall Hangle or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                        or due to business interruption) arising out of the use or inability to use the materials on Hangle's website.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">5. Accuracy of Materials</h2>
                    <p>
                        The materials appearing on Hangle's website could include technical, typographical, or photographic errors.
                        Hangle does not warrant that any of the materials on its website are accurate, complete or current.
                        Hangle may make changes to the materials contained on its website at any time without notice.
                    </p>
                </section>
            </div>
        </div>
    );
}
