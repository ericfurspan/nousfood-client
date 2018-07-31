import React from 'react';
import ReactDOM from 'react-dom';
import userReducer from '../user';
import { 
    emptyUserData,
    fetchUserDataSuccess,
    fetchUserDataError,
    saveValues,
    createStackRequest,
    createStackSuccess,
    createStackError,
    saveStackRequest,
    saveStackSuccess,
    saveStackError,
    deleteStackSuccess,
    deleteStackError,
    createPublicStackRequest,
    createPublicStackSuccess,
    createPublicStackError,
    deletePublicStackRequest,
    deletePublicStackSuccess,
    deletePublicStackError,
    
} from '../../actions/user';
import { StackData } from '../../assets/data/stack-data';

const mockError = {message: 'Failure'}
const mockAccount = {
    email: 'testguy@test.com',
    firstname: 'tester',
    lastname: 'guy',
    username: 'Testguy',
    password: 'egst34h53uh53it'
}
const mockUserData = {
    ...mockAccount,
    saved_stacks: StackData
}
const mockTempStack = {
    author: 'tester',
    name: 'teststack',
    description: 'testdesc',
    directive: 'test directive',
    contents: [{}],
    code: 'xyzabc123'
}

describe('emptyUserData', () => {
    it('Should empty user data', () => {
        let state = {
            account: mockAccount,
            savedStacks: StackData
        }
        state = userReducer(state, emptyUserData());
        expect(state).toEqual({
            account: null,
            savedStacks: null
        });
    });
});
describe('fetchUserDataSuccess', () => {
    it('Should return user data', () => {
        let state = {
            account: null,
            savedStacks: null,
            error: null,
            loading: true
        }
        state = userReducer(state, fetchUserDataSuccess(mockUserData));
        expect(state).toEqual({
            account: mockAccount,
            savedStacks: StackData,
            error: null,
            loading: false
        });
    });
});
describe('fetchUserDataError', () => {
    it('Should return error', () => {
        let state = {
            feedback: null,
            error: null
        }
        state = userReducer(state, fetchUserDataError(mockError));
        expect(state).toEqual({
            feedback: {type: 'error', message: mockError.message},
            error: mockError.message
        });
    });
});
describe('saveValues', () => {
    it('Should return updated temp stack', () => {
        let state = {
            tempStack: null
        }
        state = userReducer(state, saveValues(mockTempStack));
        expect(state).toEqual({
            tempStack: mockTempStack
        });
    });
});
describe('createStackRequest', () => {
    it('Should initiate stack request', () => {
        let state = {
            loading: false
        }
        state = userReducer(state, createStackRequest());
        expect(state).toEqual({
            loading: true
        });
    }); 
});
describe('createStackSuccess', () => {
    it('Should initiate stack success', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, createStackSuccess());
        expect(state.loading).toEqual(false)   
        expect(state.error).toBeFalsy()
        expect(state.feedback.message).toEqual('Stack created successfully')
    }); 
});
describe('createStackError', () => {
    it('Should initiate stack error', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, createStackError(mockError));
        expect(state.loading).toEqual(false)   
        expect(state.error).not.toEqual(null)
    }); 
});
describe('saveStackRequest', () => {
    it('Should initiate save stack request', () => {
        let state = {
            loading: false
        }
        state = userReducer(state, saveStackRequest());
        expect(state.loading).toEqual(true)   
        expect(state.error).toBeFalsy()
    }); 
});
describe('saveStackSuccess', () => {
    it('Should initiate save stack success', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, saveStackSuccess());
        expect(state.loading).toEqual(false)   
        expect(state.error).toBeFalsy()
        expect(state.feedback.message).toEqual('Saved Successfully')
    }); 
});
describe('saveStackError', () => {
    it('Should initiate save stack error', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, saveStackError(mockError));
        expect(state.loading).toEqual(false)   
        expect(state.error).not.toEqual(null)
    }); 
});
describe('deleteStackSuccess', () => {
    it('Should initiate delete stack success', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, deleteStackSuccess());
        expect(state.loading).toEqual(false)   
        expect(state.error).toEqual(null)
        expect(state.feedback.message).toEqual('Deleted Successfully')
    }); 
});
describe('deleteStackError', () => {
    it('Should initiate delete stack error', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, deleteStackError(mockError));
        expect(state.loading).toEqual(false)   
        expect(state.error).not.toEqual(null)
    }); 
});
describe('createPublicStackRequest', () => {
    it('Should initiate create public stack request', () => {
        let state = {
            loading: false
        }
        state = userReducer(state, createPublicStackRequest());
        expect(state.loading).toEqual(true)   
        expect(state.error).toBeFalsy()
    }); 
});
describe('createPublicStackSuccess', () => {
    it('Should initiate create public stack success', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, createPublicStackSuccess());
        expect(state.loading).toEqual(false)   
        expect(state.error).toBeFalsy()
        expect(state.feedback.message).toEqual('Stack made public')
    }); 
});
describe('createPublicStackError', () => {
    it('Should initiate create public stack error', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, createPublicStackError(mockError));
        expect(state.loading).toEqual(false)   
        expect(state.error).not.toEqual(null)
    }); 
});
describe('deletePublicStackRequest', () => {
    it('Should initiate delete public stack request', () => {
        let state = {
            loading: false
        }
        state = userReducer(state, deletePublicStackRequest());
        expect(state.loading).toEqual(true)   
        expect(state.error).toBeFalsy()
    }); 
});
describe('deletePublicStackSuccess', () => {
    it('Should initiate delete public stack success', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, deletePublicStackSuccess());
        expect(state.loading).toEqual(false)   
        expect(state.error).toEqual(null)
        expect(state.feedback.message).toEqual('Stack removed from public')
    }); 
});
describe('deletePublicStackError', () => {
    it('Should initiate delete public stack error', () => {
        let state = {
            loading: true
        }
        state = userReducer(state, deletePublicStackError(mockError));
        expect(state.loading).toEqual(false)   
        expect(state.error).not.toEqual(null)
    }); 
});