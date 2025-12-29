import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: '47px',
                margin: '0 10px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                    height: 4,
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    height: 4,
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#00CC22',
                    border: '4px solid white',
                    '&:focus, &:hover, &.Mui-active': {
                        boxShadow: '0 0 0 4px rgba(0, 204, 34, 0.3)',
                    },
                },
            }}
            {...props}
        />
    )
}

export default SuperRange