// Footer component for footer section
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
    return (
        <Typography variant='body2' color='text.secondary'>
            {"Copyright © "}
            <Link color='inherit' href='http://localhost:1234/'>
                Hunger: Jab Man Chahe
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
const Footer = () => {
    return (
        <Box
            omponent='footer'
            sx={{
                py: 3,
                px: 2,
                mt: "auto",
                backgroundColor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[800]
            }}
        >
            <Container maxWidth='sm'>
                <Typography>Ayush Anand</Typography>
                <Copyright />
            </Container>
        </Box>
    );
};

export default Footer;
