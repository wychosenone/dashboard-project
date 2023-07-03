import { Box } from "@mui/material";
import Header from "../../components/Header";


const Dashboard = () => {
    return (
    <Box m="20px">
        <Box display="flex" justifyContent= "space-between" alignments="center">
            <Header title="DASHBOARD" subtitle="Welcome to Your Dashboard" />
        </Box>
    </Box>)
}
export default Dashboard;