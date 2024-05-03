import { Torrent } from "../types";

interface TorrentData {
    quality: string;
    video_codec: string;
}

export default function determineAvailableQualities(torrents: Torrent[]): TorrentData[] {
    return torrents.map(torrent => ({
        quality: torrent.quality,
        video_codec: torrent.video_codec
    }));
}
