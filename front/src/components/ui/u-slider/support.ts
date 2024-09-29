export const getWidthSumWithGap = (gap: number, elements: HTMLElement[]) => {
  let sum = 0
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i]
    sum += el.clientWidth
    if (i !== elements.length - 1) sum += gap
  }
  return sum
}
