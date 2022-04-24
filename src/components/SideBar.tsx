import { Drawer, Toolbar, Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { useState, SyntheticEvent } from "react";
import Chats from "./Chats";
import Contacts from "./Contacts";

interface SidebarProps {
    width: number
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            sx={{ height: '100%' }}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </Box>
    );
}

const SideBar = ({ width }: SidebarProps) => {
    const [tab, setTab] = useState(0)

    const handleChange = (_event: SyntheticEvent, newValue: number) => {
        setTab(newValue);
    }

    function a11yProps(index: number) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Drawer
            sx={{
                flexShrink: 0,
                width: width,
                '& .MuiDrawer-paper': {
                    width: width,
                    boxSizing: 'border-box',
                }
            }}
            variant="permanent"
        >
            <Toolbar>
                <Tabs value={tab} onChange={handleChange} variant='fullWidth'>
                    <Tab label="Чаты" {...a11yProps(0)} />
                    <Tab label="Контакты" {...a11yProps(1)} />
                </Tabs>
            </Toolbar>

            <TabPanel value={tab} index={0}>
                <Chats />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <Contacts />
            </TabPanel>
        </Drawer>
    )
}
export default SideBar