import React, {Component} from 'react';
import {withButton} from '../decorators';

interface TitleProps {
    name: string;
}

class Title extends Component<TitleProps> {
    constructor(props) {
        super(props);
    }
    public render () {
        const {name} = this.props;
        return (
            <h1>Hello {name}</h1>
        );
    }
}

export default withButton(Title);
