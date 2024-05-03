import { Torrent } from "../types";

export default function determineMaxQuality(torrents: Torrent[]):string | null {
    if (torrents.length === 0) {
        return null;
    }

    const qualitiesOrder = ['720p', '1080p', '2160p'];
    let maxQualityIndex = qualitiesOrder.indexOf(torrents[0].quality);

    for (const torrent of torrents) {
        const qualityIndex = qualitiesOrder.indexOf(torrent.quality);
        if (qualityIndex > maxQualityIndex) {
            maxQualityIndex = qualityIndex;
        }
    }

    return qualitiesOrder[maxQualityIndex];
}

