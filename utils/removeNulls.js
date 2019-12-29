function removeNulls(query) {
    for(const i in query)
        if(!query[i])
            delete query[i];
}