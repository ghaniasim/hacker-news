import { createSelector as create } from "reselect";
import { ApplicationState } from "./store";

export const getState = (state: ApplicationState) => state.app;

export const getTopStories = create([getState], (app) => ({
  topStories: app.topStories,
  enabled: app.enabled,
}));
