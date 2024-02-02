/*
file name

.test.js/.tsx
.spec.js/.tsx


folder outer 

__test__
-test.js/.tsx
*/

//https://testing-library.com/docs/queries/about/

import { render, screen } from '@testing-library/react';
import Greet from './Greet';

/* we also use it --alternative-> test
test('renders greet', () => {
    render(<Greet/>);
    const divElement = screen.getByText("Greet");
    expect(divElement).toBeInTheDocument();

})
test('renders greet name', () => {
    render(<Greet name="firoj"/>);
    const divElement = screen.getByText("Greet firoj");
    expect(divElement).toBeInTheDocument();

})
*/
// grooping 

describe("greet " ,()=>{
    test('renders greet', () => {
        render(<Greet/>);
        const divElement = screen.getByText("Greet");
        expect(divElement).toBeInTheDocument();
    
    })
    /*
    test('renders greet name', () => {
        render(<Greet name="firoj"/>);
        const divElement = screen.getByText("Greet firoj");
        expect(divElement).toBeInTheDocument();
    
    })*/
    /*describe("greet nested" ,()=>{
        
        test('renders greet name', () => {
            render(<Greet name="firoj"/>);
            const divElement = screen.getByText("Greet firoj");
            expect(divElement).toBeInTheDocument();
        
        })
        
    })*/
})

describe("greet nested" ,()=>{
        
    it('renders greet name', () => {
        render(<Greet name="firoj"/>);
        const divElement = screen.getByText("Greet firoj");
        expect(divElement).toBeInTheDocument();
    
    })
    
})