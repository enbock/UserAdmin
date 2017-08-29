'use strict';
/* global expect, test, describe, jest, it, beforeEach, afterEach */
import React from 'react';
import { mount } from 'enzyme'; // renderer, shallow
//import Bootstrap from '../Bootstrap';
import Application from '../../src/Application';


/**
 * Tests of Application Container.
 */
describe('Application: Container', function ApplicationContainerTests () {
    let mounted;

    /**
     * Create the test component.
     * @returns {*}
     */
    function createAndMountComponent () {
        const components = <Application/>;

        return mount(components);
    }

    /**
     * Initialize checkout application.
     */
    beforeEach(function tearUp () {
        mounted = createAndMountComponent();
    });

    /**
     * Cleanup after test.
     */
    afterEach(function tearDown () {
        mounted.unmount();
    });

    /**
     * Test hello world.
     */
    it('Shows hello world', function testHelloWorld () {
        const textOutput = mounted.find('div').text();

        expect(textOutput).toContain('Hello World');
    });
});