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

