import GradientTextCommon from "@/common/GradientTextCommon";
import GradientTextReverse from "@/common/GradientTextReverse";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";
import CareerSupportImage from "@/assets/svg/CustomerSupportSection.svg";
import CommonTextArea from "@/common/CommonTextArea";
import CustomerSupporttImage from "@/assets/images/CustomerSupportImage.png";
import Arrow from "@/assets/svg/Arrow.svg";

const CareerSupportSection = () => {
  return (
    <>
      <Image
        draggable="false"
        src={CareerSupportImage}
        alt="Blue Circle"
        className="absolute xl:!w-[400px] lg:!w-[200px] !w-[150px]"
      />
      <Box className="flex flex-col justify-center items-center !mt-20">
        <GradientTextReverse text="Feeling stuck in the job market?" className="xl:!mb-1 z-20" />
        <GradientTextCommon text="We’re here to change that!" className="md:!mt-6 !mt-1" />
        <Box className="flex md:!flex-row !flex-col !mt-6 !px-8 md:!gap-0 !gap-4">
          <Image
            draggable="false"
            src={CustomerSupporttImage}
            alt="Customer Support Image"
            className="xl:!w-[620px] xl:!h-[620px] lg:!w-[420px] lg:!h-[420px] md:!w-[300px] md:!h-[300px] !w-[200px] !h-[200px] z-20 !mx-auto "
          />
          <Image
            draggable="false"
            src={Arrow}
            alt="Blue Circle"
            className="absolute xl:!w-[100px] lg:!w-[70px] !w-[50px] xl:!right-[17.75rem] md:!right-[8rem] !right-[3rem] xl:!mt-8 !-mt-2"
          />
          <CommonTextArea
            heading="Customized career support"
            content="Get access to tailored resume optimization, interview coaching, career counseling, and professional development. Use our advanced tools and resources to stay ahead in your career."
          />
        </Box>
      </Box>
    </>
  );
};

export default CareerSupportSection;
