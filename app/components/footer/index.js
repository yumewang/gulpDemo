'use strict';

import React from 'react';
import classNames from 'classnames';

const Footer = React.createClass({
    render() {
        const footerClass = classNames('footer');
        const footerLinkClass = classNames('footer--link');

        return (
            <footer className={ footerClass }>
            </footer>
        );
    }
});

export default Footer;
