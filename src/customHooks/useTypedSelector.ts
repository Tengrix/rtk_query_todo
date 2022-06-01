import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {AppRootType} from '../store';

export const useTypedSelector:TypedUseSelectorHook<AppRootType> = useSelector