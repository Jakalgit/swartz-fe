import {Col, Container, Row} from "react-bootstrap";
import {getLocale, getTranslations} from "next-intl/server";
import {PRODUCTS_LINKS} from "@/consts/links";
import styles from "@/styles/pages/Home.module.css"
import {BreakText} from "@/app/components/server/BreakText";
import LogoSmallIcon from "@/app/components/client/icons/LogoSmallIcon";
import ThermostatIcon from "@/app/components/client/icons/ThermostatIcon";
import FlagIcon from "@/app/components/client/icons/FlagIcon";
import SettingsIcon from "@/app/components/client/icons/SettingsIcon";
import ConstructionIcon from "@/app/components/client/icons/ConstructionIcon";
import ThumbUpIcon from "@/app/components/client/icons/ThumbUpIcon";
import Slider from "@/app/components/client/HomePage/Slider";
import TelegramIcon from "@/app/components/client/icons/TelegramIcon";
import RutubeIcon from "@/app/components/client/icons/RutubeIcon";
import React from "react";
import YoutubeIcon from "@/app/components/client/icons/YoutubeIcon";
import RequestComponent from "@/app/components/popups/RequestComponent";
import ArrowRightIcon from "@/app/components/client/icons/ArrowRightIcon";
import MotionMain from "@/app/components/client/MotionMain";

export default async function Home() {

  const t = await getTranslations('HomePage');
  const locale = await getLocale();

  const blocks = [
    [
      {
        text: t('mobileSurveillance'),
        href: PRODUCTS_LINKS.items[0].href,
        image: '/icons/camera.png',
      },
      {
        text: t('security'),
        href: PRODUCTS_LINKS.items[2].href,
        image: '/icons/shield.png',
      },
      {
        text: t('aerialVehicles'),
        href: PRODUCTS_LINKS.items[3].href,
        image: '/icons/copter.png',
      }
    ],
    [
      {
        text: t('modulesAndComponents'),
        href: PRODUCTS_LINKS.items[4].href,
        image: '/icons/inverter.png',
      },
      {
        text: t('powerSupplies'),
        href: PRODUCTS_LINKS.items[1].href,
        image: '/icons/accum.png',
      }
    ]
  ];

  const featureIcons = [
    <ThermostatIcon />,
    <FlagIcon />,
    <SettingsIcon />,
    <ConstructionIcon />,
    <ThumbUpIcon />
  ];

  const mediaLinks = [
    {
      text: 'Telegram',
      href: '',
      icon: <TelegramIcon className={styles.telegramSvg} />
    },
    {
      text: 'Rutube',
      href: '',
      icon: <RutubeIcon className={styles.rutubeSvg} />,
    },
    {
      text: 'YouTube',
      href: '',
      icon: <YoutubeIcon className={styles.youtubeSvg} />
    }
  ]

  return (
    <>
      <MotionMain className="max-vh">
        <section>
          <Container>
            <div className={`flex flex-col items-center ${styles.categories}`}>
              {blocks.map((line, index) =>
                <div className={`grid w-full ${styles.categoryLine}`} key={index}>
                  {line.map((block, i) =>
                    <div
                      className={`flex flex-col bg-[color:--purple-color] ${styles.categoryBlock}`}
                      key={i}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold">
                          {block.text}
                        </h3>
                        <img src={block.image} alt="image"/>
                      </div>
                      <div className="flex mt-auto">
                        <a
                          href={`/${locale}${block.href}`}
                          className="flex items-center duration-300 cursor-pointer"
                        >
                          {t('look')}
                          <ArrowRightIcon />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </Container>
        </section>
        <section className={`bg-[color:--purple-color] ${styles.aboutBlock}`}>
          <Container>
            <div className="flex flex-col">
              <h2 className="font-bold">
                {t('about')}
              </h2>
              <div className="flex items-start">
                <div className={`flex flex-col ${styles.aboutText}`}>
                  <p>
                    <span className="font-bold">Swart Mayer - </span>{t('aboutText')}
                  </p>
                  <p className={styles.slogan}>
                    <BreakText text={t('slogan')} />
                  </p>
                </div>
                <LogoSmallIcon className={styles.aboutBlockLogo} />
              </div>
              <div className={`flex ${styles.featuresPart}`}>
                {featureIcons.map((icon, index) =>
                  <div key={index} className={`flex flex-col items-center ${styles.featureBlock}`}>
                    <div className="flex items-center justify-center">
                      {icon}
                    </div>
                    <p>
                      <BreakText text={t(`features.${index + 1}`)} />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>
        <section className={`flex flex-col items-center ${styles.sliderSection}`}>
          <Container>
            <h2 className="font-bold text-center">{t('photos')}</h2>
            <Slider/>
          </Container>
        </section>
        <section className={`flex flex-col bg-[color:--purple-color] ${styles.mediaSection}`}>
          <h2 className="font-bold text-center">
            {t('ourMedia')}
          </h2>
          <div className={`flex justify-center`}>
            {mediaLinks.map((link, index) =>
              <a
                href={link.href}
                key={index}
                className={`flex items-center font-bold ${styles.mediaBlock}`}
              >
                {link.icon}
                {link.text}
              </a>
            )}
          </div>
        </section>
        <section className={`flex flex-col items-center ${styles.requestSection}`}>
          <h2 className="text-center">
            <BreakText text={t('requestHeader')} />
          </h2>
          <RequestComponent />
        </section>
      </MotionMain>
    </>
  );
}
