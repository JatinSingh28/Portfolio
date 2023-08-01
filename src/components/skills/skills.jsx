import React from "react";
import { motion } from "framer-motion";
import data from "./skillsData";
import arr from "./count";

export default function Skills() {
  return (
    <div className="bg-black text-white ">
      {/* {arr.map((item) => {
        <div
          className={`w-[${item.level}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
        ></div>;
      })} */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
      >
        <div className="flex gap-5 px-9">
          <div className="w-full lgl:w-1/2">
            <div className="py-12 font-titleFont flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Web Development
              </h2>
            </div>
            <div className="w-full flex flex-col gap-6">
              {/* {data.map((item, index) => (
                <div key={index} className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">{item.skill}</p>
                  <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      //   w-[${item.level}%]
                      //   className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      className={`w-[${item.level}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                    >
                      <span className="absolute -top-7 right-0">
                        {item.level}%
                      </span>
                    </motion.span>
                  </span>
                </div>
              ))} */}
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">JavaScript</p>
                <span className="w-full h-2 bg-opacity-100 rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={"w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"}
                  >
                    <span className="absolute -top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">React</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={"w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"}
                  >
                    <span className="absolute -top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">Tailwind CSS</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={"w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"}
                  >
                    <span className="absolute -top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">NodeJS</p>
                <span className="w-full h-2 bg-opacity-100 rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">80%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">ExpressJS</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">Rest API</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={"w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"}
                  >
                    <span className="absolute -top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">MongoDB</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lgl:w-1/2">
            <div className="py-12 font-titleFont flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Machine Learning
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {/* {data.map((item, index) => (
                <div key={index} className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">{item.skill}</p>
                  <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                    <motion.span
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      //   w-[${item.level}%]
                      //   className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                      className={`w-[${item.level}%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                    >
                      <span className="absolute -top-7 right-0">
                        {item.level}%
                      </span>
                    </motion.span>
                  </span>
                </div>
              ))} */}
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">
                  Data Preprocessing
                </p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">100%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">Deep Learning</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">85%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">Computer Vision</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">95%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">NLP</p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">65%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">
                  Exploratory Data Analyis
                </p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">100%</span>
                  </motion.span>
                </span>
              </div>
              <div className="overflow-x-hidden">
                <p className="text-sm uppercase font-medium">
                  Data Visualization
                </p>
                <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute -top-7 right-0">90%</span>
                  </motion.span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
