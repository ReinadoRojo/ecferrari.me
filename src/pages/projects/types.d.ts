export interface Project {
    title: string;
    year: number;
    description: string;
    url: string;
    tech: PosibleTech[];
}
  
export enum Tech {
    // Languages
    TypeScript,
    JavaScript,
    HTML,
    CSS,
    Go,
    Python,
    Java,
    // Frameworks
    React,
    TailwindCSS,
    NextJS,
    Astro,
    Express,
    NestJS,
    // ORM
    Drizzle,
    Prisma,
    TypeORM,
    // Databases
    SQLite,
    MySQL,
    PostgreSQL,
    MongoDB,
    Firebase,
    // Tools
    Git,
    Vercel,

}

export type PosibleTech = keyof typeof Tech;