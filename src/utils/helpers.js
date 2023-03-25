export function findCountComments(comments) {
    const repliesData = comments?.filter(item => item.replies)
    const repliesCount = repliesData?.reduce((a, c) => a + c?.replies.length, 0)
    const isComments = !!comments;
    const totalCount = (isComments ? (comments?.length + repliesCount) : 0)
    return totalCount
}