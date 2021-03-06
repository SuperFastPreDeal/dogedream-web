import type { NextPage } from "next"
import { BackTop, Collapse, List, message, Timeline } from "antd"
import classNames from "classnames"
import Head from "next/head"
import { useRouter } from "next/router"
import useMedia from "use-media"

import ColorButton from "../components/ColorButton"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero, { FlexList, NFTImagesList } from "../components/Hero"
import { Language } from "../components/LocaleSwitcher"
import Roadmap from "../components/Roadmap"
import Section from "../components/Section"
import SectionImage from "../components/Section/Image"
import i18n from "../i18n/index"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const router = useRouter()
  const isMobileDevice = useMedia({ maxWidth: 1024 })
  const { locale: activeLocale } = router
  const lang = i18n[activeLocale as Language]

  return (
    <>
      <Head>
        <title>{lang.header.title}</title>

        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content={lang.header.desc} />

        <meta name="keywords" content={lang.header.keywords.join(", ")} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main>
        <Hero></Hero>

        <Section
          id={lang.dao.anchor}
          title={lang.dao.title}
          desc={lang.dao.desc}
        >
          {lang.dao.content.map((item, index) => (
            <p
              key={index}
              className="text-gray-200 leading-relaxed text-left text-xl font-medium mt-6 mb-6"
            >
              {item.desc}
            </p>
          ))}
        </Section>

        <Section className="!pt-0">
          <div className="grid grid-cols-1 gap-4 grid-flow-row auto-rows-max justify-around md:(grid-cols-2 gap-8)">
            <SectionImage
              shadow={false}
              imageSrc="/images/dogecoin-300.png"
              className="bg-auto min-h-sm"
            ></SectionImage>

            <div className="flex flex-row items-center">
              <List
                itemLayout="vertical"
                dataSource={lang.vision.content}
                split={false}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={item.title}
                      description={
                        <p className="text-gray-200 text-left text-xl font-medium">
                          {item.desc}
                        </p>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </div>
        </Section>

        <Section
          id={lang.nft.anchor}
          title={lang.nft.title}
          desc={lang.nft.desc}
        >
          <div className="grid grid-cols-1 gap-4 grid-flow-row auto-rows-max justify-center text-left md:(grid-cols-2 gap-24)">
            <div className="flex flex-col justify-center">
              {lang.nft.content.map((item, index) => (
                <p
                  key={index}
                  className="text-gray-200 leading-relaxed text-left text-xl font-medium mt-6 mb-6"
                >
                  {item.desc}
                </p>
              ))}
            </div>

            <div className="flex justify-center gap-6 items-center pt-4 pb-4 overflow-x-hidden">
              {!isMobileDevice && (
                <FlexList
                  className="hidden-xl hidden-md"
                  imageList={NFTImagesList.slice(0, 2)}
                ></FlexList>
              )}

              <FlexList
                imageList={NFTImagesList.slice(0, isMobileDevice ? 2 : 3)}
              ></FlexList>
              {!isMobileDevice && (
                <FlexList
                  className="hidden-xl hidden-md"
                  imageList={NFTImagesList.slice(1, 3)}
                ></FlexList>
              )}
            </div>
          </div>
        </Section>

        <Section
          className={classNames(
            styles.buy,
            "rounded-lg shadow-none border-none",
            "!mt-30",
            "!mb-30"
          )}
          id={lang.buy.anchor}
        >
          <div className="flex flex-col justify-around items-center overflow-x-auto">
            <div
              className=" text-8xl w-2xl text-center text-white leading-snug tracking-wide mb-8"
              title={lang.buy.title}
            >
              {lang.buy.title}
            </div>

            <ColorButton
              className="!bg-opacity-50 !bg-white !bg-white text-xl shadow-lg :hover(!bg-auto border-purple)"
              onClick={() => message.info(lang.buy.content)}
            >
              {lang.buy.desc}
            </ColorButton>
          </div>
        </Section>

        <Section
          id={lang.roadmap.anchor}
          title={lang.roadmap.title}
          desc={lang.roadmap.desc}
        >
          <Roadmap>
            {lang.roadmap.content.map((item, index) => (
              <Roadmap.Item
                key={index}
                title={item.title}
                desc={item.desc}
              ></Roadmap.Item>
            ))}
          </Roadmap>
        </Section>

        <Section
          id={lang.team.anchor}
          title={lang.team.title}
          desc={lang.team.desc}
          imageSrc="/images/dogedream-team.jpg"
        >
          <div className="flex flex-col justify-center">
            {lang.team.content.map((item, index) => (
              <p
                key={index}
                className="indent text-gray-200 leading-relaxed text-left text-xl font-medium mt-6 mb-6"
              >
                {item.desc}
              </p>
            ))}
          </div>
        </Section>

        <Section
          id={lang.faqs.anchor}
          title={lang.faqs.title}
          desc={lang.faqs.desc}
        >
          <div className="text-gray-200 text-xl">
            <Collapse bordered={false} ghost>
              {lang.faqs.content.map((faq, index) => (
                <Collapse.Panel
                  header={<div className="pt-3px">{faq.q}</div>}
                  className={"mb-3 overflow-hidden rounded-xs"}
                  key={index}
                >
                  {faq.a}
                </Collapse.Panel>
              ))}
            </Collapse>
          </div>
        </Section>

        <Section
          id={lang.history.anchor}
          title={lang.history.title}
          desc={lang.history.desc}
        >
          <Timeline mode={"alternate"} pending="The future...">
            {lang.history.content.map((item, index) => (
              <Timeline.Item key={index} label={item.title}>
                {item.desc}
              </Timeline.Item>
            ))}
          </Timeline>
        </Section>
      </main>

      <BackTop></BackTop>

      <Footer></Footer>
    </>
  )
}

export default Home
