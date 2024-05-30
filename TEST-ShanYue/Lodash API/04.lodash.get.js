const object = { a: [{ b: { c: 3 } }] };

//=> 3
get(object, "a[0].b.c");

//=> 3
get(object, 'a[0]["b"]["c"]');

//=> 10086
get(object, "a[100].b.c", 10086);
