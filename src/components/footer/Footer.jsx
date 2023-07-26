import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer h-max text-white flex gap-80 justify-center pb-16">
      <div className="flex flex-col text-xl leading-10 mt-16">
        <p className="foot-heading text-4xl mb-5">CONNECT</p>
        <a
          href="https://www.linkedin.com/in/jatinsingh28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/JatinSingh28"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://drive.google.com/file/d/1lkPzVzonaLlzcMb9EwhNIorVJkhKyMKz/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>
      <div className="flex flex-col text-xl leading-10 mt-16">
        <p className="foot-heading text-4xl mb-5">ELSEWHERE</p>
        <a
          href="https://codeforces.com/profile/jatin_singh28"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeforces
        </a>
        <a
          href="https://www.codechef.com/users/jatin_singh"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeChef
        </a>
        <a
          href="https://leetcode.com/Demoralizer_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leetcode
        </a>
        <a
          href="https://www.instagram.com/jatin_singh.28/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </div>
      <div className="flex flex-col text-xl leading-10 mt-16">
        <p className="foot-heading text-4xl mb-5">CONTACT</p>
        <a
          href="mailto:sagoisinghjatin9951@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://drive.google.com/file/d/1lkPzVzonaLlzcMb9EwhNIorVJkhKyMKz/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
