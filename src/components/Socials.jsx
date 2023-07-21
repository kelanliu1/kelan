import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { socials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SocialCard = ({ index, title, icon, link }) => (
    <Tilt className='xs:w-[150px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full p-[5px] rounded-[100px] shadow-card'
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div 
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className='bg-primary rounded-[80px] py-5 px-12 min-h-[50px] flex justify-evenly items-center flex-col'
          >
            <img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
            />
          </div>
        </a>
      </motion.div>
    </Tilt>
  );
  
const Socials = () => {
  return (
    <>
      <div className='mt-20 flex flex-wrap gap-10'>
        {socials.map((service, index) => (
          <SocialCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Socials, "socials");