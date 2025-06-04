import { UserType } from '../HW8';

type ActionType =
  | { type: 'sort'; payload: 'up' | 'down' }
  | { type: 'check'; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      switch (action.payload) {
        case 'up': {
          const newState = state.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else if (a.name < b.name) {
              return -1;
            } else {
              return 0;
            }
          });
          return [...newState];
        }
        case 'down': {
          const newState = state.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            } else if (a.name < b.name) {
              return 1;
            } else {
              return 0;
            }
          });
          return [...newState];
        }
        default:
          return state;
      }

      return state;
    }
    case 'check': {
      return state.filter(u => u.age >= action.payload); // need to fix
    }
    default:
      return state;
  }
};
