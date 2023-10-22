import { Container, Typography, Box } from "@mui/material";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <Container>
            <Box sx={{ my:4, textAlign: 'center' }}>
                <Typography variant="body1">
                    Copyright &copy; {currentYear} Diana Barnes. All rights reserved.
                </Typography>
            </Box>
        </Container>
    )
}