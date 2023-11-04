// 获取新的Comp序列最大的tab名
export const maxSequenceTabName = (files: string[]) => {
  const result = files.reduce((max, fileName) => {
    const match = fileName.match(/Comp(\d+)\.tsx/)
    if (match) {
      const sequenceNumber = parseInt(match[1], 10)
      return Math.max(max, sequenceNumber)
    }
    return max
  }, 0)
  return `Comp${result + 1}.tsx`
}
