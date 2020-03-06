import express from 'express';
import seriesDB from '../db/series.mjs';
import get from './series/get.mjs';

const router = express.Router();
get.categories(router, seriesDB);
get.series(router, seriesDB);
get.serieCover(router, seriesDB);
get.seasons(router, seriesDB);
get.seasonCover(router, seriesDB);
get.episodes(router, seriesDB);
get.episodeInfo(router, seriesDB);
get.episodeAudio(router, seriesDB);
get.episodeVideo(router, seriesDB);
get.episodeThumbnail(router, seriesDB);
get.episodeSubtitles(router, seriesDB);
get.episodeSubtitle(router, seriesDB);
get.episode(router, seriesDB);
export default router;
