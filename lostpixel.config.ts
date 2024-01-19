import type { CustomProjectConfig } from "lost-pixel";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "./storybook-static",
  },
  generateOnly: true,
  lostPixelProjectId: "clrk77ppl013lni0e77nfw1qg",
  apiKey: process.env.LOST_PIXEL_API_KEY,
};
