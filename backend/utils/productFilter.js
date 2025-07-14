// query --> yani tum ürünler
// queryStr --> filtrelenmesini istediğim parametreler

export const applySearch = (query, queryStr) => {
    if (queryStr.keyword) {
        const searchFilter = {
            // mongoDB sorgu filtresi start
            name: {
                $regex: queryStr.keyword, // girilen kelimeyle eşleşenler
                $options: "i" // büyük/küçük harf duyarsız
            }
            // mongoDB sorgu filtresi end
        };
        return query.find(searchFilter);
    }
    return query; // eğer keyword yoksa, olduğu gibi devam et
}

// Filtreleme özelliği (örneğin kategori veya fiyat gibi alanlara göre)

export const applyFilter = (query, queryStr) => {
    const queryCopy = { ...queryStr }; // orijinali bozmamak için kopya.

    const fieldToRemove = ["keyword", "page", "limit"];
    fieldToRemove.forEach(field => delete queryCopy[field]);

    return query.find(queryCopy)

}

export const applyPagination = (query, queryStr, resultPerPage) => {
    const currentPage = Number(queryStr.page) || 1; // sayfa yoksa 1. sayfa
    const skip = resultPerPage * (currentPage - 1); // kaç ürün atlanacak

    return query.limit(resultPerPage).skip(skip); // ilgili sayfa ürünlerini döndür
}