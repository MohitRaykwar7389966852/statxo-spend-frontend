/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../style.css"
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from '@mui/material/CircularProgress';

function Cover() {

  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("spendUserInfo")){
      navigate("/dashboard");
    }
  },[]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [email,setEmail] = useState("");
  const [pass,setPass] = useState("");
  const [eemail,setEemail] = useState(false);
  const [epass,setEpass] = useState(false);
  const [ememail,setEmemail] = useState("");
  const [empass,setEmpass] = useState("");

  const [cotp,setCotp] = useState("");
  const [id,setId] = useState("");

  const [openLoad, setOpenLoad] = useState(false);
  const handleCloseLoad = () => {
    setOpenLoad(false);
  };
  const handleOpenLoad = () => {
    setOpenLoad(true);
  };


  const handleReset = () => {
    if(email === ""){
      setEemail(true);
      setEmemail("Email is required");
    }
    else if(!/^[a-zA-Z0-9.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email)){
      setEemail(true);
      setEmemail("Please enter correct email format");  
    }
    else{
      setEemail(false);
        setEmemail("");
    }
    if(pass === ""){
      setEpass(true);
      setEmpass("Password is required");
    }
    else
      {
        setEpass(false);
        setEmpass("");
      }

      if(email!=="" && pass!==""){
        handleOpenLoad();
        axios
            .get(
              "http://statxo-backend.onrender.com/forget-password?"+"email="+email+"&pass="+pass,
              { headers: { "Content-Type": "application/json" } }
            )
            .then((res) => {
              handleCloseLoad();
              setEemail(false);
              setCotp(res.data.result.otp);
              setId(res.data.result.id);
              setOtp("");
              handleOpen();
            })
            .catch((error) => {
              handleCloseLoad();
              console.log(error.message);
              setEemail(true);
              toast.error("Password Reset Failed", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-error",
              });
            });
      }
  };

  const [otp,setOtp] = useState("");
  const [otpe,setOtpe] = useState(false);
  const [otpem,setOtpem] = useState("");

  const handleVerify = () => {
    if(otp === ""){
      setOtpe(true);
      setOtpem("OTP Is Required");
    }
    else{
      setOtpe(false);
      setOtpem("");
      if(/^[0-9\b]+$/.test(otp) && otp.length === 6){
        if(otp == cotp){
          console.log("OTP matched");
          handleClose();
          handleOpenLoad();
          axios
            .put(
              "https://statxo-backend.onrender.com/reset-password?"+"id="+id+"&pass="+pass,
              { headers: { "Content-Type": "application/json" } }
            )
            .then((res) => {
              handleCloseLoad();
              console.log(res.data.result);
              setEmail("");
              setPass("");
              toast.success("Password Reset Successfull", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-success",
              });
            })
            .catch((error) => {
              handleCloseLoad();
              console.log(error.message);
              toast.error("Password Reset Failed", {
                position: toast.POSITION.TOP_CENTER,
                className: "toast-error",
              });
            });
        }
        else{
          setOtpe(true);
          setOtpem("Incorrect OTP");
        }
      }
      else{
        setOtpe(true);
        setOtpem("Incorrect OTP");
      }
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius:"15px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <CoverLayout coverHeight="50vh" image={bgImage}>
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box style={{marginLeft:"120px",marginBottom:"10px"}}>
        <CountdownCircleTimer
          size={80}
          isPlaying
          duration={45}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[45,25,15,0]}
          onComplete={handleClose}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        </Box>

          <Typography style={{textAlign:"center",marginBottom:"5px",fontSize:"20px",color:"#2E9AFE"}} id="modal-modal-title" variant="h6" component="h2">
            Password Reset - OTP
          </Typography>
          <Typography style={{
            fontSize:"14px",
            textAlign:"center",
            marginBottom:"20px",
            color:"#A4A4A4"
          }}>
            Please check your mail for password reset OTP
          </Typography>
          <MDBox style={{
            marginBottom:"10px"
          }}>
          <MDInput error={otpe} value={otp} onChange={e=>setOtp(e.target.value)} type="text" label="OTP" fullWidth />
          <FormHelperText style={{ color: "red" }}>
                    {otpem}
                  </FormHelperText>
          </MDBox>
          <MDBox mt={6} mb={1}>
              <MDButton onClick={handleVerify} variant="gradient" color="info" fullWidth>
                verify
              </MDButton>
            </MDBox>
        </Box>
      </Modal>
    </div>

    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openLoad}
        onClick={handleCloseLoad}
      ><CircularProgress color="inherit" /></Backdrop>

      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 45 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
          <MDBox mb={2}>
              <MDInput value={email} error={eemail} onChange={e=>setEmail(e.target.value)} type="email" label="Email" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {ememail}
                  </FormHelperText>
            </MDBox>
            <MDBox mb={2}>
              <MDInput value={pass} error={epass} onChange={e=>setPass(e.target.value)} type="password" label="Password" fullWidth />
              <FormHelperText style={{ color: "red" }}>
                    {empass}
                  </FormHelperText>
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDButton onClick={handleReset} variant="gradient" color="info" fullWidth>
                reset
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
      {<ToastContainer autoClose={false} style={{ fontSize: "15px" }} toastStyle={{ borderRadius: "10px" }} />}
    </CoverLayout>
  );
}

export default Cover;
