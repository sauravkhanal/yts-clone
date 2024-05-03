/**
 * calculate pagination indexes for a give current page, total pages and range.
 * Assumes index starts from 1.
 * @param currentPage: current page number, we paginate left or right from it
 * @param totalPages total number of possible pages
 * @param maxPagesToShow total number of indices to show
 * @param range number of items to show on left and right. (Default 3)
 * @returns Array of numbers representing the pagination indexes.
 */
export default function calculatePaginationRange(currentPage: number, totalPages: number, range: number = 3, maxPagesToShow: number = 7): number[] {
    let start = Math.max(1, currentPage - range);
    let end = Math.min(totalPages, currentPage + range);

    const totalPageNumbers = end - start + 1;
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);

    if (totalPageNumbers < maxPagesToShow) {
        if (start === 1) {
            end = Math.min(totalPages, start + maxPagesToShow - 1);
        } else if (end === totalPages) {
            start = Math.max(1, end - maxPagesToShow + 1);
        }
    } else {
        if (currentPage - start < halfMaxPagesToShow) {
            end = Math.min(totalPages, start + maxPagesToShow - 1);
        } else if (end - currentPage < halfMaxPagesToShow) {
            start = Math.max(1, end - maxPagesToShow + 1);
        }
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
}

