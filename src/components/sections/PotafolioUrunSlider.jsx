/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import "./PotafolioStivaSlier.css";

const PotafolioUrunSlier = () => {
  const { t } = useTranslation();
  const imgBasePath = "/images/portfolio/";

  // Define client data
  const duplicationFactor = 30;
  const topRowClients = [
    { name: "Astelaris", logo: "portfolio-5.png", url: "/clientes/astelaris" },
    { name: "Aurea", logo: "portfolio-6.png", url: "/clientes/aurea" },
    { name: "Cssis", logo: "portfolio-7.png", url: "/clientes/cssis" },
    { name: "Ecompack", logo: "portfolio-8.png", url: "/clientes/ecompack" },
    { name: "Gravity", logo: "portfolio-9.png", url: "/clientes/gravity" },
    { name: "Insights to Behavior", logo: "portfolio-10.png", url: "/clientes/insights-to-behavior" },
    { name: "Mita", logo: "portfolio-11.png", url: "/clientes/mita" },
  ];  

  // Data for mobile view
  const mobileClients = [...topRowClients].sort(() => Math.random() - 0.5).slice(0, 6);

  // Duplicate arrays for seamless marquee effect
  const duplicateArray = (arr, times) => Array(times).fill(arr).flat();
  const duplicatedTopClients = duplicateArray(topRowClients, duplicationFactor);

  return (
    <section className="w-full bg-white py-0 md:py-0">
      <div className="w-[100%] mx-auto">
        <div className="relative">
          {/* Desktop marquee rows */}
          <div className="block mb-16">
            <div className="marquee-container-stiva marquee-top-stiva">
              <div className="marquee-content-stiva">
                {duplicatedTopClients.map((client, index) => (
                  <a
                  key={index}
                  href={client.url}
                  className="flex flex-col items-center text-center text-black hover:text-blue-600"
                >
                  <img
                    src={`${imgBasePath}${client.logo}`}
                    alt={client.name}
                    className="h-[250px] sm:h-[360px] w-auto max-w-full"
                  />
                  <span className="mt-2 text-sm sm:text-base font-medium w-full">
                    {client.name}
                  </span>
                </a>                
                ))}
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default PotafolioUrunSlier;