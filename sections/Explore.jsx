'use client';

import styles from '../styles';
import { staggerContainer} from '../utils/motion';
import { ExploreCard, TitleText, TypingText} from '../components';
import { exploreWorlds } from '../constants'; 
import { motion } from 'framer-motion'

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText 
        title="| The World" 
        textStyles="text-center" 
      />
      <TitleText 
        title={
        <>
          Choose the world you want
          <br className="md:block hidden" />to explore
        </>} 
        textStyles="text-center"
      />
      <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70px]">
          
      </div>
    </motion.div>
  </section>
);

export default Explore;
