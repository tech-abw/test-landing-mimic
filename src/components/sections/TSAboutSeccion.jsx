import React from 'react';
import TwoColumnSection from '../common/TwoColumnSection';
import { useTranslation } from 'react-i18next'; 

const TSAboutSection = () => {
  const { t } = useTranslation();
  const title = t("TS_AboutSection_title");
  const text = t("TS_AboutSection_text");

  return (
    <div className="bg-gray" style={{ color: '#1a1a1a' }}>
      <TwoColumnSection 
        imageSrc="/images/ia.webp"
        title={title}
        text={text}
        imageSide="left"
      />
    </div>
  );
};

export default TSAboutSection;

