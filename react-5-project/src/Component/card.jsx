import React from 'react';
import { FcLike } from "react-icons/fc";
import { 
    Card as MuiCard,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
    Box,
    styled
} from '@mui/material';

const StyledCard = styled(MuiCard)({
    maxWidth: 345,
    margin: '1rem',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)'
    }
});

const Card = ({item}) => {    
    return (
        <StyledCard>
            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{ objectFit: 'contain', padding: '1rem' }}
                />
                <IconButton
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'white',
                        '&:hover': { bgcolor: 'white' }
                    }}
                >
                    <FcLike fontSize="1.2rem"/>
                </IconButton>
            </Box>
            <CardContent>
                <Typography 
                    gutterBottom 
                    variant="h6" 
                    component="div"
                    sx={{ 
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {item.title}
                </Typography>
                <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                    }}
                >
                    {item.description}
                </Typography>
                <Typography 
                    variant="h6" 
                    color="primary" 
                    sx={{ mt: 2 }}
                >
                    ${item.price}
                </Typography>
            </CardContent>
        </StyledCard>
    );
}

export default Card;