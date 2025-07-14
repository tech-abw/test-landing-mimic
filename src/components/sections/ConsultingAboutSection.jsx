import React from 'react';
import TwoColumnSection from '../common/TwoColumnSection';
import { useTranslation } from 'react-i18next';

const ConsultingAboutSection = () => {
  const { t } = useTranslation();
  const title = t("Consulting_AboutSection_title");
  const text = t("Consulting_AboutSection_text");

  return (
    <div className="bg-gray" style={{ color: '#1a1a1a' }}>
      <TwoColumnSection 
        imageSrc="/images/Consulting/Our_expertise.webp"
        title={title}
        text={text}
        imageSide="left"
      />
    </div>
  );
};

export default ConsultingAboutSection;

