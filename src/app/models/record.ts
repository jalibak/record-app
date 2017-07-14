import { Track } from './track';

export class Record {
  id: string;
  title: string;
  artist: string;
  year: number;
  label: string;
  trackList: Track[];
}