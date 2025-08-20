import React from "react";
import { useTranslation } from "react-i18next";


const PolicyPage = ({ title, lastUpdated, sections }) => {
    const { t } = useTranslation();
    return (
        <div className="w-full flex justify-center py-24">
            <div className="md:w-[95%] w-full mx-4 md:mx-0 bg-white rounded-2xl shadow-lg px-8 py-12">
                <h1 className="text-3xl lg:text-4xl font-medium mb-8 text-left w-fit pb-1 border-b border-black/30">
                    {title}
                </h1>

                <div className="w-full">
                    <p className="text-left text-lg lg:text-xl font-semibold text-gray-600 mb-8">
                    {t("policy.last_updated")}: {lastUpdated}
                    </p>

                    {sections.map((section, index) => (
                        <React.Fragment key={index}>
                            <h2 className="text-left text-2xl  font-semibold mt-6 mb-4">
                                {section.title}
                            </h2>
                            {section.content.map((paragraph, pIndex) =>
                                typeof paragraph === "string" ? (
                                    <p
                                        key={pIndex}
                                        className="text-left text-base lg:text-lg mb-4"
                                    >
                                        {paragraph}
                                    </p>
                                ) : (
                                    paragraph
                                )
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PolicyPage;
