import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';
import ParallaxSection from '../reusable/Parallax';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="Contact Us | Curtains Furniture" />
             <ParallaxSection
        imagePath="https://8upload.com/image/6897ee8ecced7/e3__3_.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;