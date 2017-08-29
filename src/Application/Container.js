import React from 'react';

/**
 * Application.
 */
class Container extends React.Component {

    /**
     * Constructor.
     *
     * @param props
     * @param context
     * @param updater
     */
    constructor(props, context, updater) {
        super(props, context, updater);
    }

    /**
     * Create output.
     */
    render() {
        return (
            <div>Hello World!</div>
        );
    }
}

export default Container;