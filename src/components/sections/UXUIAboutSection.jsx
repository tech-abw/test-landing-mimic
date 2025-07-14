import React from 'react';
import TwoColumnSection from '../common/TwoColumnSection';
import { useTranslation } from 'react-i18next';

const UXUIAboutSection = () => {
  const { t } = useTranslation();
  const title = t("UXUI_AboutSection_title");
  const text = t("UXUI_AboutSection_text");

  return (
    <div className="bg-gray" style={{ color: '#1a1a1a' }}>
      <TwoColumnSection 
        imageSrc="/images/UXUI/uxui.webp"
        title={title}
        text={text}
        imageSide="left"
      />
    </div>
  );
};

export default UXUIAboutSection;

