"use client";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ActionButton from "@/common/ActionButton";

const GradientText = styled(Typography)({
  background: "linear-gradient(45deg, var(--button-shadow), var(--white-text))",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  maxWidth: "1200px",
  paddingLeft: "20px",
  paddingRight: "20px",
});

const GradientTextButton = styled(Button)(({}) => ({
  textTransform: "none",
  margin: "0 auto",
  display: "flex",
  borderRadius: "9999px",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  border: "2px solid linear-gradient(45deg, #004AAD, #CB6CE6)",
  padding: "0.75rem 2rem",
  "&::before": {
    content: "' '",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "9999px",
    padding: "2px",
    background: "linear-gradient(45deg, #004AAD, #CB6CE6)",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "destination-out",
    maskComposite: "exclude",
  },
}));

const InfoSection = () => {
  return (
    <Box className="flex flex-col lg:!gap-10 !gap-8 !mx-auto !text-center items-center">
      <GradientTextButton className="Montserrat-Medium tracking-wide !normal-case flex text-gradient xl:!text-[20px] !text-sm bg-[linear-gradient(to_right,theme(colors.pink.400),theme(colors.pink.100),theme(colors.white),theme(colors.pink.400),theme(colors.white),theme(colors.pink.100),theme(colors.pink.400))] bg-[length:200%_auto] animate-gradient bg-clip-text">
        AI-Powered Career Support
      </GradientTextButton>
      <GradientText className="Spartan-SemiBold xl:!text-[55px] xl:!leading-[4.3rem] lg:!text-5xl  lg:!leading-[3.7rem] sm:!text-4xl md:!leading-[3.2rem] !text-[25px] !text-center overflow-wrap break-words">
        <span className="text-gradient1"> Fast, confidential, and personalized support</span>
        <span className="text-gradient2"> whenever you need it, helping you find better </span>
        <span className="text-gradient3">career opportunities.</span>
      </GradientText>
      <Typography className="Montserrat-Regular !mx-auto !text-[--white-text] xl:!text-lg !text-[13px]">
        Talente automates your career journey <br />
        <span className="!text-[--button-border]">so you can focus on what really matters.</span>
      </Typography>
      <ActionButton
        text="Sign Up - It's 100% free"
        className="Montserrat-Medium !mb-5 xl:!text-[18px] !text-sm xl:!py-4 lg:!py-2 !px-8"
        openDialog
      />
    </Box>
  );
};

export default InfoSection;
