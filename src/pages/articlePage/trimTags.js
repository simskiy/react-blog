export default function tagsTrim (tags) {
  const lastItem = tags[tags?.length - 1] || 0
  let tagsArr = tags
  if (lastItem?.trim()?.length === 0) {
    tagsArr = tags.slice(0,-1)
  }
  return tagsArr
}