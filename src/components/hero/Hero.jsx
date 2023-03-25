import css from "./Hero.module.css";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import HeroImg from "../../assets/hero.png";
import {motion} from 'framer-motion';
function Hero() {
  const transition = {duration: 3 , type: 'spring'}
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin Protection Cream</span>

        <div className={css.text2}>
          <span>Trendy Collections</span>
          <span>
          {" "}
            Seedily say has suitable disposal and boy.
            Exercise joy man children
            rejoiced.
          </span>
        </div>
      </div>
      {/* middle side hero image */}
      <div className={css.wrapper}>
        {/* blue circlw */}
        <motion.div 
        initial={{bottom: '2rem'}}
        whileInView={{bottom: '0rem'}}
        transition={transition}
  
        className={css.blueCircle}
        ></motion.div>
        <motion.img src={HeroImg} 
        initial={{bottom: '-2rem'}}
        whileInView={{bottom: '0rem'}}
        transition={transition}
        alt="hero" width={600} 
        />
        <motion.div
        transition={transition}
        initial={{right: '4%'}}
        whileInView={{right: '2%'}} className={css.cart2}>
          <RiShoppingBagFill />
          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      {/* right sie */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>

        <div className={css.customers}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
