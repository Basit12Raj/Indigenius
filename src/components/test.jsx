import React from 'react'

function PricingPage() {
  return (
    <>
    <div className='min-h-screen flex justify-center items-center'>
        <div className='max-w-full'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold mb-2'>Indigenius Pro Pricing</h1>
            <p>Subscriber Pricing Plans for Indigenius Meeting AI</p>
        </div>
        <div className='grid md:grid-cols-4 space-x-3 mt-8'>
            <div className='col-span-1 h-[420px] w-[232px] shadow-md  rounded'>
                <div className='text-center pt-2 rounded-xl -mt-2 text-black space-y-2 h-20 w-full bg-[#fdb87b]'>
                <h1 className='text-lg font-semibold'>Starter</h1>
                <p className='text-xs'>Assential AI translation basics, at no cost</p>
                </div>
                <div className='py-6 px-3 text-center'>
                    <h1 className='font-serif text-5xl'>$0</h1>
                </div>
                <div>
                    <h1 className='text-lg font-medium ml-2'>Features</h1>
                    <p className='text-sm ml-2'>-Up to 10 minutes per session</p>
                    <p className='text-sm ml-2'>-Live translation in 1 of available 15 languages</p>
                    <p className='text-sm ml-2'>-Real-time transcription and standard captions during meetings</p>
                    <p className='text-sm ml-2'>-Recording not included</p>
                    <p className='text-sm ml-2'>-Community forum support</p>
                </div>
                <button className='bg-[#f7921d] hover:bg-[#e39d4e] text-white py-2 px-4 w-40 mt-4 rounded mx-10'>Get Plan</button>
            </div>
            <div className='col-span-1 h-[420px] w-[232px] shadow-md  rounded'>
                <div className='text-center pt-2 rounded-xl -mt-2 text-black space-y-2 h-20 w-full bg-[#fdb87b]'>
                <h1 className='text-lg font-medium'>Flex</h1>
                <p className='text-xs'>Assential AI translation basics,at no cost</p>
                </div>
                <div className='py-6 px-3 text-center'>
                    <h1 className='font-medium text-4xl'>$12.99/hr</h1>
                </div>
                <div>
                    <h1 className='text-xl font-semibold ml-2'>Features</h1>
                    <p className='text-sm ml-2'>-Up to 10 minutes per session</p>
                    <p className='text-sm ml-2'>-Live translation in 1 of available 15 languages</p>
                    <p className='text-sm ml-2'>-Real-time transcription and standard captions during meetings</p>
                    <p className='text-sm ml-2'>-Recording not included</p>
                    <p className='text-sm ml-2'>-Community forum support</p>
                </div>
                <button className='bg-[#f7921d] hover:bg-[#e39d4e] text-white py-2 px-4 w-40 mt-4 rounded mx-10'>Get Plan</button>
            </div>
            <div className='col-span-1 h-[420px] w-[232px] shadow-md  rounded'>
                <div className='text-center pt-2 rounded-xl -mt-2 text-black space-y-2 h-20 w-full bg-[#fdb87b]'>
                <h1 className='text-lg font-semibold'>Cool</h1>
                <p className='text-xs'>Assential AI translation basics, at no cost</p>
                </div>
                <div className='py-6 px-3 text-center'>
                    <h1 className='font-medium text-4xl'>$89.49/day</h1>
                </div>
                <div>
                    <h1 className='text-xl font-semibold ml-2'>Features</h1>
                    <p className='text-sm ml-2'>-Up to 10 minutes per session</p>
                    <p className='text-sm ml-2'>-Live translation in 1 of available 15 languages</p>
                    <p className='text-sm ml-2'>-Real-time transcription and standard captions during meetings</p>
                    <p className='text-sm ml-2'>-Recording not included</p>
                    <p className='text-sm ml-2'>-Community forum support</p>
                </div>
                <button className='bg-[#f7921d] hover:bg-[#e39d4e] text-white py-2 px-4 w-40 mt-4 rounded mx-10'>Get Plan</button>
            </div>
            <div className='col-span-1 h-[420px] w-[232px] shadow-md  rounded'>
                <div className='text-center pt-2 rounded-xl -mt-2 text-black space-y-2 h-20 w-full bg-[#fdb87b]'>
                <h1 className='text-lg font-semibold'>Ultimate</h1>
                <p className='text-xs'>Assential AI translation basics, at no cost</p>
                </div>
                <div className='py-6 px-3 text-center'>
                    <h1 className='font-medium text-4xl'>$189.49</h1>
                </div>
                <div>
                    <h1 className='text-xl font-semibold ml-2'>Features</h1>
                    <p className='text-sm ml-2'>-Up to 10 minutes per session</p>
                    <p className='text-sm ml-2'>-Live translation in 1 of available 15 languages</p>
                    <p className='text-sm ml-2'>-Real-time transcription and standard captions during meetings</p>
                    <p className='text-sm ml-2'>-Recording not included</p>
                    <p className='text-sm ml-2'>-Community forum support</p>
                </div>
                <button className='bg-[#f7921d] hover:bg-[#e39d4e] text-white py-2 px-4 w-40 mt-4 rounded mx-10'>Get Plan</button>
            </div>
            
        </div>
        </div>

    </div>
    </>
  )
}

export default PricingPage