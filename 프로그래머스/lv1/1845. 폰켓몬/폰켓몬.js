function solution(nums) {
  const selected = new Set(nums);

  return selected.size > nums.length/2 ? nums.length/2 : selected.size;
}