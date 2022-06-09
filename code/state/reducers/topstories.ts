import { AnyAction } from "redux";
import { INIT_INITIALIZE, SET_STORIES } from "../actions";

export type State = {
  enabled: boolean;
  topStories?: API.Story[];
}

const initialState: State = {
  enabled: false,
  topStories: undefined,
};

export default function reducer(state = initialState, action: AnyAction): State {
  const { type, stories } = action;

  switch (type) {
    case SET_STORIES:
        return { ...state, topStories: stories, enabled: true };
  }
  return state;
}

export const initialize = () => ({
  type: INIT_INITIALIZE,
});

export const setStories = (stories: API.Story[]) => ({
  type: SET_STORIES,
  stories
});

