# Creation

`new IndexedDbStore(dbName, keyname, indices);`

Argument | Type    | Description
---      |---      |---
`dbName` |*string* | The database name..
`keyName`|*string* | The name of the unique primary key to use for get, set and remove operations. Defaults to an auto-incrementing `id`.
`indices`|*array*  | An array of one or multiple indices which can be used to order and  the results of queries which return multiple items.

# Methods

Method            | Returns a promise for  | Description
---               | ---                    | ---
`insert(object)`  | key of the saved object| Insert an object.
`set(object)`     | key of the saved object| Insert/upate an object.
`setMany(objects)`| -                      | Insert/upate multiple objects.
`get(key)`        | object                 | Retrieves the object with the key.
`remove(key)`     | undefined              | Deletes the object with the key.
`getMany(options)`| array multiple objects | Retrieves multiple stored objects. If no filtering options are provided, it returns all objects.<ul><li>`options.start` - The first key of the results.</li><li>`options.end` - The last key of the results.</li><li>`options.count` - The number of results.</li><li>`options.offset` - The offset of the first result when set to true.</li><li>`options.orderby` - The key/index by which the results will be ordered. `options.start` and `options.end` use this key/index</li><li>`options.reverse` - Reverse the order of the results.</li></ul>
`size()`          | number of stored items | Returns the number of stored objects.
`clear()`         | undefined              | Deletes all database entries.


...
promise.abort()
...