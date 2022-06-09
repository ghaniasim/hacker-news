import axios from "axios";

import { BASE_API_URL } from "../utils";

const getStory = async (id: API.Story["id"]) => {
  try {
    const { data } = await axios.get<API.Story>(`${BASE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    console.log("Error while getting a story.");
  }
};

const getComment = async (id: API.Comment["id"]) => {
  try {
    const { data } = await axios.get<API.Comment>(`${BASE_API_URL}/item/${id}.json`);
    return data;
  } catch (error) {
    console.log("Error while getting a comment.");
  }
};

const apiRequests = {
  async getTopStories() {
    try {
      const { data: storyIds } = await axios.get<API.Stories>(
        `${BASE_API_URL}/topstories.json`
      );
      /* Return only top 30 news stories. */
      return await Promise.all(storyIds.slice(0, 30).map(getStory));
    } catch (error) {
      console.log('Error while getting list of stories.');
    }
  },

  async getComments(comments: API.Comments) {
    try {
      return await Promise.all(comments.map(getComment));
    } catch (error) {
      console.log('Error while getting list of comments.');
    }
  },
};

export { apiRequests as api };
