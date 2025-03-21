export interface Metadata {
  description?: string;
  image?: string;
  schema?: Record<string, any>;
  title: string;
}

export interface Collaborator {
  displayName: string;
  profilePhoto: string;
  profileURL: string;
}

export interface CollectionItem {
  attachments?: any[];
  collaborators?: Collaborator[];
  company?: string;
  degree?: string;
  description?: string;
  event?: string;
  handle?: string;
  heading?: string;
  id: string;
  location?: string;
  platform?: string;
  presenter?: string;
  publisher?: string;
  school?: string;
  title?: string;
  type: 'workExperience' | 'project' | 'award' | 'talk' | 'writing' | 'education';
  url?: string;
  year?: string;
}

export interface Collection {
  items: CollectionItem[];
  name: string;
}
