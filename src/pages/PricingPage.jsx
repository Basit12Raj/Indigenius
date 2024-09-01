import React from 'react'
import Shape3 from '../assets/shape3.png'
import Shape4 from '../assets/shape4.png'

function PricingPage() {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$0",
      description: "Essential AI translation basics, at no cost",
      features: [
        "Up to 10 minutes per session",
        "Live translation in 1 of available 15 languages",
        "Real-time transcription and standard captions during meetings",
        "Recording not included",
        "Community forum support"
      ]
    },
    {
      title: "Flex",
      price: "$12.99/hr",
      description: "Flexible AI translation for occasional use",
      features: [
        "Unlimited during the purchased hour",
        "Live translation in 2 of available 15 languages",
        "Real-time transcription and custom captions during meetings",
        "Audio recording with 5 GB storage per session"
      ]
    },
    {
      title: "Cool",
      price: "$89.49/day",
      description: "Comprehensive AI translation for daily use",
      features: [
        "Unlimited during the purchased day Live translation in 3 of available 15 languages Real-time transcription and custom captions during meetings with improved accuracyAudio recording with 5 GB storage per session Full HD audio with 20 GB storage per day",
         "Priority email support"
      ]
    },
    {
      title: "Ultimate",
      price: "$189.49",
      description: "Full-featured AI translation for power users",
      features: [
        "Unlimited access every time Live translation in all selected languages Real-time transcription and custom captions during meetings with improved accuracy Full HD audio with 20 GB storage per day Priority support 24/7"
      ]
    }
  ];

  return (
    <div className='min-h-screen flex justify-center items-center p-4'>
      <div className='w-full max-w-5xl'>
        <div className='text-center'>
          <h1 className='text-4xl font-serif mb-2'>Indigenius Pro Pricing</h1>
          <p className='text-xs md:text-base'>Subscriber Pricing Plans for Indigenius Meeting AI</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 shadow-md'>
          {pricingPlans.map((plan, index) => (
            <div key={index} className='flex flex-col h-full shadow-md rounded-lg overflow-hidden'>
              <div className='text-center pt-4 pb-2 bg-[#fdb87b] text-black'>
                <h2 className='text-lg font-semibold'>{plan.title}</h2>
                <p className='text-xs'>{plan.description}</p>
              </div>
              <div className='flex-grow p-4 flex flex-col'>
                <div className='text-center py-2'>
                  <h3 className='font-serif text-4xl'>{plan.price}</h3>
                </div>
                <div className='flex-grow md:px-3'>
                  <h4 className='text-lg font-medium mb-1'>Features</h4>
                  <ul className='text-xs space-y-0'>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>- {feature}</li>
                    ))}
                  </ul>
                </div>
                <button className='bg-[#f7921d] hover:bg-[#e39d4e] text-white py-2 px-4 md:ml-6  md:w-40 w-56 ml-12  mt-6 rounded'>
                  Get Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <img src={Shape3} alt="" className='absolute md:block top-0 right-0 hidden mt-[200px]' />
      <img src={Shape4} alt="" className='absolute md:block left-0 top-0 hidden mt-[400px]' />


    </div>
  )
}

export default PricingPage