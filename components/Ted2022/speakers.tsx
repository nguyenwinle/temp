/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { Page } from "../../lib/types";
import Footer from "../Footer";
import { mq } from "../../lib/breakpoints";
import styles from './css/speakers.module.css';
import useOutsideClick from '../../hooks/useOutsideClick'

import Header from "./Header";
import { Navbar } from "./navbar";

const speakers = [
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    'name': 'Full Name',
    'profession': 'Profession Name',
    'image': 'https://via.placeholder.com/300',
    'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
]

const ContentPage: React.FC = () => {
  // const content = usePartnerContext();
  // const page = content.page.fields.blocks;

  // const blocks = page?.map((block) => {
  //   return (
  //     <div
  //       key={block.fields.uuid}
  //       className={`${block.fields.uuid
  //         .replace(/\s+/g, "-")
  //         .replace("#", "hashtag")}`}
  //       css={css`
  //         width: 100vw;
  //         overflow-x: hidden;
  //         background-color: ${block.fields.backgroundColor};
  //         color: ${block.fields.fontColor};
  //         a {
  //           color: ${block.fields.linkColor};
  //         }

  //         p {
  //           margin-bottom: 1rem;
  //         }

  //         &.tw21-partners-header {
  //           div {
  //             padding: 2rem;
  //           }

  //           p {
  //             font-size: 1.5rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             margin: 0;
  //           }

  //           h6 {
  //             font-size: 3rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             padding: 0;
  //             margin: 0;
  //           }

  //         }

  //         &.tw21-partners-intro {
  //           background-color: white;

  //           div {
  //             padding: 2rem;
  //           }

  //           p {
  //             font-size: 1.5rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             margin: 0;
  //           }

  //           h1 {
  //             font-size: 3rem;
  //             font-family: "HelveticaNeueW01-75Bold", sans-serif;
  //             padding: 0;
  //             margin: 0 0 2rem 0;
  //           }
  //         }
  //       `}
  //     >
  //       <div
  //         css={css`
  //           padding: 4rem 2rem;
  //           max-width: 48rem;
  //           margin: 0 auto;
  //           text-align: center;

  //           .tw21-home-intro {
  //             padding: 2.5rem 1rem;
  //           }

  //           hr {
  //             margin: 2rem 0;
  //             border: none;
  //             height: 1px;
  //             background-color: ${theme.gray};
  //             opacity: 0.3;
  //             width: 100%;
  //           }

  //           ${mq.lg} {
  //             padding: 8rem 0rem;

  //             .tw21-home-intro & {
  //               padding: 2.5rem;
  //             }
  //           }
  //         `}
  //       >
  //         <RichText document={block.fields.value} />
  //       </div>
  //     </div>
  //   );
  // });

  // const title = page?.metaTitle ? page?.metaTitle :'';
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState(null);
  const [active, setActive] = useState(false)
  const insideRef = React.useRef();
  const [classes, setClasses] = useState("")

  const colors = ['#CAE31C', '#555555', '#000', '#CAE31C', '#555555', '#000', '#CAE31C', '#555555', '#000', '#CAE31C', '#555555', '#000', '#CAE31C', '#555555', '#000'];

  const handleShowDescription = (id) => {
    visible ? document.body.classList.add("speakers-active") : document.body.classList.remove("speakers-active");
    setActive(!active)
    visible ? setId(id) : setId(null);
    setVisible(!visible);

    const element = document.getElementById(`active${id}`)

    window.scrollTo({
      top: element.offsetTop + 450,
      behavior: 'smooth'
    });

    const speakersWidth = document.getElementById("speakers").getBoundingClientRect().width;
    // console.log(speakersWidth)
    const el = document.getElementById(`image-${id}`).offsetLeft;
    console.log(el)

    // console.log(el.getBoundingClientRect())
    // const elLeft = el?.getBoundingClientRect().left
    // const elRight = el?.getBoundingClientRect().right
    // const elWidth = el?.getBoundingClientRect().width
    // console.log(elRight - elWidth)
    // console.log(speakersWidth)


    // console.log(speakersWidth)


    // if (elLeft < 450) {
    //   setClasses("no-left")
    // }

    // if (elLeft > 450 && elLeft < 800) {
    //   setClasses("left-sm")
    // }
    // if (elLeft > 800 && elLeft < 1200) {
    //   setClasses("left-md")
    // }
    // if (elLeft > 1200) {
    //   setClasses("left-lg")
    // }

    //   elementt.style.position = "relative";
    //   elementt.style.left = "-" + (elementLeft - 600).toString() + "px"
  }

  const handleClose = () => {
    document.body.classList.remove('speakers-active');
    setActive(false)
    setVisible(false);
    setId(null)
  }

  const handleOutsideClick = () => {
    document.body.classList.remove('speakers-active');
    setActive(!active)
    visible ? setId(id) : setId(null);
    setVisible(!visible);
  }

  useOutsideClick(insideRef, handleOutsideClick)

  const renderSpeakers = () => (
    speakers.map((speaker, index) => {
      const splitName = speaker.name.split(" ");

      return (
        <>
          <div id={`active${index}`} className={`speaker-relative ${id === index ? classes : ""}`}>
            <div className={`speaker-container ${id === index ? "active-speaker" : ""}`}>
              <div id={`speaker-container-${index}`} className="speakers" key={index} onClick={() => handleShowDescription(index)}>
                <div className={styles.container}>
                  <img id={`image-${index}`} className={styles.speakersImage} src={speaker.image} alt={speaker.name} />
                  <div css={
                    css`
                background: ${colors[index]}
                `
                  }
                    className={styles.speaker}>
                    <div className={styles.speakerName}>
                      <h4 className={styles.firstName}>{splitName[0]}</h4>
                      <h4 className={styles.lastName}>{splitName[1]}</h4>
                    </div>
                    <h5 className={styles.profession}>{speaker.profession}</h5>
                  </div>
                </div>
              </div>
              {
                id === index &&
                <div className="overlay" onClick={() => handleShowDescription(index)}>
                  <div className={styles.information}>
                    <span className={styles.closeSpeaker}>×</span>
                    <p className={styles.description}>{speaker.description}</p>
                  </div>
                </div>
              }
            </div>
          </div>
        </>
      )
    })
  )

  return (
    <>
      {/* <Head>
        <meta property="og:title" content={`${page?.metaTitle}`} />
        <meta property="title" content={`${page?.metaTitle}`} />
        <title>{title}</title>
        <meta property="og:description" content={`${page?.metaDescription}`} />
        <meta property="description" content={`${page?.metaDescription}`} />
        <meta property="og:url" content={`${page?.metaUrl}`} />
        <meta property="og:image" content={`${page?.metaImageUrl}`} />

        <meta name="keywords" content={`${page?.metaTags}`} />
        <meta name="keywords" content={`${page?.metaTags}`} />
      </Head>
      <Navbar selected="speakers"/>
      {blocks}
      <Footer /> */}
      <Navbar selected="speakers" />
      <Header />
      <div
        css={css`
          text-align: center;
          max-width: 1200px;
          margin: auto;
          padding-top: 4rem;
        `}
      >
        <h1
          css={css`
          font-size: 3rem;
        `}
        >Speakers</h1>
        <p
          css={css`
          font-size: 1.25rem;
        `}
        >And learn more about the TED2022 Fellows making strides in a range of fields.</p>
        <div
          css={css`
          text-align: center;
          padding: 6rem 0;
        `}
        >
          <div ref={insideRef} id="speakers" className={styles.speakersFlex}>
            {renderSpeakers()}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContentPage;
