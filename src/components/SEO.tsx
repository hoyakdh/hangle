import { Helmet } from 'react-helmet-async';
import { useUser } from '../context/UserContext';

interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
    const { targetLanguage } = useUser();

    const siteTitle = 'Hangle - Master Korean Idioms';
    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const currentUrl = url || window.location.href;
    const defaultImage = 'https://hangle.app/og-image.png'; // Make sure this image exists or use a valid one

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || defaultImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image || defaultImage} />

            <meta name="language" content={targetLanguage} />
        </Helmet>
    );
}
