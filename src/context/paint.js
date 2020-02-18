import React from 'react';
import {DRAW_TOOL} from '../constants';

const PaintStateContext = React.createContext();
const PaintDispatchContext = React.createContext();

const paintAppDefaultState = {
    tool: {
        selectedTool: DRAW_TOOL
    }
};

function PaintProvider ({children}) {
    const [state, dispatch] = React.useReducer(paintReducer, paintDefaultState);
    <PaintStateContext>
        <PaintDispatchContext>
            {children}
        </PaintDispatchContext>
    </PaintStateContext>
}

export {
    PaintProvider,
    PaintStateContext,
    PaintDispatchContext
};