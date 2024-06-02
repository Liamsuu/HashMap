# HashMap

A HashMap Algorithm. Developed by **Liamsuu**.

# How To Use

Create HashMap:

```javascript
const testHashMap = new HashMap();
```

Create HashMap Entry:

```javascript
testHashMap.set("key", "value");
```

Get the key:

```javascript
testHashMap.get("key"); // will return the key if its there
```

Check if key is in list:

```javascript
testHashMap.has("key"); // returns true if present in hashmap, false if not
```

Remove an entry from the HashMap:

```javascript
testHashMap.remove("key"); // Replaces the value with undefined, representing no value
```

Get number of keys in HashMap:

```javascript
testHashMap.length();
```

Reset a HashMap:

```javascript
testHashMap.clear();
```

Get list of keys in HashMap:

```javascript
testHashMap.keys(); // return e.g: [key1, key2, key3]
```

Get list of values in HashMap:

```javascript
testHashMap.values(); // return e.g: [value1, value2, value3]
```

Get all key-value pairs:

```javascript
testHashMap.entries(); // return e.g: [[firstKey, firstValue], [secondKey, secondValue]]
```
