import * as React from "react";
import NavBar from "./navbar";
import { useNavigate } from "react-router-dom";
import {
  ThemeProvider,
  Grid,
  createTheme,
  Box,
  Typography,
  ListSubheader,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { ReactComponent as AnnounceIcon } from "../images/announcement.svg";
import { ReactComponent as AssignmentIcon } from "../images/assignment.svg";
import { ReactComponent as ContentsIcon } from "../images/contents.svg";
import { ReactComponent as GradeIcon } from "../images/grade.svg";
import { ReactComponent as LecturerIcon } from "../images/lecturer.svg";
import { ReactComponent as QuizIcon } from "../images/quiz.svg";
import { ReactComponent as MeowCry } from "../images/meow-cry-icon.svg";

function GradePage() {
  let navigate = useNavigate();

  const theme = createTheme({
    typography: {
      fontFamily: "Prompt",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{ display: "unset" }}
        PaperProps={{ style: { marginTop: "64px", width: "300px" } }}
      >
        <List sx={{ position: "relative" }}>
          <ListSubheader>
            <Box
              sx={{
                marginTop: "8px",
                marginBottom: "24px",
                color: "#454545",
              }}
            >
              <span
                style={{ margin: 16, alignItems: "center", display: "flex" }}
              >
                <Button color="inherit" size="small">
                  <ArrowBackIosRoundedIcon
                    style={{ paddingTop: 4, marginRight: 16 }}
                  ></ArrowBackIosRoundedIcon>
                  ออกจากห้องเรียน
                </Button>
              </span>

              <Box
                sx={{
                  margin: "8px 16px 0 16px",
                }}
              >
                <Typography
                  fontWeight="600"
                  fontSize="1.3rem"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "0.35em",
                  }}
                >
                  การพูดในที่สาธารณะและการนำเสนองานต่อที่ประชุมอย่างมืออาชีพ
                </Typography>

                <Typography
                  fontWeight="500"
                  fontSize="1rem"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  รหัสวิชา
                </Typography>
              </Box>
            </Box>
            <Divider style={{ marginBottom: "8px" }} />
          </ListSubheader>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/announcement")}>
              <ListItemIcon>
                <AnnounceIcon />
              </ListItemIcon>
              <ListItemText>ประกาศ</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/lecturer")}>
              <ListItemIcon>
                <LecturerIcon />
              </ListItemIcon>
              <ListItemText>ผู้สอน/ผู้รับผิดชอบรายวิชา</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/contents")}>
              <ListItemIcon>
                <ContentsIcon />
              </ListItemIcon>
              <ListItemText>สารบัญเนื้อหา</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/quiz")}>
              <ListItemIcon>
                <QuizIcon />
              </ListItemIcon>
              <ListItemText>แบบทดสอบ</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate("/assignment")}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText>งานที่ได้รับมอบหมาย</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate("/grade")}
              style={{
                backgroundColor: "#00000015",
                borderLeft: "8px solid #9AC5F4",
              }}
            >
              <ListItemIcon>
                <GradeIcon />
              </ListItemIcon>
              <ListItemText>ผลการเรียน</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <main position="relative" style={{ padding: "8px", marginLeft: "300px" }}>
        <Box sx={{ display: "block", marginTop: "80px", marginBottom: "80px" }}>
          <Grid
            container
            sx={{
              justifyContent: "center",
              alignItems: "center",
              //   flexDirection: "column",
              display: "flex",
              flexWrap: "wrap",
            }}
            style={{ width: "100%" }}
          >
            <Grid
              item
              xs={1}
              lg={1}
              sx={{ display: "inline-block" }}
              style={{
                width: "50%",
                minWidth: "280px",
                maxWidth: "500px",
                marginBottom: "24px",
              }}
            >
              <Typography
                variant="h6"
                fontWeight="700"
                fontSize="1.8rem"
                style={{ justifyContent: "inherit" }}
              >
                ผลการเรียน
              </Typography>
            </Grid>
            <Grid item xs={1} lg={1} style={{ marginBottom: "auto" }}>
              <div
                style={{ border: "4px solid #454545", borderRadius: "50px" }}
              >
                <Typography
                  variant="h6"
                  fontWeight="700"
                  fontSize="1.8rem"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  -
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Divider
            variant="middle"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #45454550",
              marginTop: "16px",
            }}
          />
          <Grid container style={{ marginTop: "32px" }}>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ width: "50%", paddingRight: "32%" }}
            >
              <Typography variant="h6" fontWeight="700" color="#454545">
                ผลลัพธ์จากแบบทดสอบ
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ width: "50%", marginTop: "16px" }}
            >
              <Typography fontWeight="700" color="#45454570">
                ยังไม่ผลลัพธ์จากแบบทดสอบในขณะนี้
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ width: "100%", height: "auto", marginTop: "32px" }}
            >
              <Divider
                variant="string"
                style={{
                  width: "36%",
                  border: "2.5px dashed #45454570",
                }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ width: "50%", paddingRight: "26%", marginTop: "16px" }}
            >
              <Typography variant="h6" fontWeight="700" color="#454545">
                ผลลัพธ์จากงานที่ได้รับมอบหมาย
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              style={{ width: "50%", marginTop: "16px" }}
            >
              <Typography fontWeight="700" color="#45454570">
                ยังไม่ผลลัพธ์จากงานที่ได้รับมอบหมายในขณะนี้
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </main>
    </ThemeProvider>
  );
}

export default GradePage;
