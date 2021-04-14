import 'react-native'
import React from 'react'
import App from '../App.tsx'
import {create , act} from 'react-test-renderer'

describe('App', () => {
    const testRenderer = create(<App />);
    const tree = testRenderer.toJSON();
    const testInstance = testRenderer.root;
    it('should render correctly', () => {
        expect(tree).toMatchSnapshot()
        expect(tree.children.length).toBe(4)
    })
    
    it('should toggle the test on button press', () => {
        const textComponent = testInstance.findByProps({testID: 'myText'})
        expect(textComponent.props.children).toEqual('Open up App.!');
        
        const button = testInstance.findByProps({testID: 'myButton'}).props;
        
        act(() => {
            button.onPress();
        });
        expect(textComponent.props.children).toEqual('Open up App.tsx to start working on your app!');
    })
})
