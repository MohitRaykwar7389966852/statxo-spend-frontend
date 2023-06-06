import React from "react";
import PropTypes from "prop-types";
import Iframe from "react-iframe";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { ToastContainer, toast } from "react-toastify";
import MDBox from "components/MDBox";

function Report() {
  const [value, setValue] = React.useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  const [tabDisplay, setTabDisplay] = React.useState({ width: "100%", display: "block" });
  const [tabStyle, setTabStyle] = React.useState({
    height:"100vh"
  });
  const [frameHeight, setFrameHeight] = React.useState("135%");
  const [zoom, setZoom] = React.useState(true);

  const fullScreen = () => {
    if (zoom === true) {
      setTabDisplay({ width: "100%", display: "none" });
      setFrameHeight("142.4%");
      setTabStyle({
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 2000,
        overflowY:"scroll"
      });
      setZoom(false);
    } else {
      setTabDisplay({ width: "100%", display: "block" });
      setFrameHeight("135%");
      setTabStyle({
        height:"100vh"
      });
      setZoom(true);
    }
  };
  return (
    <DashboardLayout>
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3.25rem"
        height="3.25rem"
        bgColor="white"
        shadow="sm"
        borderRadius="50%"
        position="fixed"
        right="2rem"
        bottom="6rem"
        zIndex={2001}
        color="dark"
        sx={{ cursor: "pointer" }}
        onClick={fullScreen}
      >
        <CropFreeIcon />
      </MDBox>
      <Box>
        <div style={tabStyle}>
          <iframe
          style={{
          }}
            title="Sanitized Spend Dashboard, PI, v11"
            width="100%"
            height={frameHeight}
            src="https://app.powerbi.com/reportEmbed?reportId=e9d5981e-b187-4c20-a835-f4d0fcd3c012&autoAuth=true&ctid=55e0a09f-7836-4d37-b386-b5605b46a125"
            frameborder="0"
            display="block"
            position="relative"
            allowFullScreen
          />
        </div>
      </Box>
      {<ToastContainer style={{ fontSize: "15px" }} toastStyle={{ borderRadius: "10px" }} />}
    </DashboardLayout>
  );
}
function TabPanel(props) {
  TabPanel.propTypes = {
    children: PropTypes.node.isRequired,
    value: PropTypes.node.isRequired,
    index: PropTypes.node.isRequired,
  };
  const { children, value, index } = props;
  return <div>{value === index && <h1>{children}</h1>}</div>;
}

export default Report;
