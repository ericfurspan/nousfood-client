import React from 'react';
import { withRouter } from 'react-router-dom';

import './styles/footer.css';

export class Footer extends React.Component {

    render() {
        let footerContent;
        switch(this.props.location.pathname) {
            case '/about' :
                footerContent = 'Always consult a doctor before taking any supplements you are unclear about. Potential side effects should always be considered.'
                break;
            default : 
                footerContent = 'cycle between random nootropic facts' // import array of facts and pick one at random
        }        
        return (
            <footer>{footerContent}</footer>
        );
    }
}

export default withRouter(Footer);
