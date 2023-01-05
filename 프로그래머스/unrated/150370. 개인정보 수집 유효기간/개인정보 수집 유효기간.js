function solution(today, terms, privacies) {
  const answer = [];
  const expired = {};

  for (const term of terms) {
    const todayDate = new Date(today);
    const month = Number(term.split(' ')[1]);
    expired[term.split(' ')[0]] = new Date(todayDate.setMonth(todayDate.getMonth() - month));
  }

  for (const [index, privacy] of privacies.entries()) {
    const privacyDate = new Date(privacy.split(' ')[0]);
    const privacyType = privacy.split(' ')[1];

    if (expired[privacyType] >= privacyDate) {
      answer.push(index + 1);
    }
  }

  return answer;
}