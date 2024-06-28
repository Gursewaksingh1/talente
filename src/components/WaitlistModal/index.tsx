"use client";
import React, { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import WaitListDialogBg from "@/assets/svg/WaitListDialogBg.svg";
import { axiosInstance } from "@/lib/axios";
import { SubmitHandler, useForm } from "react-hook-form";
// , Controller
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/validations/loginSchema";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
// import { PhoneInput } from "react-international-phone";
// import * as countriesAndTimezones from "countries-and-timezones";
import { notifyError, notifySuccess } from "@/utils/Notistack/utils";

const MODAL_MAX_HEIGHT = 550;
const MODAL_MAX_WIDTH = 400;

const CustomTextField = styled(TextField)(({}) => ({
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset, &.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
}));

const defaultValues = {
  name: "",
  email: "",
  phone: "",
};

interface FormValues {
  name: string;
  email: string;
  phone?: string | undefined;
}

interface WaitListDialogProps {
  open: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ open, onClose }: WaitListDialogProps) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    // control,
  } = useForm({ defaultValues, resolver: yupResolver(loginSchema), mode: "onChange" });

  // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  // const timezoneInfo = countriesAndTimezones.getTimezone(timezone);
  // const defalutCountryCode = timezoneInfo?.countries?.[0]?.toLocaleLowerCase();

  const onSubmitDetials: SubmitHandler<FormValues> = async (data) => {
    setLoading(true);
    try {
      await axiosInstance
        .post("hubspot/contact", {
          properties: {
            email: data.email,
            firstname: data.name,
            // phone: data.phone,
            phone: `(+1) ${data.phone}`,
          },
        })
        .then(() => {
          setLoading(false);
          onClose();
          reset();
          notifySuccess("Request submitted successfully");
        })
        .catch(() => {
          setLoading(false);
          notifyError("An error occurred");
        });
    } catch (error) {}
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: MODAL_MAX_WIDTH,
            maxHeight: MODAL_MAX_HEIGHT,
            borderRadius: "8px",
            background: `url(${WaitListDialogBg.src})`,
            backgroundColor: "var(--dialog-bg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          },
        }}
      >
        <DialogTitle className="flex justify-between Spartan-SemiBold !w-full !text-[--white-text] pt-5 pb-0">
          <Box className="flex flex-col gap-1 !text-sm md:!text-[16px]">
            Join Our Waitlist
            <span className="Montserrat-Regular md:!text-xs !text-[11px]">
              Please Fill the Form to Join Our Talente Waitlist
            </span>
          </Box>
          <CloseIcon onClick={onClose} className="!cursor-pointer md:!w-7 md:!h-7 !w-6 !h-6" />
        </DialogTitle>
        <form onSubmit={handleSubmit(onSubmitDetials)} className="waitlist-modal">
          <DialogContent className="pt-0">
            <Box className="flex md:!flex-row !flex-col gap-10">
              <Box className="w-full">
                <Box className="flex flex-col gap-6">
                  {/* Name* */}
                  <Box className="!w-full !mt-6">
                    <InputLabel className="!text-[--white-text] Spartan-Thin !gap-1 !text-sm mb-2">
                      Name*
                    </InputLabel>
                    <CustomTextField
                      fullWidth
                      InputProps={{
                        style: {
                          color: "var(--white-text)",
                          fontFamily: "var(--league-spartan-medium)",
                          padding: "5.5px 0",
                          borderRadius: "7px",
                          fontSize: "14px",
                          background: "var(--bg-input)",
                        },
                      }}
                      className="!w-full"
                      type="text"
                      size="small"
                      variant="outlined"
                      {...register("name")}
                      autoFocus
                    />
                    <Typography className="!mt-1 !ml-1 Spartan-Medium !text-sm !text-[--error-message]">
                      {errors.name?.message}
                    </Typography>
                  </Box>
                  {/* Email* */}
                  <Box className="!w-full">
                    <InputLabel className="!text-[--white-text] Spartan-Thin !gap-1 !text-sm mb-2">
                      Email*
                    </InputLabel>
                    <CustomTextField
                      fullWidth
                      InputProps={{
                        style: {
                          color: "var(--white-text)",
                          fontFamily: "var(--league-spartan-medium)",
                          padding: "5.5px 0",
                          borderRadius: "7px",
                          fontSize: "14px",
                          background: "var(--bg-input)",
                        },
                      }}
                      className="Spartan-Medium !w-full"
                      type="text"
                      size="small"
                      variant="outlined"
                      {...register("email")}
                    />
                    <Typography className="!mt-1 !ml-1 Spartan-Medium !text-sm !text-[--error-message]">
                      {errors.email?.message}
                    </Typography>
                  </Box>
                  {/* Phone(optional) */}
                  <Box className="!w-full">
                    <InputLabel className="!text-[--white-text] Spartan-Thin !gap-1 !text-sm mb-2">
                      Phone (Optional)
                    </InputLabel>
                    {/* <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          {...field}
                          style={
                            {
                              "--react-international-phone-border-radius": "0px",
                              "--react-international-phone-border-color": "var(--bg-input)",
                              "--react-international-phone-background-color": "var(--bg-input)",
                              "--react-international-phone-text-color": "var(--white-text)",
                              "--react-international-phone-selected-dropdown-item-background-color":
                                "var(--dialog-bg)",
                              "--react-international-phone-country-selector-background-color-hover":
                                "var(--dialog-bg)",
                            } as React.CSSProperties
                          }
                          inputClassName="flex-1 !border-0 h-[40px]"
                          defaultCountry={defalutCountryCode}
                        />
                      )}
                    /> */}
                    <CustomTextField
                      fullWidth
                      InputProps={{
                        style: {
                          color: "var(--white-text)",
                          fontFamily: "var(--league-spartan-medium)",
                          padding: "5.5px 0",
                          borderRadius: "7px",
                          fontSize: "14px",
                          background: "var(--bg-input)",
                        },
                      }}
                      className="!w-full"
                      type="text"
                      size="small"
                      variant="outlined"
                      {...register("phone")}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </DialogContent>

          <DialogActions className="!p-5">
            <Button
              className="Montserrat-SemiBold !text-[--black-color] !normal-case !rounded-lg !bg-[--button-border] !w-full !mb-5 shadowSubmit"
              type="submit"
              color="primary"
            >
              {loading ? <CircularProgress color="inherit" size={20} /> : "Submit"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default WaitlistModal;
