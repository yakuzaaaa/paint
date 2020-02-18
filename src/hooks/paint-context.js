import { useContext } from 'react';
import PaintStateContext from '../context/paint-context';
import PaintDispatchContext from '../context/paint-context';

function usePaintState() {
    const context = useContext(PaintStateContext);

    if (!context) {
        throw new Error('usePaintState must use around around a provider');
    }

    return context;
}

function usePaintDisptach() {
    const context = useContext(PaintStateContext);

    if (!context) {
        throw new Error('usePaintDispatch must use around around a provider');
    }

    return context;
}

export {
    usePaintState,
    usePaintDisptach
}