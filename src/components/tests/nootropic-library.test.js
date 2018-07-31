import React from 'react';
import ReactDOM from 'react-dom';
import NootropicLibrary  from '../nootropic-library';
import {shallow} from 'enzyme';
import { NootropicData } from '../../assets/data/nootropic-data';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<NootropicLibrary nootropics={NootropicData}/>)
});
