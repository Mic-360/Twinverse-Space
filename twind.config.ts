import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url, 
  theme: {
    extend: {
      borderGradientColors: {
        'yellow-blue': ['#f1ff55', '#386de3'],
      },
    },
  },      
} as Options;
