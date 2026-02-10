function unique(arr) {
    return Array.from(new Set(arr));
}

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);