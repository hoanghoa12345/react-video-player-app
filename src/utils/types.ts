export interface Category {
  id: string;
  name: string;
  updatedAt: string;
}

export interface VideoItem {
  createdAt: string;
  id: string;
  publishedAt: any;
  title: string;
  updatedAt: string;
  viewCount: number;
  thumbnail: Thumbnail;
  channelName: string;
}

export interface Video {
  channelName: string;
  createdAt: string;
  description: string;
  id: string;
  likeCount: number;
  publishedAt: any;
  title: string;
  updatedAt: string;
  videoUrl: string;
  viewCount: number;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  url: string;
}
