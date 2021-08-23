function bookProgress(bookInfo) {
    let bookName = bookInfo.sort((a,b) => a.name > b.name ? 1 : -1)
    const result = [{
        status: 'completed',
        books: [] 
        },
        {
        status: 'in-progress',
        books: []
        },
        {
        status: 'not-started',
        books: []
        }
    ]
    for(let item of bookName) {
      if(item.status === 'completed') {
        result[0].books.push({id: item.id, name: item.name})
      }
      if(item.status === 'in-progress') {
        result[1].books.push({id: item.id, name: item.name})
      }
      if(item.status === 'not-started') {
        result[2].books.push({id: item.id, name: item.name})
      }
    }
    return result
  }