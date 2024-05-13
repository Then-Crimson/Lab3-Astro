export interface ArticleAttributes {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

export interface ArticleData {
    id: number;
    attributes: ArticleAttributes;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface ApiResponse {
    data: ArticleData[];
    meta: {
        pagination: Pagination;
    };
}
