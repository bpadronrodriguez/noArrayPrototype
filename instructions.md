## Implementar operaciones básicas con arreglos

En lenguajes funcionales, operaciones con arreglos como [length], [map] y [reduce] son muy comunes. Vamos a implementar una serie de operaciones básicas con arreglos, sin usar las funciones existentes de JavaScript.

El número preciso y los nombres de las operaciones a implementar dependerán del contexto, para evitar conflictos con nombres existentes. Las operaciones generales que implementarás incluyen:

- [append](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) dadas dos listas, agrega todos los elementos de la segunda lista al final de la primera lista.
- [concatenate](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) dada una serie de listas, combina todos los elementos de todas las listas en una lista aplanada.
- [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) dado un predicado y una lista, devuelve la lista de todos los elementos para los que `predicate(element)` es verdadero.
- [length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) dada una lista, devuelve el número total de elementos en ella.
- [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) dada una función y una lista, devuelve la lista de los resultados de aplicar `function(element)` a todos los elementos.
- [foldl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) dada una función, una lista y un acumulador inicial, pliega reduce cada elemento en el acumulador desde la izquierda.
- [foldr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight) dada una función, una lista y un acumulador inicial, reduce cada elemento en el acumulador desde la derecha.
- [reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) dada una lista, devuelve una lista con todos los elementos originales, pero en orden inverso.

Ten en cuenta que el orden en el que se pasan los argumentos a las funciones `fold` ([foldl], [foldr]) es significativo.

Está permitido utilizar características del lenguaje principales para construir y desestructurar arreglos mediante `destructuring`, y usar el literal `[]`, pero no se debe usar ninguna función de `Array.prototype`.
