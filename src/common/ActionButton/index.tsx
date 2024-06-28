"use client";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import WaitlistModal from "@/components/WaitlistModal";

interface ActionButtonProps {
  text: string;
  className?: string;
  routeTo?: string;
  openDialog?: boolean;
}

const GradientButton = styled(Button)({
  border: "1px solid var(--button-border)",
  textTransform: "none",
  color: "var(--white-text)",
  borderRadius: "9999px",
  padding: "0.5rem 2.5rem",
  background:
    "linear-gradient(270deg, var(--button-color), var(--black-color), var(--button-color))",
  backgroundSize: "600% 600%",
  animation: "gradient-flow 8s ease infinite, glow 1.5s infinite alternate",
  boxShadow: "0px 0px 20px 5px rgba(236, 39, 182, 0.5)",
  transition: "box-shadow 0.3s ease",
  "@keyframes glow": {
    "0%": {
      boxShadow: "0px 0px 20px 5px rgba(236, 39, 182, 0.5)",
    },
    "100%": {
      boxShadow: "0px 0px 30px 10px rgba(236, 39, 182, 1)",
    },
  },
});

const ActionButton = ({ text, className, routeTo, openDialog }: ActionButtonProps) => {
  const router = useRouter();
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClick = () => {
    if (routeTo) {
      router.push(routeTo);
    } else if (openDialog) {
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <GradientButton
        className={`!w-fit ${className ? className : "Spartan-SemiBold"}`}
        onClick={handleClick}
      >
        {text}
      </GradientButton>
      {openDialog && <WaitlistModal open={dialogOpen} onClose={handleCloseDialog} />}
    </>
  );
};

export default ActionButton;
