import { useState, useEffect } from "react";
import "./App.css";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { User, Application } from "./interfaces";
import { UsersPanel } from "./UsersPanel";
import { ApplicationsPanel } from "./ApplicationsPanel";
import { AddressPanel } from "./AddressPanel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Montserrat';
        }
      `,
    },
  },
});

function App() {
  const [value, setValue] = useState(0);
  const [Users, setUsers] = useState<User[]>([]);
  const [Applications, setApplications] = useState<Application[]>([]);
  const [TabApplicationVisible, setTabApplicationVisible] = useState(false);
  const [ApplicationTabLabel, setApplicationTabLabel] = useState("");

  const handleChange = (_event: any, newValue: any) => {
    setValue(newValue);
    if (newValue !== 2) {
      setTabApplicationVisible(false);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((response) => response.data)
      .then((responseData) => {
        setUsers(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/applications")
      .then((response) => response.data)
      .then((responseData) => {
        setApplications(responseData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const applicationClicked = (application: Application) => {
    setApplicationTabLabel(application.address.street);
    setTabApplicationVisible(true);
    setValue(2);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Users" {...a11yProps(0)} />
            <Tab label="Applications" {...a11yProps(1)} />
            {TabApplicationVisible ? (
              <Tab label={ApplicationTabLabel} {...a11yProps(2)} />
            ) : null}
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <UsersPanel users={Users} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ApplicationsPanel
            applications={Applications}
            applicationClicked={applicationClicked}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddressPanel />
        </TabPanel>
      </Box>
    </ThemeProvider>
  );
}

export default App;
