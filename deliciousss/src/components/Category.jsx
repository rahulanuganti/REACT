import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiHotMeal, GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


function Category(){
    return(
        <List>
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Indian'}>
                <GiHotMeal />
                <h4>Indian</h4>
            </NavLink>
            <NavLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </NavLink>
        </List>
    )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem orem;
`; 


export default Category;