import React         from "react";
import {useSelector} from "react-redux";


const KzTheme = (props) => {
    const mainTheme = useSelector(({coreReducers}) => coreReducers.settings.mainTheme)
};

export default React.memo(KzTheme);