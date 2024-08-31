import React ,{createContext , useState , useContext }from 'react';
import styled ,{ThemeProvider as StyledThemeProvider} from 'styled-components';
const ThemeContext=createContext();
const lightTheme={
    background:'white',color:'#28282B',buttonBackground:'black',buttonColor:'white'};
const darkTheme={
    background:'#28282B',color:'#FFC300',buttonBackground:'yellow',buttonColor:'purple'
};
export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState(lightTheme);
    const [likes, setLikes] = useState(0);
    const toggle=()=>{
        setTheme(theme===lightTheme?darkTheme:lightTheme);
    }
    const increaseLikes = () => setLikes((prevLikes) => prevLikes + 1);
    const decreaseLikes = () => setLikes((prevLikes) => (prevLikes > 0 ? prevLikes - 1 : 0));
return (
    <ThemeContext.Provider value={{theme,toggle,likes,increaseLikes, decreaseLikes}}>
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    </ThemeContext.Provider>
);
};
export const useTheme=()=>useContext(ThemeContext);