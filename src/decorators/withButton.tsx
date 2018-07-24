import React, {Component, ComponentType} from 'react';

interface WrappedWithButtonProps<P> {
    wrappedProps: P;
    btnName: string;
}

export const withButton = <P extends {}>(BaseComponent: ComponentType<P>) =>
    class extends Component<WrappedWithButtonProps<P>> {
        public render() {
            const {btnName, wrappedProps} = this.props;
            return (
                <div>
                    <BaseComponent {...wrappedProps}/>
                    <button>{btnName}</button>
                </div>
            );
        }
    };
