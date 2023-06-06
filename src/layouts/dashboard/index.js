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

import { useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import { ToastContainer, toast } from "react-toastify";
import { Box, Typography,Divider } from "@mui/material";
import AccountBalanceTwoToneIcon from '@mui/icons-material/AccountBalanceTwoTone';

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Spend Analysis"
                list1="Top Analysis"
                list2="SKU Analysis"
                list3="category Analysis"
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Saving Life cycle"
                list1="Project Detail"
                list2="category Savings"
                list3="Saving by market type"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Category Intelligence"
                list1="Market Intellegence"
                list2="Sourcing Strategy"
                list3="Innvation Intellegence"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Followers"
                title2="Spend Analysis"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Just updated",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Project Statistics"
                title2="Spend Analysis"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than lask week",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Today's Users"
                title2="Spend Analysis"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                title2="Spend Analysis"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than yesterday",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <MDBox style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "stretch"
      }}>
        <Box style={{
          width:"290px",
          border:"2px solid grey",
          borderRadius:"20px",
          padding:"10px",
          borderColor:"#5DADE2"
        }}>
          <Box style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
          }}>
        <Typography
        style={{
          fontWeight:"bold",
          color:"#5DADE2",
        }}
        >Spend Analysis</Typography>
        <AccountBalanceTwoToneIcon  style={{color:"#5DADE2",width:"40px",height:"40px"}} />
        </Box>
        <Divider/>
        <ul style={{listStyle:"none",fontSize:"15px",textAlign:"right",marginRight:"15px",color:"grey"}}>
          <li>Top Analysis</li>
          <li>SKU Analysis</li>
        </ul>
        <Divider/>
        <Typography style={{
          fontSize:"14px",
          marginLeft:"10px"
        }}><span style={{color:"#25D22F",fontWeight:"bold"}}>+55%</span> than lask week</Typography>
        </Box>

        <Box style={{
          width:"290px",
          border:"2px solid grey",
          borderRadius:"20px",
          padding:"10px",
          borderColor:"#5DE283"
        }}>
          <Box style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
          }}>
        <Typography
        style={{
          fontWeight:"bold",
          color:"#5DE283",
        }}
        >Spend Analysis</Typography>
        <AccountBalanceTwoToneIcon  style={{color:"#5DE283",width:"40px",height:"40px"}} />
        </Box>
        <Divider/>
        <ul style={{listStyle:"none",fontSize:"15px",textAlign:"right",marginRight:"15px",color:"grey"}}>
          <li>Top Analysis</li>
          <li>SKU Analysis</li>
        </ul>
        <Divider/>
        <Typography style={{
          fontSize:"14px",
          marginLeft:"10px"
        }}><span style={{color:"#25D22F",fontWeight:"bold"}}>+70%</span> than lask week</Typography>
        </Box>

        <Box style={{
          width:"290px",
          border:"2px solid grey",
          borderRadius:"20px",
          padding:"10px",
          borderColor:"#E74466"
        }}>
          <Box style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
          }}>
        <Typography
        style={{
          fontWeight:"bold",
          color:"#E74466",
        }}
        >Spend Analysis</Typography>
        <AccountBalanceTwoToneIcon  style={{color:"#E74466",width:"40px",height:"40px"}} />
        </Box>
        <Divider/>
        <ul style={{listStyle:"none",fontSize:"15px",textAlign:"right",marginRight:"15px",color:"grey"}}>
          <li>Top Analysis</li>
          <li>SKU Analysis</li>
        </ul>
        <Divider/>
        <Typography style={{
          fontSize:"14px",
          marginLeft:"10px"
        }}><span style={{color:"red",fontWeight:"bold"}}>-15%</span> than lask week</Typography>
        </Box>

        <Box style={{
          width:"290px",
          border:"2px solid grey",
          borderRadius:"20px",
          padding:"10px",
          borderColor:"#E7D644"
        }}>
          <Box style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
          }}>
        <Typography
        style={{
          fontWeight:"bold",
          color:"#E7D644",
        }}
        >Spend Analysis</Typography>
        <AccountBalanceTwoToneIcon  style={{color:"#E7D644",width:"40px",height:"40px"}} />
        </Box>
        <Divider/>
        <ul style={{listStyle:"none",fontSize:"15px",textAlign:"right",marginRight:"15px",color:"grey"}}>
          <li>Top Analysis</li>
          <li>SKU Analysis</li>
        </ul>
        <Divider/>
        <Typography style={{
          fontSize:"14px",
          marginLeft:"10px"
        }}><span style={{color:"#25D22F",fontWeight:"bold"}}>+40%</span> than lask week</Typography>
        </Box>
        
      </MDBox>
      {<ToastContainer style={{ fontSize: "15px" }} toastStyle={{ borderRadius: "10px" }} />}
    </DashboardLayout>
  );
}

export default Dashboard;
