import { Link } from 'react-router-dom';
import { Globe, Heart, Coffee, Music, Film, ArrowRight, Landmark } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Culture() {
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
                            한국 문화 가이드
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            언어를 넘어, 한국인의 마음과 생활을 이해하기
                        </p>
                    </div>
                </div>

                {/* 메인 아티클 */}
                <article className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-10 shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        한국 문화 완전 정복 – 언어보다 먼저 알아야 할 한국인의 생활과 가치관
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        언어는 그 사회의 문화와 가치관을 담는 그릇입니다. 한국어를 진정으로 이해하려면 한국인들이 어떤 방식으로 사고하고, 어떤 사회적 관계 속에서 생활하는지를 알아야 합니다. 한국의 유교적 전통, 빠른 현대화, 그리고 K-컬쳐의 세계적 영향력은 모두 한국어 표현과 소통 방식에 직접적으로 반영되어 있습니다. 이 가이드에서는 한국어 학습자가 반드시 알아야 할 한국 문화의 핵심 요소들을 소개합니다.
                    </p>

                    {/* 유교와 사회 위계 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Landmark className="w-6 h-6 text-red-500" /> 유교적 가치관과 '나이' 문화
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국 사회의 가장 독특한 특징 중 하나는 나이와 위계질서를 매우 중시한다는 것입니다. 이는 수천 년에 걸친 유교 문화의 영향입니다. 한국에서는 처음 만나는 사람에게 나이를 묻는 것이 실례가 아닙니다. 이는 어떤 언어 체계(존댓말/반말)를 사용해야 할지 결정하기 위한 실용적인 절차입니다.
                        한국의 나이 체계는 다른 나라와 다릅니다. 한국의 '한국식 나이(세는 나이)'는 태어나는 순간 1살이고, 해가 바뀔 때마다 모두 한 살씩 더합니다. 따라서 국제 나이보다 1~2살 더 많습니다. 최근에는 만 나이로 통일하는 방향으로 법이 바뀌었지만, 일상생활에서는 여전히 세는 나이가 혼재합니다. 선배(先輩, 나보다 먼저 사회 경험을 쌓은 사람), 후배(後輩), 형/오빠, 누나/언니 등의 호칭 체계도 이런 위계 문화에서 비롯된 것입니다.
                    </p>

                    {/* 빨리빨리 문화 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Coffee className="w-6 h-6 text-amber-600" /> '빨리빨리' 문화와 한국인의 역동성
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        '빨리빨리'는 단순히 '빨리'를 두 번 반복한 것이 아닙니다. 이 단어는 한국의 사회·경제적 역동성을 상징하는 대표적인 문화 코드입니다. 한국은 1960년대 이후 단 수십 년 만에 세계 최빈국에서 선진국 대열에 오른 '한강의 기적'을 이루었는데, 이 압축 성장의 DNA가 '빨리빨리' 문화입니다. 한국에서 배달 음식은 보통 30분 이내, 인터넷 속도는 세계 최고 수준, 스마트폰 충전 속도까지 빠릅니다. 이러한 문화는 한국어에도 반영되어, 즉각적인 반응과 빠른 의사결정을 선호하는 표현들이 많습니다. 예를 들어 "바로 할게요(I'll do it right now)", "금방 가요(I'll be there in a moment)"는 일상적으로 쓰이는 표현입니다.
                    </p>

                    {/* K-POP, K-드라마 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Music className="w-6 h-6 text-pink-500" /> K-Pop과 K-Drama – 한국어 학습의 강력한 친구
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        최근 전 세계적으로 K-Pop과 K-Drama에 매료된 사람들이 한국어를 배우기 시작하는 경우가 매우 많습니다. 이런 콘텐츠들은 실제 한국어 회화와 문화를 배우는 데 놀라울 정도로 효과적입니다. K-Pop 가사에는 일상적인 감정 표현과 비유적인 말들이 가득하고, K-Drama는 한국인의 관계, 직장 생활, 가족 문화를 현실감 있게 보여줍니다.
                        최근 한국 팬덤 문화에서 탄생한 신조어들도 눈여겨볼 필요가 있습니다. '최애(가장 좋아하는 것/사람)'는 '최고로 사랑하는'의 줄임말이고, '덕질(fandom activities)'은 '오타쿠적인 활동'을 의미합니다. '갓벽(godly perfection)'은 '갓(God)'과 '완벽'의 합성어로 최고의 퍼포먼스를 칭찬할 때 씁니다. K-Drama에서 자주 들리는 '괜찮아요(I'm okay)', '미안해요(I'm sorry)', '고마워요(Thank you)', '보고 싶어요(I miss you)'는 한국어 학습의 첫 단계로 매우 좋은 표현들입니다.
                    </p>

                    {/* 음식 문화 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Film className="w-6 h-6 text-green-500" /> 한국 음식 문화와 함께 배우는 한국어
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        한국 음식 문화는 한국어와 떼려야 뗄 수 없는 관계입니다. 음식 관련 어휘와 표현들은 한국인의 관계와 정서를 이해하는 창입니다. '밥 먹었어요?(Did you eat?)'는 단순히 배고픔을 묻는 것이 아니라, 상대방의 안부를 묻는 인사말입니다. '솥(pot)', '찌개(stew)', '반찬(side dishes)', '국(soup)' 같은 단어들도 한국 식문화를 이해하는 데 필수입니다.
                        한국은 '배달(delivery)' 문화가 발달해 있으며, 음식을 주문하거나 식당에서 쓸 수 있는 표현들도 중요합니다. '주문할게요(I'd like to order)', '이거 주세요(Please give me this)', '얼마예요?(How much is it?)', '맛있어요(It's delicious)'는 한국 여행이나 한국인과의 교류에서 바로 활용할 수 있는 실용적인 표현들입니다. 특히 한국의 치킨, 삼겹살, 떡볶이, 삼계탕, 비빔밥 등은 세계적으로 유명해진 한식으로, 이런 음식 이름들도 자연스럽게 익히면 회화에 큰 도움이 됩니다.
                    </p>

                    {/* 눈치 */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Heart className="w-6 h-6 text-red-500" /> '눈치' – 한국인 특유의 사회적 감수성
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        '눈치'는 한국어에서 영어로 완벽하게 번역하기 어려운 개념입니다. 가장 근접한 번역은 'social awareness' 혹은 'the ability to read the room'이지만, 이것만으로는 부족합니다. 눈치란 상대방의 감정이나 상황을 말하지 않아도 알아채고 적절하게 반응하는 능력입니다.
                        예를 들어, 한국 직장에서 상사가 퇴근하지 않으면 부하 직원들도 먼저 퇴근하기가 어렵습니다. 이것이 눈치입니다. 또 누군가 밥을 먹고 싶어하는데 직접 말하지 않아도 분위기를 읽고 "밥 먹을까요?"라고 먼저 제안하는 것도 눈치 있는 행동입니다. '눈치가 없다(has no social awareness)'는 말은 한국에서 심각한 단점으로 여겨집니다. 반대로 '눈치가 빠르다(quick to read the situation)'는 칭찬입니다. 이 개념을 이해하면 한국어의 행간을 읽는 능력이 크게 향상됩니다.
                    </p>

                    {/* 정(情) */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        '정(情)' – 한국인 사이의 특별한 유대감
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        '정'은 한국 문화를 이해하는 데 빠질 수 없는 또 다른 핵심 개념입니다. 영어의 'attachment', 'bond', 'affection' 등으로 번역되지만, 이 단어들로는 한국어 '정'의 깊이를 다 담을 수 없습니다. 정은 함께 시간을 보내고 경험을 나누면서 자연스럽게 쌓이는 깊고 따뜻한 감정적 유대입니다. '정이 들다(to develop jeong)'라는 표현은 어떤 사람이나 장소, 심지어 물건에도 쓸 수 있으며, 오랜 시간 함께하며 생긴 애착과 친밀감을 뜻합니다. '정 때문에 못 떠나(I can't leave because of jeong)'라는 표현도 자주 씁니다. 이 '정'의 문화는 한국인들이 왜 오래된 친구나 단골 가게, 고향을 소중히 여기는지를 설명합니다.
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
