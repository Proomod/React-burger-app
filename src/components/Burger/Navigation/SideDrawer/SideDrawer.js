import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../../hoc/Aux/Aux';




const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.showSidebar) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }
    return (
        <Aux>
            <BackDrop show={props.showSidebar}
                goBack={props.clickBack} />
            <div className={attachedClasses.join(' ')}
            >
                <div className={classes.logo}>
                    <Logo />
                </div>
                <NavigationItems />



            </div>
        </Aux>

    );

}
export default sideDrawer;