import { Link } from 'react-router-dom';
import { Globe, Heart, Coffee, Music, Film, ArrowRight, Landmark } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useUser } from '../../context/UserContext';
import { translations } from '../../data/translations';
import { guideArticleData } from '../../data/guideArticles';

export default function Culture() {
    const { targetLanguage } = useUser();
    const t = translations[targetLanguage].guide;
    const articleT = guideArticleData[targetLanguage]?.culture || guideArticleData['en'].culture;

    return (
        <>
            <Helmet>
                <title>Korean Culture Guide – K-Pop, K-Drama, Food & Social Etiquette | Hangle</title>
                <meta
                    name="description"
                    content="Explore Korean culture to accelerate your language learning. Understand Korean social etiquette, food culture, K-pop slang, K-drama expressions, and Confucian values that shape everyday Korean communication."
                />
            </Helmet>

            <div className="max-w-3xl mx-auto animate-fade-in space-y-8">
                {/* 헤더 */}
                <div className="flex items-center gap-4 mb-8">
                    <Link to="/guide" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                        <span className="text-gray-600 dark:text-gray-300 text-xl">←</span>
                    </Link>
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                            <Globe className="w-8 h-8 text-purple-500" />
                            {t.culture.title}
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            {t.culture.subtitle}
                        </p>
                    </div>
                </div>

                {/* 메인 아티클 */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {articleT.title}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.intro}
                    </p>

                    {/* 유교와 사회 위계 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Landmark className="w-6 h-6 text-red-500" /> {articleT.p1Title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.p1Desc}
                    </p>

                    {/* 빨리빨리 문화 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Coffee className="w-6 h-6 text-amber-600" /> {articleT.p2Title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.p2Desc}
                    </p>

                    {/* K-POP, K-드라마 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Music className="w-6 h-6 text-pink-500" /> {articleT.p3Title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.p3Desc}
                    </p>

                    {/* 음식 문화 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Film className="w-6 h-6 text-green-500" /> {articleT.p4Title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.p4Desc}
                    </p>

                    {/* 눈치 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Heart className="w-6 h-6 text-red-500" /> {articleT.p5Title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.p5Desc}
                    </p>

                    {/* 정(情) */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Heart className="w-6 h-6 text-pink-500" /> {articleT.p6Title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {articleT.p6Desc}
                    </p>
                </article>

                {/* 관련 가이드 링크 */}
                <div className="grid md:grid-cols-2 gap-4">
                    <Link to="/guide/grammar" className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">다음 단계</p>
                                <h3 className="font-bold text-gray-900 dark:text-white">문법 가이드 보기</h3>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                        </div>
                    </Link>
                    <Link to="/guide/pronunciation" className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">발음 연습</p>
                                <h3 className="font-bold text-gray-900 dark:text-white">발음 가이드 보기</h3>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}
