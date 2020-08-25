// packages
import React from 'react';

// css
import classes from './SectionHeader.module.scss';

const sectionHeader = (props) => (
    <h2 className={classes.section_header}>{props.children}</h2>
);

export default sectionHeader;