import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    
    <div className='flex-col pt-6'>
      <div className='text-center items-center pt-6'>
        <h3>About</h3>
      </div>
    </div>
  );
}

export default About;
