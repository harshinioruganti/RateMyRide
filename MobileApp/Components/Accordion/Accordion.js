import React, { useState } from "react";

// Components
import ThemeParkList from "../ThemeParks/ThemeParkList";
import RidesList from "../Rides/RidesList";
// Styling
import { CardStyle } from "../Cards/CardStyles";
// Theme park names for testing
import { themeParks } from "../../tests";


const Accordion = () => {


    const handleAccordionPress = ( itemId ) => {
        console.log(itemId);
        return;
    }

    return (
        <>
            <ThemeParkList 
                styles={ CardStyle.themePark }
                parks={ themeParks }
                onPress={ handleAccordionPress }
            />
        </>

        
    )
}

export default Accordion;