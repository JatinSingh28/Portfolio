import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./timeline.js";
gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const wrapperRef = useRef(null);
  // const sections = gsap.utils.toArray(".container section");
  // const texts = gsap.utils.toArray(".anim");

  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const container = containerRef.current;
    const mask = maskRef.current;
    const wrapper = wrapperRef.current;
    const sections = container.querySelectorAll("section");

    const observer = new MutationObserver((mutationsList) => {
      // Handle the mutations here
      mutationsList.forEach((mutation) => {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          // New nodes have been added to the container
          console.log("New nodes added:", mutation.addedNodes);
        }
      });
    });

    // Start observing the container for changes
    observer.observe(container, { childList: true });

    // console.log(sections);
    let scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: "+=3000",
        // snap: 1 / (sections.length - 1),
        markers: true,
      },
    });

    // console.log(1 / (sections.length - 1));

    //Progress bar animation

    gsap.to(mask, {
      width: "100%",
      scrollTrigger: {
        trigger: wrapper,
        start: "top left",
        scrub: 1,
      },
    });

    // whizz around the sections
    sections.forEach((section) => {
      // grab the scoped text
      let text = section.querySelectorAll(".anim");
      console.log(text);
      // bump out if there's no items to animate
      if (text.length === 0) return;

      // do a little stagger
      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left center",
          markers: true,
        },
      });
    });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="timeline">
      <div className="wrapper text-white" ref={wrapperRef}>
        <div className="container scrollx " ref={containerRef}>
          <svg
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
              ref={maskRef}
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_0_1)">
              <rect className="mask" y="-49" height="99" fill="white" />
            </g>
          </svg>
          <section className="sec1 pin">
            <span>Advanced</span>
            <h1>Signify Elegance</h1>

            <div className="col">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          <section className="sec2 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>

            <div className="col anim">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
          <section className="sec3 pin">
            <span className="anim">Advanced</span>
            <h1 className="anim">Signify Elegance</h1>

            <div className="col anim">
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit
                sed massa turpis in. Sit praesent arcu leo lectus pellentesque.
                Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis
                risus amet urna. Urna egestas lorem.
              </p>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-blue-300"></section>
    </div>
  );
}
