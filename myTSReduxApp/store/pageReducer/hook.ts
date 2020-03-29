import {useSelector} from 'react-redux';

import {selectPageList} from './select';

export const usePageList = () => useSelector(selectPageList);
