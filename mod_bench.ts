
function add(n1:number, n2:number) {
  return n1+n2
}

Deno.bench(function addSmall() {
  add(1, 2);
});

Deno.bench(function addBig() {
  add(2 ** 32, 2 ** 32);
});
