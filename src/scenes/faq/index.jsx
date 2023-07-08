import {Box, useTheme,Typography} from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme";


const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)


    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        some things
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        2nd Important Question
                    
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        some things
                    </Typography>
                </AccordionDetails>

            </Accordion >
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        3rd Important Question
                    
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        some things
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        4th Important Question
                    
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        some things
                    </Typography>
                </AccordionDetails>

            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        5th Important Question
                    
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        some things
                    </Typography>
                </AccordionDetails>

            </Accordion>
             <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An Important Question
                    
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        some things
                    </Typography>
                </AccordionDetails>

            </Accordion>



        </Box>
    )



}
export default FAQ;