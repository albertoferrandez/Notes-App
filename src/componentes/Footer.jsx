import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { ContFooter, Footers } from '../StyleComp/Footers'
import { GiMoonBats, GiFlashlight } from "react-icons/gi";
import { IconContext } from 'react-icons';

const Footer = () => {

    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <Footers>
            <ContFooter>
                <IconContext.Provider value={{ className: "icon" }}>
                    {theme === "dark" ? (
                        <GiFlashlight size={32} onClick={() => switchTheme("light")} />
                    ) : (
                        <GiMoonBats size={32} onClick={() => switchTheme("dark")} />
                    )}
                </IconContext.Provider>
            </ContFooter>
        </Footers>
    )
}

export default Footer