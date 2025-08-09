import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center justify-center text-[#007B8F] mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  const reviews = [
    {
      image: "https://8upload.com/image/689725d52b5be/cus1.jpeg",
      quote:
        "Excellent plumbing service! Quick, professional, and reliable. Highly recommend Qatar Plumbing, Electrical & Maintenance.",
      name: "Ahmed Al-Akib",
      title: "Site Supervisor, Doha Build Co.",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/689725d5361ac/cus2.jpeg",
      quote:
        "Electrical repairs done safely and efficiently. The team was knowledgeable and courteous.",
      name: "Noor Mohammed",
      title: "Spa Owner, Lusail",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/689725d53c558/cus3.jpeg",
      quote:
        "Appliance repair was fast and effective. Our home appliances work perfectly now, thanks to their experts.",
      name: "Fatima Al-Mansoori",
      title: "Architect, Al Wakrah",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/689725d541ffa/cus4.jpeg",
      quote:
        "General maintenance service kept our building in top shape. Professional team and excellent support.",
      name: "Ibrahim",
      title: "Marketing Executive, QEvents",
      rating: 4,
    },
    {
      image: "https://8upload.com/image/689725d54a712/cus5.jpeg",
      quote:
        "Reliable and affordable services for all plumbing and electrical needs. Customer service is outstanding!",
      name: "Hassan Shah",
      title: "Operations Manager, Doha Industrial Group",
      rating: 4.5,
    },
    {
      image: "https://8upload.com/image/689725d551bad/cus6.jpeg",
      quote:
        "Highly skilled technicians who ensure safety and efficiency in all electrical installations.",
      name: "Fatima Al-Kuwari",
      title: "Homeowner, Al Rayyan",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/689725d5581f6/cus7.jpeg",
      quote:
        "Qatar Plumbing, Electrical & Maintenance offers top-notch appliance repair with quick turnaround times.",
      name: "Tari Tanha Avadi",
      title: "Engineer, Falcon Steel",
      rating: 5,
    },
    {
      image: "https://8upload.com/image/689725d55f88c/cus9.jpeg",
      quote:
        "Trustworthy and professional maintenance service provider — our go-to company for all building upkeep needs.",
      name: "Layla Hassan",
      title: "Interior Designer, The Luxe Studio",
      rating: 4.5,
    },
  ];

  const items = reviews.map((review, index) => (
    <div
      key={index}
      className="flex flex-col items-center w-full p-6 space-y-4 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-transform duration-500 transform hover:scale-[1.03] dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={review.image}
        alt={review.name}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#007B8F] shadow-lg transition-transform duration-300 hover:scale-110"
      />
      <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 text-center leading-relaxed">
        “{review.quote}”
      </blockquote>
      <StarRating rating={review.rating} />
      <div className="text-center">
        <p className="font-semibold text-[#007B8F] dark:text-[#00B7C2] text-lg">
          {review.name}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{review.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="py-16 bg-gradient-to-b from-[#E3F6F5] to-[#C9F0EC] dark:bg-gray-900 text-[#004E5E] dark:text-gray-100 font-sans">
      <div className="container px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#007B8F] dark:text-[#00B7C2] mb-4">
          Customer Testimonials
        </h2>
        <p className="text-lg text-[#05575B] dark:text-gray-300 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
          Hear from our satisfied clients across plumbing, electrical, appliance repair, and general maintenance services in Qatar.
        </p>

        {/* Carousel */}
        <div className="max-w-6xl mx-auto">
          <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={4000}
            infinite
            animationDuration={1000}
            disableButtonsControls
            disableDotsControls={false}
            responsive={{
              0: { items: 1 },
              640: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
