import { useEffect } from "react";

const SEO = ({ title, description }) => {
    useEffect(() => {
        document.title = title;

        let metaDescription = document.querySelector(
            'meta[name="description"]'
        );
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        }

        let ogTitle = document.querySelector('meta[property="og:title"]');
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogTitle) ogTitle.setAttribute("content", title);
        if (ogDesc) ogDesc.setAttribute("content", description);

        let twitterTitle = document.querySelector(
            'meta[property="twitter:title"]'
        );
        let twitterDesc = document.querySelector(
            'meta[property="twitter:description"]'
        );
        if (twitterTitle) twitterTitle.setAttribute("content", title);
        if (twitterDesc) twitterDesc.setAttribute("content", description);
    }, [title, description]);

    return null;
};

export default SEO;
