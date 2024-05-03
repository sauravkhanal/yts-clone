import { Torrent } from "../../types";
import determineAvailableQualities from "../../utils/determineAvailableQuality";

export default function AvailableIn(torrents: Torrent[] | undefined) {
  let available: { quality: string; video_codec: string; }[] = [];
  if (torrents) {
    available = determineAvailableQualities(torrents);
  }

  return (
    <div>
      <div className="italic text-white">Available in:</div>
      {
        available.map((value, index) => (
          <div key={index}>
            <div className="border rounded-sm border-white border-opacity-25 px-2 py-1">
              {value.quality}.WEB{value.video_codec}
            </div>
          </div>
        ))
      }
    </div>
  )
}
