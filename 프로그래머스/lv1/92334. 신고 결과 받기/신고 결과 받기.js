function solution(id_list, report, k) {
const bannedObj = {};
  const reportObj = {};

  for (const id of id_list) {
    bannedObj[id] = 0;
    reportObj[id] = [];
  }

  for (const rep of report) {
    const reporter = rep.split(' ')[0];
    const reportee = rep.split(' ')[1];

    if (!reportObj[reportee].includes(reporter)) {
      reportObj[reportee].push(reporter);
    }
  }

  Object.keys(reportObj).map((reportee) => {
    if (reportObj[reportee].length >= k) {
      for (const reporter of reportObj[reportee]) {
        bannedObj[reporter] += 1;
      }
    }
  })

  return Object.keys(bannedObj).map((reporter) => bannedObj[reporter]);
}