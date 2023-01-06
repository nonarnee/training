function solution(genres, plays) {
  let result = [];
  let genreObj = {};
  let playObj = {};

  for (const [index, genre] of genres.entries()) {
    if (genreObj[genre]) {
      genreObj[genre] += plays[index];
      continue;
    }

    genreObj[genre] = plays[index];
  }

  for (const uniqGenre of Object.keys(genreObj)) {
    playObj[uniqGenre] = genres.map((genre, index) => {
      if (genre !== uniqGenre) {
        return 0;
      }

      return plays[index];
    });
  }

  const playSort = Object.values(genreObj).sort((a, b) => b - a);
  const sortedGenre = playSort.map((play) => {
    return Object.keys(genreObj).filter((genre) => genreObj[genre] === play)[0];
  });

  function getTopTwoIndex(nums) {
    const mostPlayed = Math.max(...nums);
    let exceptMostNums = [...nums];
    exceptMostNums[nums.indexOf(mostPlayed)] = 0;
    const secondPlayed = Math.max(...exceptMostNums);

    result.push(nums.indexOf(mostPlayed));

    if (secondPlayed) {
      result.push(
        mostPlayed === secondPlayed
          ? nums.lastIndexOf(secondPlayed)
          : nums.indexOf(secondPlayed)
      );
    }
  }

  for (const genre of sortedGenre) {
    getTopTwoIndex(playObj[genre]);
  }

  return result;
}