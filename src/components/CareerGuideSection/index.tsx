import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CommonTextArea from "@/common/CommonTextArea";
import CareerGuideImage from "@/assets/images/CareerGuideImage.png";
import GradientTextCommon from "@/common/GradientTextCommon";
import DottedArrow from "@/assets/svg/DottedArrow.svg";

const CareerGuideSection = () => {
  return (
    <>
      <Box className="flex flex-col justify-center lg:!mt-20 md:!mt-12 !mt-8 xl:!px-0 !px-8">
        <GradientTextCommon text="We’re your ultimate career guide" className="!mb-1 !mx-auto" />
        <Image
          draggable="false"
          src={DottedArrow}
          alt="Customer Support Image"
          className="lg:!w-[100px] !w-[70px] xl:!ml-[16rem] md:!ml-[5rem] !mt-1"
        />
        <Box className="flex md:!flex-row !flex-col !w-full !justify-center lg:!gap-20 md:!gap-10 !gap-6 md:!px-8">
          <CommonTextArea
            heading="We help you win at work"
            content="As a member of the Talente community you get guidance on complex work-related issues, insights into marketable skills, the latest industry trend & updated, personalized guidance to maximize employer-sponsored benefited like employee assistance programs and 401Ks"
            className="xl:!text-3xl lg:!text-xl !text-lg"
          />
          <Image
            draggable="false"
            src={CareerGuideImage}
            alt="Customer Support Image"
            className="xl:!w-[500px] xl:!h-[550px] lg:!w-[370px] lg:!h-[370px] md:!w-[290px] md:!h-[290px] !mx-auto !w-[220px] !h-[240px]"
          />
        </Box>
      </Box>
    </>
  );
};

export default CareerGuideSection;
