const apiKey = "AIzaSyCvc869BKpKTJLBt0j5mlzP4QB7y4I5KfA";

// const playlistId = "PLWTycz4el4t4l6uuriz3OhqR2aKy86EEP";
const playlistId = "PLSUHIk4VSHCUT6yEZuwVRuXjjOUeQqxhl";

export function playlistApi(playlistid) {
  return `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=100&playlistId=${playlistid}&key=${apiKey} `;
}
export function videoApi(videoid) {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${videoid}&key=${apiKey}`;
}

export function DataFilter(array) {
  let returnarray = [];
  array.map((data) => {
    let videodata = {
      id: data.id,
      title: data.snippet.title,
      channeltitle: data.snippet.channelTitle,
      time: data.snippet.publishedAt,
      viewconut: data.statistics.viewCount,
      likecount: data.statistics.likeCount,
      thumbnail: data.snippet.thumbnails.maxres.url,
    };
    returnarray.push(videodata);
  });
  return returnarray;
}
