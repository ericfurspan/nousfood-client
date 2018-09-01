import React from 'react';
import ReactDOM from 'react-dom';
import NootropicLibrary  from '../nootropic-library';
import {shallow} from 'enzyme';
import { NootropicData } from '../../assets/data/nootropic-data';

let mockFetch = () => {
  setTimeout(() => {
    console.log(`fetching ${term}`);
  }, 3000)
}


it('Renders without crashing', () => {
  const div = document.createElement('div');
  shallow(<NootropicLibrary nootropics={NootropicData} fetchNlmData={mockFetch}/>)
});
