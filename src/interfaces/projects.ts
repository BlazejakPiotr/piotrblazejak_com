export interface ProjectInterface {
  id: string;
  title: string;
  description: string;
  language: string;
  framework?: string;
  logo: string;
  tools: string[];
  links: {
    design?: string;
    code?: string;
    preview?: string;
  };
  screenshots: ScreenshotInterface[];
}

interface ScreenshotInterface {
  id: number;
  url: string;
}
