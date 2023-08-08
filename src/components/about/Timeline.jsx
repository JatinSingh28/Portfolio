import React, { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrow from "../../assets/right-arrow.png";
// import "./timeline.js";
gsap.registerPlugin(ScrollTrigger);
import video from "../../assets/gradient-video2.mp4";

export default function Timeline() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const mask = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    // const container = containerRef.current;
    // console.log(slider);
    let ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slides");
      // console.log(slides);
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          // markers: true,
        },
      });
      gsap.to(mask, {
        width: "100%",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top left",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  // const sections = gsap.utils.toArray(".container section");
  // const texts = gsap.utils.toArray(".anim");

  // gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  //   const container = containerRef.current;
  //   const mask = maskRef.current;
  //   const wrapper = wrapperRef.current;
  //   const sections = container.querySelectorAll("section");

  //   const observer = new MutationObserver((mutationsList) => {
  //     // Handle the mutations here
  //     mutationsList.forEach((mutation) => {
  //       if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
  //         // New nodes have been added to the container
  //         console.log("New nodes added:", mutation.addedNodes);
  //       }
  //     });
  //   });

  //   // Start observing the container for changes
  //   observer.observe(container, { childList: true });

  //   // console.log(sections);
  //   let scrollTween = gsap.to(sections, {
  //     xPercent: -100 * (sections.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: container,
  //       pin: true,
  //       scrub: 1,
  //       end: "+=3000",
  //       // snap: 1 / (sections.length - 1),
  //       markers: true,
  //     },
  //   });

  //   // console.log(1 / (sections.length - 1));

  //   //Progress bar animation

  //   gsap.to(mask, {
  //     width: "100%",
  //     scrollTrigger: {
  //       trigger: wrapper,
  //       start: "top left",
  //       scrub: 1,
  //     },
  //   });

  //   // whizz around the sections
  //   sections.forEach((section) => {
  //     // grab the scoped text
  //     let text = section.querySelectorAll(".anim");
  //     console.log(text);
  //     // bump out if there's no items to animate
  //     if (text.length === 0) return;

  //     // do a little stagger
  //     gsap.from(text, {
  //       y: -130,
  //       opacity: 0,
  //       duration: 2,
  //       ease: "elastic",
  //       stagger: 0.1,
  //       scrollTrigger: {
  //         trigger: section,
  //         containerAnimation: scrollTween,
  //         start: "left center",
  //         markers: true,
  //       },
  //     });
  //   });
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div
      className="timeline-wrapper text-white flex-wrap pb-32"
      ref={wrapperRef}
    >
      <div className="timeline-container" ref={containerRef}>
        <div className="slider flex gap-10 pt-10" ref={slider}>
          <div className="flex flex-col">
            <div className="flex flex-col">
              {/* <p className="text-7xl pl-16">Experience</p> */}
              <div className="relative w-full h-max mt-10 ">
                <video className="bg-video absolute " autoPlay loop muted>
                  <source src={video} type="video/mp4" />
                </video>
                <p className="exp-txt text-white text-5xl md:text-7xl flex-grow pb-4 pl-7 md:pl-16">
                  Experience
                </p>
              </div>

              <svg
                className="pt-5 md:pt-16 pb-5 pl-16 "
                viewBox="0 0 900 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                  fill="#D9D9D9"
                />
                <mask
                  id="mask0_0_1"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="900"
                  height="10"
                >
                  <path
                    d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                    fill="#db1818"
                  />
                </mask>
                <g mask="url(#mask0_0_1)">
                  <rect
                    className="mask"
                    y="-49"
                    height="99"
                    fill="purple"
                    ref={mask}
                  />
                </g>
              </svg>
            </div>
            <div className="scroll-timeline flex md:pl-10 md:pt-5">
              <section className="slides">
                <span className="text-2xl md:text-3xl uppercase">
                  Machine Learning Intern{" "}
                </span>
                <div className="flex text-2xl gap-8 mb-4">
                  <p>Stealth Startup</p>
                  <p>Nov 2022 - Jan 2023 </p>
                </div>

                <div className="col md:grid md:grid-cols-2 text-2xl pl-3">
                  <ul className="list-disc text-white">
                    <li>Created a hybrid recommendation system.</li>
                    <li>
                      Created a neural network to predict the user rating to
                      different activities for the content based prediction.
                    </li>
                    <li>
                      Used Neural Collaborative Filtering to find similar user
                      and recommend based on user similarities.
                    </li>
                  </ul>
                  {/* <p>
                    <img
                      src={arrow}
                      className="h-6 inline-block pr-3"
                      alt="arrow"
                    />
                    Created a hybrid recommendation system. <br />
                    <img
                      src={arrow}
                      className="h-6 inline-block pr-3"
                      alt="arrow"
                    />
                    Created a neural network to predict the user rating to
                    different activities for the content based prediction.{" "}
                    <br />
                    <img
                      src={arrow}
                      className="h-6 inline-block pr-3"
                      alt="arrow"
                    />
                    Used Neural Collaborative Filtering to find similar user and
                    recommend based on user similarities.
                  </p> */}
                  <ul className="list-disc hidden md:block text-white">
                    <li>Created a hybrid recommendation system.</li>
                    <li>
                      Created a neural network to predict the user rating to
                      different activities for the content based prediction.
                    </li>
                    <li>
                      Used Neural Collaborative Filtering to find similar user
                      and recommend based on user similarities.
                    </li>
                  </ul>
                </div>
              </section>
              <section className="slides">
                <span className="anim text-3xl uppercase">Technical Lead</span>
                <div className="anim flex text-2xl gap-8 mb-4">
                  <p>CodeChef</p>
                  <p>June 2023 - Present</p>
                </div>

                <div className="col anim ">
                  <div className="col md:grid md:grid-cols-2 text-2xl pl-3">
                    <ul className="list-disc text-white">
                      <li>Created a hybrid recommendation system.</li>
                      <li>
                        Created a neural network to predict the user rating to
                        different activities for the content based prediction.
                      </li>
                      <li>
                        Used Neural Collaborative Filtering to find similar user
                        and recommend based on user similarities.
                      </li>
                    </ul>
                    <ul className="list-disc hidden md:block text-white">
                      <li>Created a hybrid recommendation system.</li>
                      <li>
                        Created a neural network to predict the user rating to
                        different activities for the content based prediction.
                      </li>
                      <li>
                        Used Neural Collaborative Filtering to find similar user
                        and recommend based on user similarities.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="slides mr-16">
                <span className="anim text-3xl uppercase">Data Science</span>
                <div className="anim flex text-2xl gap-8 mb-4">
                  <p>Codesoft</p>
                  <p>July 2023 - August 2023</p>
                </div>

                <div className="col anim ">
                <div className="col md:grid md:grid-cols-2 text-2xl pl-3">
                    <ul className="list-disc text-white">
                      <li>Created a hybrid recommendation system.</li>
                      <li>
                        Created a neural network to predict the user rating to
                        different activities for the content based prediction.
                      </li>
                      <li>
                        Used Neural Collaborative Filtering to find similar user
                        and recommend based on user similarities.
                      </li>
                    </ul>
                    <ul className="list-disc hidden md:block text-white">
                      <li>Created a hybrid recommendation system.</li>
                      <li>
                        Created a neural network to predict the user rating to
                        different activities for the content based prediction.
                      </li>
                      <li>
                        Used Neural Collaborative Filtering to find similar user
                        and recommend based on user similarities.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              `
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
