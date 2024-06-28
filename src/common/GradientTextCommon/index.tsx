"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface GradientTextCommonProps {
  text: string;
  className?: string;
}

const GradientTextCommon = ({ text, className }: GradientTextCommonProps) => {
  const GradientText = styled(Typography)({
    background: "linear-gradient(to right, var(--black-color), var(--bg-gradient-color))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    maxWidth: "1200px",
  });

  return (
    <>
      <GradientText
        className={`Spartan-SemiBold tracking-wide !normal-case flex text-gradient xl:!text-6xl lg:!text-5xl md:!text-4xl !text-2xl ${className}`}
      >
        {text}
      </GradientText>
    </>
  );
};

export default GradientTextCommon;
