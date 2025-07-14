import React from 'react';
import TwoColumnSection from '../common/TwoColumnSection';
import { useTranslation } from 'react-i18next'; 

const WEAboutSection = () => {
  const { t } = useTranslation();
  const title = t("WebsiteEcommerceAboutSection_title");
  const text = t("WebsiteEcommerceAboutSection_text");

  return (
    <div className="bg-gray" style={{ color: '#1a1a1a' }}>
      <TwoColumnSection 
        imageSrc="/images/websiteEcommerce/sites_that_dazzle_visitors.webp"
        title={title}
        text={text}
        imageSide="left"
      />
    </div>
  );
};

export default WEAboutSection;

