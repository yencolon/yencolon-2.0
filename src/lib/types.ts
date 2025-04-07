export type ProjectFrontmatter = {
  /**
   * The title of the project
   */
  title: string;

  /**
   * The description of the project
   */
  description: string;

  /**
   * The tags of the project
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The GitHub URL of the project
   */
  githubUrl?: string;

  /**
   * The live URL of the project
   */
  liveUrl?: string;

  /**
   * Whether the project should be featured on the homepage
   */
  featured?: boolean;

  /**
   * The date the project was created or started in W3C format
   * (this will determine the sort order of the projects)
   */
  timestamp: string;

  /**
   * The URL of the project on the website
   * (eg. https://zaggonaut.dev/projects/my-project)
   */
  filename: string;
};

export type ArticleFrontmatter = {
  /**
   * The title of the article
   */
  title: string;

  /**
   * THe summary description of the article
   */
  description: string;

  /**
   * The tags of the article
   * (eg. ["JavaScript", "React", "Node.js"])
   */
  tags?: string[];

  /**
   * The estimated time to read the article in minutes
   */
  time: number;

  /**
   * Whether the article should be featured on the homepage
   */
  featured: boolean;

  /**
   * The timestamp the article was published in W3C format
   */
  timestamp: string;

  /**
   * The URL of the article on the website
   * (eg. https://zaggonaut.dev/blog/my-article)
   */
  filename: string;
};


export type EmploymentHistoryFrontmatter = {
  /**
   * The title of the employment history
   */
  title: string;

  /**
   * The company of the employment history
   */
  company: string;

  /**
   * The description of the employment history
   */
  description: string;

  /**
   * The bullet points of the employment history
   */
  bullets: string[];

  /**
   * The start date of the employment history in W3C format
   */
  startDate: string;

  /**
   * The end date of the employment history in W3C format
   */
  endDate: string;
  
  /**
   * The city of the employment history
   */
  city: string;

  /**
   * 
   */
  country: string;
  
  /**
   * The stack of the employment history
   */
  stack: string[];

};
