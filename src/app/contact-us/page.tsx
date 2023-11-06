import { Metadata } from "next";
import Image from "next/image";


export const metadata: Metadata = {
  title: 'Contact Us',
};

const Contact = () => {
  return (

    <div className='flex-col pt-6'>
      <div className='text-center items-center pt-6'>
        <h3>Contact Us!</h3>
        <Image
          className="w-full"
          src="/under-const.jpg"
          height={600}
          width={400}
          alt="Under construction"
        />
      </div>
    </div>
  );
}

export default Contact;
