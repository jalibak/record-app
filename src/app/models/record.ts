import { Track } from './track';

export class Record {
  catnum: string;
  title: string;
  artist: string;
  year: number;
  label: string;
  genre: string;
  trackList: Track[];
}
