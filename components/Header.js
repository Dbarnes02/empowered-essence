import { Box, AppBar, List, ListItem, Typography } from "@mui/material";

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" sx={{ mb:4, py:3, }}>
                <List sx={{ display: 'flex' }}>
                    <ListItem component='a' href="#story">Story</ListItem>
                    <ListItem component='a' href="#aroma">Aroma</ListItem>
                    <ListItem component='a' href="#dr.b">Dr. Benjamin</ListItem>
                    <ListItem component='a' href="#privacy">Privacy</ListItem>
                </List>
            </AppBar>
            <img 
                    scr="../ee-logo.png"
                    width={250}
                    height={250}
                    alt="Empowered Essence Logo" 
                />
                <Typography variant="body1" margin={4}>
                    The Transformation Technique Discovery Call
                </Typography>
        </Box>
    )
}