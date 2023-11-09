import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
//import { HomeIcon, FavoriteIcon, StoreIcon, SchoolIcon, ComputerIcon, ElectricBoltIcon, CameraAltIcon, RestaurantIcon } from '@mui/icons-material';
import SchoolIcon from '@mui/icons-material/School';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StoreIcon from '@mui/icons-material/Store';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
    return (
        <Box sx={{ height: 100 }} backgroundColor='#DFEEDA' margin={10}>
            <Grid>
                    <Item>
                        상담 인기 카테고리<br />
                            <Button>
                                <StoreIcon>
                                    취업
                                </StoreIcon>
                            </Button>
                            <Button>
                                <FavoriteIcon>
                                    연애
                                </FavoriteIcon>
                            </Button>
                            <Button>
                                <SchoolIcon>
                                    학업
                                </SchoolIcon>
                            </Button>
                            <Button>
                                <HomeIcon>
                                    가정
                                </HomeIcon>
                            </Button>
                    </Item>
            </Grid>
        </Box>
    );
}