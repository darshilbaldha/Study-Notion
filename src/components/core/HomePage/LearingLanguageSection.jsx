import React from 'react'
import HighLightText from './HighLightText'
import Compare_with_others from "../../../assets/Images/Compare_with_others.png"
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from './CTAButton'

const LearingLanguageSection = () => {
  return (
    <div className='mt-[150px] lg:pb-20 pb-14 flex flex-col items-center justify-center font-inter'>
        <div className='font-inter font-semibold text-4xl text-center'>
        Your swiss knife for 
        <HighLightText text={"learning any language"}/>
        </div>
        <div className='text-base w-[90%] lg:text-center text-justify lg:w-[65%] mt-3 font-inter'>
        Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className='flex flex-col lg:flex-row mt-8 lg:mt-2'>
            <img src={Know_your_progress} alt="" className='object-contain lg:-mr-32'/>
            <img src={Compare_with_others} alt="" className='object-contain'/>
            <img src={Plan_your_lessons} alt=""className='object-contain lg:-ml-36'/>
        </div>
      
        <div className='w-fit'>
            <CTAButton active={true} linkto={"/signup"}>
                <div>
                    Learn More
                </div>
            </CTAButton>
        </div>
    </div>
  )
}

export default LearingLanguageSection
